"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type React from "react";
import {
  BookOpen, Heart, Bookmark, Search,
  Share2, Menu, X, LogOut,
  ChevronLeft, ChevronRight, Play, Pause, Loader2,
  SkipBack, SkipForward, Volume2, VolumeX, Home,
  ALargeSmall, Minus, Plus, Check,
} from "lucide-react";
import { surahData, type Surah } from "@/data/surahs";
import { surahAudioUrl } from "@/lib/audio-urls";
import Image from "next/image";

const PAGE_SIZE = 10;
const LS_BOOKMARKS  = "quran_bookmarks";
const LS_FAV_AYAHS  = "quran_fav_ayahs";

type SidePanel = "read" | "favourites" | "bookmarks";

const sideIcons: { icon: React.ElementType; label: string; panel: SidePanel }[] = [
  { icon: BookOpen, label: "Read",      panel: "read"       },
  { icon: Heart,    label: "Favorites", panel: "favourites" },
  { icon: Bookmark, label: "Bookmarks", panel: "bookmarks"  },
];

type AudioState = "idle" | "loading" | "playing" | "paused" | "error";

// ── localStorage helpers ──────────────────────────────────────────────────────
function loadSet(key: string): Set<number> {
  try {
    const raw = localStorage.getItem(key);
    return raw ? new Set(JSON.parse(raw) as number[]) : new Set();
  } catch { return new Set(); }
}
function saveSet(key: string, s: Set<number>) {
  try { localStorage.setItem(key, JSON.stringify([...s])); } catch { /* ignore */ }
}

function formatTime(s: number) {
  if (!isFinite(s) || isNaN(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

// ── Share surah ───────────────────────────────────────────────────────────────
async function shareSurah(surah: Surah): Promise<"shared" | "copied" | "error"> {
  const url = `${window.location.origin}${window.location.pathname}?surah=${surah.id}`;
  const text = `${surah.id}. ${surah.name} — ${surah.translation}\nListen & read: ${url}`;
  if (navigator.share) {
    try { await navigator.share({ title: surah.name, text, url }); return "shared"; }
    catch { /* user cancelled */ }
  }
  try { await navigator.clipboard.writeText(url); return "copied"; }
  catch { return "error"; }
}

// ── Desktop sidebar icon strip ────────────────────────────────────────────────
function Sidebar({ panel, onPanel, onLogout }: {
  panel: SidePanel; onPanel: (p: SidePanel) => void; onLogout: () => void;
}) {
  return (
    <aside className="hidden w-[68px] shrink-0 flex-col border-r border-border bg-card lg:flex">
      <div className="grid h-[68px] place-items-center bg-primary">
        <BookOpen className="h-6 w-6 text-primary-foreground" />
      </div>
      <nav className="flex flex-1 flex-col items-center gap-2 py-6">
        {sideIcons.map(item => (
          <button key={item.label} aria-label={item.label} onClick={() => onPanel(item.panel)}
            className={`grid h-10 w-10 place-items-center rounded-lg transition-colors ${
              panel === item.panel ? "bg-accent text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}>
            <item.icon className="h-5 w-5" />
          </button>
        ))}
      </nav>
      <button aria-label="Sign out" onClick={onLogout}
        className="grid h-14 place-items-center text-muted-foreground transition-colors hover:text-destructive">
        <LogOut className="h-5 w-5" />
      </button>
    </aside>
  );
}

// ── Mobile bottom navigation bar ─────────────────────────────────────────────
function MobileBottomNav({ onOpenList, panel, onPanel, onLogout }: {
  onOpenList: () => void; panel: SidePanel;
  onPanel: (p: SidePanel) => void; onLogout: () => void;
}) {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 flex h-14 items-center justify-around border-t border-border bg-card shadow-[0_-1px_8px_rgba(0,0,0,0.08)] md:hidden">
      <button aria-label="Read" onClick={() => onPanel("read")}
        className={`flex flex-col items-center gap-0.5 ${panel === "read" ? "text-primary" : "text-muted-foreground"}`}>
        <Home className="h-5 w-5" />
        <span className="text-[10px] font-medium">Home</span>
      </button>
      <button aria-label="Surah list" onClick={onOpenList}
        className="flex flex-col items-center gap-0.5 text-muted-foreground active:text-primary">
        <Menu className="h-5 w-5" />
        <span className="text-[10px] font-medium">Surahs</span>
      </button>
      <button aria-label="Favourites" onClick={() => onPanel("favourites")}
        className={`flex flex-col items-center gap-0.5 ${panel === "favourites" ? "text-primary" : "text-muted-foreground"}`}>
        <Heart className="h-5 w-5" />
        <span className="text-[10px] font-medium">Fav</span>
      </button>
      <button aria-label="Bookmarks" onClick={() => onPanel("bookmarks")}
        className={`flex flex-col items-center gap-0.5 ${panel === "bookmarks" ? "text-primary" : "text-muted-foreground"}`}>
        <Bookmark className="h-5 w-5" />
        <span className="text-[10px] font-medium">Saved</span>
      </button>
      <button aria-label="Sign out" onClick={onLogout}
        className="flex flex-col items-center gap-0.5 text-muted-foreground active:text-destructive">
        <LogOut className="h-5 w-5" />
        <span className="text-[10px] font-medium">Logout</span>
      </button>
    </nav>
  );
}

// ── Bookmarks panel ───────────────────────────────────────────────────────────
function BookmarksPanel({ bookmarks, onSelect, onRemove }: {
  bookmarks: Set<number>; onSelect: (s: Surah) => void; onRemove: (id: number) => void;
}) {
  const saved = surahData.filter(s => bookmarks.has(s.id));
  return (
    <div className="flex h-full min-h-0 flex-col bg-background">
      <div className="flex h-[60px] shrink-0 items-center gap-2 border-b border-border bg-card px-4 sm:h-[68px] sm:px-5">
        <Bookmark className="h-5 w-5 shrink-0 text-primary" />
        <span className="text-sm font-semibold text-foreground">Bookmarked Surahs</span>
        <span className="ml-auto rounded-full bg-accent px-2 py-0.5 text-[11px] font-semibold text-primary">{saved.length}</span>
      </div>
      {saved.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
          <Bookmark className="h-10 w-10 text-muted-foreground/30" />
          <p className="text-sm text-muted-foreground">No bookmarks yet.<br />Tap 🔖 on any surah to save it.</p>
        </div>
      ) : (
        <ul className="min-h-0 flex-1 space-y-[8px] overflow-y-auto p-4">
          {saved.map(s => (
            <li key={s.id}>
              <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 rounded-xl border border-transparent bg-card px-3 py-3 hover:border-border">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-primary/40 text-xs font-semibold text-primary">{s.id}</div>
                <button onClick={() => onSelect(s)} className="min-w-0 text-left">
                  <span className="block truncate text-[15px] font-semibold text-foreground">{s.name}</span>
                  <span className="block truncate text-[11px] uppercase tracking-wide text-muted-foreground">{s.translation}</span>
                </button>
                <button onClick={() => onRemove(s.id)} aria-label="Remove bookmark"
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-muted-foreground hover:bg-accent hover:text-destructive active:scale-90">
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ── Favourites panel ──────────────────────────────────────────────────────────
function FavouritesPanel({ onSelect }: { onSelect: (s: Surah) => void }) {
  const [favAyahs, setFavAyahs] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw: string[] = JSON.parse(localStorage.getItem(LS_FAV_AYAHS) ?? "[]");
      // deduplicate in case of any prior duplicates in storage
      setFavAyahs([...new Set(raw)]);
    } catch { setFavAyahs([]); }
  }, []);

  const removeFav = (key: string) => {
    setFavAyahs(prev => {
      const next = prev.filter(k => k !== key);
      try { localStorage.setItem(LS_FAV_AYAHS, JSON.stringify(next)); } catch { /* ignore */ }
      return next;
    });
  };

  return (
    <div className="flex h-full min-h-0 flex-col bg-background">
      <div className="flex h-[60px] shrink-0 items-center gap-2 border-b border-border bg-card px-4 sm:h-[68px] sm:px-5">
        <Heart className="h-5 w-5 shrink-0 text-rose-500" />
        <span className="text-sm font-semibold text-foreground">Favourite Ayahs</span>
        <span className="ml-auto rounded-full bg-accent px-2 py-0.5 text-[11px] font-semibold text-primary">{favAyahs.length}</span>
      </div>
      {favAyahs.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
          <Heart className="h-10 w-10 text-muted-foreground/30" />
          <p className="text-sm text-muted-foreground">No favourites yet.<br />Tap ❤️ on any ayah to save it.</p>
        </div>
      ) : (
        <ul className="min-h-0 flex-1 space-y-[8px] overflow-y-auto p-4">
          {favAyahs.map(key => {
            const [sid, an] = key.split(":").map(Number);
            const surah = surahData.find(s => s.id === sid);
            const ayah  = surah?.ayahs.find(a => a.number === an);
            if (!surah || !ayah) return null;
            return (
              <li key={key}>
                <div className="rounded-xl border border-transparent bg-card px-3 py-3 hover:border-border">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <button onClick={() => onSelect(surah)}
                      className="text-[12px] font-bold text-primary hover:underline">
                      {surah.name} {sid}:{an}
                    </button>
                    <button onClick={() => removeFav(key)} aria-label="Remove favourite"
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-muted-foreground hover:bg-accent hover:text-destructive active:scale-90">
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <p className="font-arabic text-right text-lg leading-[2] text-foreground">{ayah.arabic}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground line-clamp-2">{ayah.english}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

// ── Logout confirm dialog ─────────────────────────────────────────────────────
function LogoutDialog({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onCancel} />
      <div className="relative z-10 w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-[0_16px_48px_rgba(0,0,0,0.2)]">
        <div className="mb-4 flex items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-destructive/10">
            <LogOut className="h-5 w-5 text-destructive" />
          </div>
          <div>
            <h2 className="text-[15px] font-semibold text-foreground">Clear all data?</h2>
            <p className="text-[12px] text-muted-foreground">This will delete your bookmarks and favourites.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={onCancel}
            className="flex-1 rounded-xl border border-border bg-background py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent active:scale-95">
            Cancel
          </button>
          <button onClick={onConfirm}
            className="flex-1 rounded-xl bg-destructive py-2.5 text-sm font-semibold text-white transition-colors hover:opacity-90 active:scale-95">
            Clear &amp; Logout
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Surah list with per-row play button ───────────────────────────────────────
function SurahList({ activeSurah, playingSurahId, audioState, onSelect, onPlayPause }: {
  activeSurah: Surah; playingSurahId: number | null;
  audioState: AudioState; onSelect: (s: Surah) => void; onPlayPause: (s: Surah) => void;
}) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return surahData;
    return surahData.filter(s =>
      s.name.toLowerCase().includes(q) || s.translation.toLowerCase().includes(q) ||
      s.arabicName.includes(query.trim()) || String(s.id) === q
    );
  }, [query]);

  return (
    <div className="flex h-full min-h-0 flex-col bg-background">
      <div className="flex h-[60px] shrink-0 items-center gap-3 border-b border-border bg-card px-4 sm:h-[68px] sm:px-5">
        <Search className="h-5 w-5 shrink-0 text-primary" />
        <input value={query} onChange={e => setQuery(e.target.value)}
          placeholder="Search surah name or number"
          className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground" />
        {query && (
          <button onClick={() => setQuery("")} aria-label="Clear search"
            className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground">
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
      <ul className="min-h-0 flex-1 space-y-[8px] overflow-y-auto p-4 sm:space-y-[10px] sm:p-5">
        {results.map(s => {
          const isActive = s.id === activeSurah.id;
          const isThisPlaying = s.id === playingSurahId && audioState === "playing";
          const isThisLoading = s.id === playingSurahId && audioState === "loading";
          const isThisCurrent = s.id === playingSurahId;
          return (
            <li key={s.id}>
              <div className={`grid w-full grid-cols-[auto_minmax(0,1fr)_auto_auto] items-center gap-2 rounded-xl border bg-card px-3 py-3 transition-all active:scale-[0.98] ${
                isActive ? "border-primary shadow-card" : "border-transparent hover:border-border"}`}>

                {/* Number badge */}
                <button onClick={() => onSelect(s)} aria-label={`Open ${s.name}`}
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-xs font-semibold ${
                    isActive ? "border-primary bg-primary text-primary-foreground" : "border-primary/40 text-primary"}`}>
                  {s.id}
                </button>

                {/* Name — tap to open */}
                <button onClick={() => onSelect(s)} className="min-w-0 text-left">
                  <span className="block truncate text-[15px] font-semibold text-foreground">{s.name}</span>
                  <span className="block truncate text-[11px] uppercase tracking-wide text-muted-foreground">{s.translation}</span>
                </button>

                {/* Play / pause — separate column, never nested */}
                <button
                  onClick={e => { e.stopPropagation(); onPlayPause(s); }}
                  aria-label={isThisPlaying ? `Pause ${s.name}` : `Play ${s.name}`}
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                    isThisCurrent
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}>
                  {isThisLoading
                    ? <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    : isThisPlaying
                      ? <Pause className="h-3.5 w-3.5" />
                      : <Play className="h-3.5 w-3.5 translate-x-[1px]" />}
                </button>

                {/* Arabic name */}
                <span className="font-arabic shrink-0 text-base text-primary">{s.arabicName}</span>
              </div>
            </li>
          );
        })}
        {results.length === 0 && <li className="py-10 text-center text-sm text-muted-foreground">No surah found</li>}
      </ul>
    </div>
  );
}

// ── Unified mini player bar (mobile + desktop) ────────────────────────────────
function MiniPlayer({ surah, audioState, currentTime, duration, volume, muted,
  onPlayPause, onSeek, onVolumeChange, onMute, onPrev, onNext, onDismiss, mobile }: {
  surah: Surah; audioState: AudioState; currentTime: number; duration: number;
  volume: number; muted: boolean; mobile?: boolean;
  onPlayPause: () => void; onSeek: (t: number) => void;
  onVolumeChange: (v: number) => void; onMute: () => void;
  onPrev: () => void; onNext: () => void; onDismiss: () => void;
}) {
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const isLoading = audioState === "loading";
  const isPlaying = audioState === "playing";

  const inner = (
    <>
      {/* Seek bar */}
      <div className="flex items-center gap-2 px-3 pt-2.5 sm:px-4">
        <span className="w-9 shrink-0 text-right text-[11px] tabular-nums text-muted-foreground">{formatTime(currentTime)}</span>
        <div className="relative flex-1">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-primary transition-[width]" style={{ width: `${progress}%` }} />
          </div>
          <input type="range" min={0} max={duration || 0} step={0.1} value={currentTime}
            onChange={e => onSeek(parseFloat(e.target.value))}
            disabled={duration === 0} aria-label="Seek"
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0 disabled:cursor-default" />
        </div>
        <span className="w-9 shrink-0 text-[11px] tabular-nums text-muted-foreground">{formatTime(duration)}</span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2 px-3 pb-2.5 pt-1.5 sm:gap-3 sm:px-4">
        {/* Surah info */}
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold text-foreground sm:text-sm">{surah.id}. {surah.name}</p>
          <p className="truncate text-[11px] text-muted-foreground">{surah.translation}</p>
        </div>
        {/* Playback */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <button onClick={onPrev} disabled={surah.id <= 1} aria-label="Previous surah"
            className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground active:bg-accent disabled:pointer-events-none disabled:opacity-30">
            <SkipBack className="h-4 w-4" />
          </button>
          <button onClick={onPlayPause} aria-label={isPlaying ? "Pause" : "Play"}
            className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground shadow transition-transform hover:scale-105 active:scale-95 sm:h-11 sm:w-11">
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> :
             isPlaying  ? <Pause className="h-5 w-5" /> :
                          <Play  className="h-5 w-5 translate-x-[2px]" />}
          </button>
          <button onClick={onNext} disabled={surah.id >= 114} aria-label="Next surah"
            className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground active:bg-accent disabled:pointer-events-none disabled:opacity-30">
            <SkipForward className="h-4 w-4" />
          </button>
        </div>
        {/* Volume — desktop only */}
        <div className="hidden items-center gap-1.5 sm:flex">
          <button onClick={onMute} aria-label={muted ? "Unmute" : "Mute"}
            className="grid h-7 w-7 place-items-center rounded text-muted-foreground hover:text-foreground">
            {muted || volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          <input type="range" min={0} max={1} step={0.05} value={muted ? 0 : volume}
            onChange={e => onVolumeChange(parseFloat(e.target.value))}
            aria-label="Volume" className="h-1.5 w-20 cursor-pointer accent-primary" />
        </div>
        {/* Dismiss */}
        <button onClick={onDismiss} aria-label="Hide player"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground active:bg-accent">
          <X className="h-4 w-4" />
        </button>
      </div>
    </>
  );

  if (mobile) {
    // Fixed bar on mobile, sitting above the bottom nav (h-14 = 56px)
    return (
      <div className="fixed inset-x-0 z-50 border-t border-border bg-card shadow-[0_-4px_16px_rgba(0,0,0,0.12)]"
        style={{ bottom: "3.5rem" }}>
        {inner}
      </div>
    );
  }

  // Normal-flow bar on desktop
  return (
    <div className="shrink-0 border-t border-border bg-card shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
      {inner}
    </div>
  );
}

// ── Ayah card ─────────────────────────────────────────────────────────────────
function AyahCard({ surahId, ayah, arabicSize, lineHeight }: {
  surahId: number;
  ayah: { number: number; arabic: string; english: string; urdu: string };
  arabicSize: number;
  lineHeight: number;
}) {
  const key = `${surahId}:${ayah.number}`;
  const [liked, setLiked] = useState(false);

  // Read from localStorage only on the client after mount (avoids SSR mismatch)
  useEffect(() => {
    try {
      const all: string[] = JSON.parse(localStorage.getItem("quran_fav_ayahs") ?? "[]");
      if (all.includes(key)) setLiked(true);
    } catch { /* ignore */ }
  }, [key]);

  const toggleLike = () => {
    setLiked(v => {
      const next = !v;
      try {
        const all: string[] = JSON.parse(localStorage.getItem("quran_fav_ayahs") ?? "[]");
        const deduped = [...new Set(all)]; // guard against any existing duplicates
        const updated = next
          ? deduped.includes(key) ? deduped : [...deduped, key]
          : deduped.filter(k => k !== key);
        localStorage.setItem("quran_fav_ayahs", JSON.stringify(updated));
      } catch { /* ignore */ }
      return next;
    });
  };

  return (
    <article className="rounded-xl bg-card p-4 shadow-card sm:p-5">
      <p
        className="font-arabic mb-4 text-right text-foreground"
        style={{ fontSize: `${arabicSize}px`, lineHeight }}
      >{ayah.arabic}</p>
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-lg font-bold text-primary">{surahId}:{ayah.number}</span>
          <span className="text-[11px] uppercase tracking-wide text-muted-foreground">English · Ahmed Ali</span>
        </div>
        {/* Favourite this ayah */}
        <button onClick={toggleLike} aria-label={liked ? "Remove from favourites" : "Favourite this ayah"}
          className="grid h-8 w-8 shrink-0 place-items-center rounded-lg transition-colors active:scale-90 hover:bg-accent touch-manipulation">
          <Heart className={`h-4 w-4 transition-colors ${liked ? "fill-rose-500 text-rose-500" : "text-muted-foreground"}`} />
        </button>
      </div>
      <p className="mt-3 text-[15px] leading-relaxed text-foreground">{ayah.english}</p>
      <p className="mt-2 text-right text-[15px] leading-relaxed text-muted-foreground" dir="rtl">{ayah.urdu}</p>
    </article>
  );
}

// ── Reading toolbar: surah nav + play + actions + text controls ───────────────
function ReadingToolbar({ active, totalPages, page, arabicSize, lineHeight,
  onSizeChange, onLineChange, onPrevSurah, onNextSurah,
  onPlayPause, playingSurahId, audioState,
  isFavourite, isBookmarked, onToggleFavourite, onToggleBookmark, onShare, shareStatus }: {
  active: Surah; totalPages: number; page: number; arabicSize: number; lineHeight: number;
  onSizeChange: (d: number) => void; onLineChange: (d: number) => void;
  onPrevSurah: () => void; onNextSurah: () => void;
  onPlayPause: (s: Surah) => void; playingSurahId: number | null; audioState: AudioState;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onShare: () => void; shareStatus: "idle" | "copied" | "shared";
}) {
  const hasPrevSurah = active.id > 1;
  const hasNextSurah = active.id < 114;
  const isThisSurahPlaying = active.id === playingSurahId && audioState === "playing";
  const isThisSurahLoading = active.id === playingSurahId && audioState === "loading";

  return (
    <div className="shrink-0 border-b border-border bg-card">
      {/* Row 1 — prev · name + play · next */}
      <div className="flex items-center gap-2 px-3 pt-2.5 sm:px-5">
        <button onClick={onPrevSurah} disabled={!hasPrevSurah} aria-label="Previous surah"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border bg-background text-foreground transition-colors active:bg-accent disabled:pointer-events-none disabled:opacity-30">
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-center gap-2">
            <div className="min-w-0 text-center">
              <h2 className="truncate text-[14px] font-semibold text-foreground sm:text-[15px]">{active.name}</h2>
              <p className="truncate text-[10px] uppercase tracking-wide text-muted-foreground sm:text-[11px]">
                {active.translation} · {active.ayahCount} ayahs · {active.revelation}
                {totalPages > 1 && ` · p.${page}/${totalPages}`}
              </p>
            </div>
            <button
              onClick={() => onPlayPause(active)}
              aria-label={isThisSurahPlaying ? `Pause ${active.name}` : `Play ${active.name}`}
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-full shadow-sm transition-all active:scale-95 hover:scale-105 ${
                active.id === playingSurahId
                  ? "bg-primary text-primary-foreground"
                  : "border-2 border-primary bg-card text-primary hover:bg-primary hover:text-primary-foreground"
              }`}>
              {isThisSurahLoading
                ? <Loader2 className="h-4 w-4 animate-spin" />
                : isThisSurahPlaying
                  ? <Pause className="h-4 w-4" />
                  : <Play className="h-4 w-4 translate-x-[1px]" />}
            </button>
          </div>
        </div>

        <button onClick={onNextSurah} disabled={!hasNextSurah} aria-label="Next surah"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border bg-background text-foreground transition-colors active:bg-accent disabled:pointer-events-none disabled:opacity-30">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Row 2 — actions + text controls */}
      <div className="flex items-center gap-2 px-3 pb-2.5 pt-2 sm:px-5">
        {/* Surah-level actions */}
        <div className="flex items-center gap-1">
          {/* Bookmark */}
          <button onClick={onToggleBookmark}
            aria-label={isBookmarked ? "Remove bookmark" : "Bookmark surah"}
            className="grid h-8 w-8 place-items-center rounded-lg transition-colors active:scale-90 hover:bg-accent">
            <Bookmark className={`h-4 w-4 transition-colors ${isBookmarked ? "fill-primary text-primary" : "text-muted-foreground"}`} />
          </button>
          {/* Share */}
          <button onClick={onShare}
            aria-label="Share surah"
            className="grid h-8 w-8 place-items-center rounded-lg transition-colors active:scale-90 hover:bg-accent">
            {shareStatus !== "idle"
              ? <Check className="h-4 w-4 text-primary" />
              : <Share2 className="h-4 w-4 text-muted-foreground" />}
          </button>
        </div>

        <div className="flex-1" />

        {/* Font size */}
        <div className="flex items-center gap-0.5 rounded-lg border border-border bg-background">
          <button onClick={() => onSizeChange(-2)} aria-label="Smaller text"
            className="grid h-8 w-8 place-items-center rounded-l-lg text-muted-foreground transition-colors active:bg-accent hover:bg-accent hover:text-foreground">
            <Minus className="h-3.5 w-3.5" />
          </button>
          <div className="flex h-8 min-w-[2.8rem] items-center justify-center gap-1 border-x border-border px-1">
            <ALargeSmall className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-[12px] tabular-nums font-semibold text-foreground">{arabicSize}</span>
          </div>
          <button onClick={() => onSizeChange(+2)} aria-label="Larger text"
            className="grid h-8 w-8 place-items-center rounded-r-lg text-muted-foreground transition-colors active:bg-accent hover:bg-accent hover:text-foreground">
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="h-6 w-px bg-border" />

        {/* Line height */}
        <div className="flex items-center gap-0.5 rounded-lg border border-border bg-background">
          <button onClick={() => onLineChange(-0.2)} aria-label="Tighter lines"
            className="grid h-8 w-8 place-items-center rounded-l-lg text-muted-foreground transition-colors active:bg-accent hover:bg-accent hover:text-foreground">
            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <line x1="1" y1="2" x2="14" y2="2"/><line x1="1" y1="6.5" x2="14" y2="6.5"/><line x1="1" y1="11" x2="14" y2="11"/>
            </svg>
          </button>
          <div className="flex h-8 min-w-[2.2rem] items-center justify-center border-x border-border px-1">
            <span className="text-[12px] tabular-nums font-semibold text-foreground">{lineHeight.toFixed(1)}</span>
          </div>
          <button onClick={() => onLineChange(+0.2)} aria-label="Looser lines"
            className="grid h-8 w-8 place-items-center rounded-r-lg text-muted-foreground transition-colors active:bg-accent hover:bg-accent hover:text-foreground">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <line x1="1" y1="1.5" x2="14" y2="1.5"/><line x1="1" y1="7.5" x2="14" y2="7.5"/><line x1="1" y1="13.5" x2="14" y2="13.5"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Top header ────────────────────────────────────────────────────────────────
function TopHeader({ onOpenList }: { onOpenList: () => void }) {
  return (
    <header className="grid shrink-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 border-b border-border bg-card px-3 py-2 sm:gap-3 sm:px-4 sm:py-3 md:px-6">
      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
        <button aria-label="Open surah list" onClick={onOpenList}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-foreground active:bg-muted md:hidden">
          <Menu className="h-5 w-5" />
        </button>
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl sm:h-10 sm:w-10">
          <Image src="/Qari.png" alt="Qari Abdul Mateen Shaheen" fill className="object-cover" priority />
        </div>
        <div className="min-w-0">
          <h1 className="truncate text-[15px] font-bold leading-tight text-foreground sm:text-[17px]">
            Qari Abdul Mateen Shaheen
          </h1>
          <p className="truncate text-[10px] uppercase tracking-wide text-muted-foreground sm:text-[11px]">
            Read · Reflect · Recite
          </p>
        </div>
      </div>
      <span className="font-arabic hidden justify-self-center text-xl text-primary lg:block">
        بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
      </span>
      {/* Qari info badge */}
      <div className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-background py-1 pl-1 pr-2 sm:gap-3 sm:pr-4">
        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full sm:h-9 sm:w-9">
          <Image src="/Qari.png" alt="Qari Abdul Mateen Shaheen" fill className="object-cover" />
        </div>
        <div className="hidden leading-tight sm:block">
          <p className="text-[13px] font-semibold text-foreground">Qari Abdul Mateen Shaheen</p>
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Reciter</p>
        </div>
      </div>
    </header>
  );
}

// ── Root component ────────────────────────────────────────────────────────────
export function QuranReader() {
  const [active, setActive] = useState<Surah>(surahData[0]);
  const [page, setPage] = useState(1);
  const [listOpen, setListOpen] = useState(false);
  const [sidePanel, setSidePanel] = useState<SidePanel>("read");
  const [logoutOpen, setLogoutOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Bookmarks (localStorage) — favourites are handled per-ayah inside AyahCard
  const [bookmarks,  setBookmarks]  = useState<Set<number>>(new Set());
  const [mounted, setMounted] = useState(false);
  const [shareStatus, setShareStatus] = useState<"idle"|"copied"|"shared">("idle");
  const shareTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load persisted data on mount + handle ?surah= deep-link
  useEffect(() => {
    setMounted(true);
    setBookmarks(loadSet(LS_BOOKMARKS));
    const params = new URLSearchParams(window.location.search);
    const sid = parseInt(params.get("surah") ?? "", 10);
    if (sid >= 1 && sid <= 114) {
      const target = surahData.find(s => s.id === sid);
      if (target) { setActive(target); setPage(1); }
    }
  }, []);

  const handleToggleBookmark = useCallback(() => {
    setBookmarks(prev => {
      const next = new Set(prev);
      next.has(active.id) ? next.delete(active.id) : next.add(active.id);
      saveSet(LS_BOOKMARKS, next);
      return next;
    });
  }, [active.id]);

  const handleShare = useCallback(async () => {
    const result = await shareSurah(active);
    if (result === "copied" || result === "shared") {
      setShareStatus(result);
      if (shareTimerRef.current) clearTimeout(shareTimerRef.current);
      shareTimerRef.current = setTimeout(() => setShareStatus("idle"), 2000);
    }
  }, [active]);

  const handleLogoutConfirm = useCallback(() => {
    try {
      localStorage.removeItem(LS_BOOKMARKS);
      localStorage.removeItem(LS_FAV_AYAHS);
    } catch { /* ignore */ }
    setBookmarks(new Set());
    setLogoutOpen(false);
    setSidePanel("read");
  }, []);

  // Audio state
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playingSurah, setPlayingSurah] = useState<Surah | null>(null);
  const [audioState, setAudioState] = useState<AudioState>("idle");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [playerVisible, setPlayerVisible] = useState(true);

  // Text display state
  const [arabicSize, setArabicSize] = useState(28);
  const [lineHeight, setLineHeight] = useState(2.4);

  const handleSizeChange = useCallback((delta: number) => {
    setArabicSize(s => Math.min(52, Math.max(18, s + delta)));
  }, []);
  const handleLineChange = useCallback((delta: number) => {
    setLineHeight(h => Math.round(Math.min(3.6, Math.max(1.6, h + delta)) * 10) / 10);
  }, []);

  const totalPages = Math.ceil(active.ayahCount / PAGE_SIZE);
  const pageAyahs = active.ayahs.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const scrollToTop = () => scrollRef.current?.scrollTo({ top: 0, behavior: "instant" });

  const select = (s: Surah) => {
    setActive(s); setPage(1); setListOpen(false);
    setTimeout(() => scrollRef.current?.scrollTo({ top: 0, behavior: "instant" }), 0);
  };

  const goToPage = (p: number) => { setPage(p); scrollToTop(); };

  const loadedSurahIdRef = useRef<number | null>(null);

  const playSurah = useCallback((s: Surah) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.muted = muted;
    if (loadedSurahIdRef.current === s.id) {
      audio.play().catch(() => setAudioState("error"));
      return;
    }
    loadedSurahIdRef.current = s.id;
    audio.src = surahAudioUrl(s.id);
    audio.load();
    setPlayingSurah(s);
    setAudioState("loading");
    setCurrentTime(0);
    setDuration(0);
    setPlayerVisible(true);
    audio.play().catch(() => setAudioState("error"));
  }, [volume, muted]);

  const handlePlayPause = useCallback((s: Surah) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (s.id !== playingSurah?.id) { playSurah(s); return; }
    if (audioState === "playing") {
      audio.pause();
    } else {
      setPlayerVisible(true);
      audio.play().catch(() => setAudioState("error"));
    }
  }, [audioState, playingSurah, playSurah]);

  const handleCurrentPlayPause = useCallback(() => {
    if (playingSurah) handlePlayPause(playingSurah);
  }, [playingSurah, handlePlayPause]);

  // Navigate the reading panel to prev/next surah
  const handlePrevReadSurah = useCallback(() => {
    const prev = surahData.find(s => s.id === active.id - 1);
    if (prev) select(prev);
  }, [active]);  // eslint-disable-line react-hooks/exhaustive-deps

  const handleNextReadSurah = useCallback(() => {
    const next = surahData.find(s => s.id === active.id + 1);
    if (next) select(next);
  }, [active]);  // eslint-disable-line react-hooks/exhaustive-deps

  const handlePrev = useCallback(() => {
    if (!playingSurah) return;
    const prev = surahData.find(s => s.id === playingSurah.id - 1);
    if (prev) { setPlayingSurah(prev); playSurah(prev); select(prev); }
  }, [playingSurah, playSurah]);  // eslint-disable-line react-hooks/exhaustive-deps

  const handleNext = useCallback(() => {
    if (!playingSurah) return;
    const next = surahData.find(s => s.id === playingSurah.id + 1);
    if (next) { setPlayingSurah(next); playSurah(next); select(next); }
  }, [playingSurah, playSurah]);  // eslint-disable-line react-hooks/exhaustive-deps

  const handleSeek = useCallback((t: number) => {
    if (audioRef.current) { audioRef.current.currentTime = t; setCurrentTime(t); }
  }, []);

  const handleVolumeChange = useCallback((v: number) => {
    setVolume(v); setMuted(v === 0);
    if (audioRef.current) { audioRef.current.volume = v; audioRef.current.muted = v === 0; }
  }, []);

  const handleMute = useCallback(() => {
    setMuted(m => { if (audioRef.current) audioRef.current.muted = !m; return !m; });
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setAudioState("playing");
    const onPause = () => { if (!audio.ended) setAudioState("paused"); };
    const onWaiting = () => setAudioState("loading");
    const onPlaying = () => setAudioState("playing");
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onDuration = () => setDuration(audio.duration);
    const onEnded = () => { setAudioState("paused"); audio.currentTime = 0; setCurrentTime(0); };
    const onError = () => setAudioState("error");
    audio.addEventListener("play", onPlay);
    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("waiting", onWaiting);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("durationchange", onDuration);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);
    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("waiting", onWaiting);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("durationchange", onDuration);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
    };
  }, []);

  // Bottom padding on mobile: bottom nav (56px) + player bar (~76px) + safe area
  // On desktop the player is in normal flow so only default padding needed
  const mobileBottomPad = playingSurah && playerVisible
    ? "pb-[calc(3.5rem+5rem+env(safe-area-inset-bottom))]"
    : "pb-[calc(3.5rem+env(safe-area-inset-bottom))]";

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      <audio ref={audioRef} preload="none" />

      {/* ── Page loading splash ── */}
      {!mounted && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 bg-background">
          <div className="relative h-28 w-28 overflow-hidden rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.18)] sm:h-36 sm:w-36">
            <Image src="/Qari.png" alt="Qari Abdul Mateen Shaheen" fill className="object-cover" priority />
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-foreground sm:text-xl">Qari Abdul Mateen Shaheen</p>
            <p className="mt-0.5 text-[11px] uppercase tracking-widest text-muted-foreground">Read · Reflect · Recite</p>
          </div>
          <p className="font-arabic text-2xl leading-loose text-primary sm:text-3xl">
            بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ
          </p>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:0ms]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:150ms]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:300ms]" />
          </div>
        </div>
      )}

      <TopHeader onOpenList={() => setListOpen(true)} />

      <div className="flex min-h-0 flex-1 overflow-hidden">
        <Sidebar panel={sidePanel} onPanel={setSidePanel} onLogout={() => setLogoutOpen(true)} />

        {/* Desktop left panel — switches based on sidePanel */}
        <div className="hidden w-[300px] shrink-0 border-r border-border md:block lg:w-[320px]">
          {sidePanel === "read" && (
            <SurahList activeSurah={active} playingSurahId={playingSurah?.id ?? null}
              audioState={audioState} onSelect={select} onPlayPause={handlePlayPause} />
          )}
          {sidePanel === "bookmarks" && (
            <BookmarksPanel
              bookmarks={bookmarks}
              onSelect={s => { select(s); setSidePanel("read"); }}
              onRemove={id => setBookmarks(prev => {
                const next = new Set(prev); next.delete(id); saveSet(LS_BOOKMARKS, next); return next;
              })} />
          )}
          {sidePanel === "favourites" && (
            <FavouritesPanel onSelect={s => { select(s); setSidePanel("read"); }} />
          )}
        </div>

        {/* Reading panel */}
        <main className="flex min-w-0 flex-1 flex-col bg-card">
          <ReadingToolbar
            active={active} totalPages={totalPages} page={page}
            arabicSize={arabicSize} lineHeight={lineHeight}
            onSizeChange={handleSizeChange} onLineChange={handleLineChange}
            onPrevSurah={handlePrevReadSurah} onNextSurah={handleNextReadSurah}
            onPlayPause={handlePlayPause}
            playingSurahId={playingSurah?.id ?? null}
            audioState={audioState}
            isBookmarked={mounted && bookmarks.has(active.id)}
            onToggleBookmark={handleToggleBookmark}
            onShare={handleShare}
            shareStatus={shareStatus}
          />

          <div ref={scrollRef} className={`relative min-h-0 flex-1 overflow-y-auto bg-background p-3 sm:p-5 ${mobileBottomPad} md:pb-5`}>
            <div className="relative z-10 mx-auto flex max-w-3xl flex-col gap-[12px] sm:gap-[15px]">
              {page === 1 && active.id !== 1 && active.id !== 9 && (
                <div className="rounded-xl bg-card px-4 py-4 text-center shadow-card sm:px-5">
                  <p className="font-arabic text-2xl leading-[2.2] text-primary sm:text-3xl">
                    بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    In the name of Allah, the Most Gracious, the Most Merciful
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground" dir="rtl">
                    اللہ کے نام سے جو رحمان و رحیم ہے
                  </p>
                </div>
              )}
              {pageAyahs.map(a => <AyahCard key={a.number} surahId={active.id} ayah={a} arabicSize={arabicSize} lineHeight={lineHeight} />)}
              {totalPages > 1 && (
                <div className="flex items-center justify-between gap-2 pb-4 pt-2">
                  <button onClick={() => goToPage(page - 1)} disabled={page === 1} aria-label="Previous page"
                    className="flex items-center gap-1 rounded-xl border border-border bg-card px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-40 sm:py-2">
                    <ChevronLeft className="h-4 w-4" />Prev
                  </button>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                      .reduce<(number | "…")[]>((acc, p, idx, arr) => {
                        if (idx > 0 && p - (arr[idx - 1] as number) > 1) acc.push("…");
                        acc.push(p); return acc;
                      }, [])
                      .map((p, idx) => p === "…"
                        ? <span key={`e-${idx}`} className="px-1 text-sm text-muted-foreground">…</span>
                        : <button key={p} onClick={() => goToPage(p as number)} aria-label={`Page ${p}`}
                            aria-current={p === page ? "page" : undefined}
                            className={`grid h-9 w-9 place-items-center rounded-xl text-sm font-semibold transition-colors sm:h-8 sm:w-8 ${
                              p === page ? "bg-primary text-primary-foreground" : "border border-border bg-card text-foreground hover:bg-accent"}`}>
                            {p}
                          </button>
                      )}
                  </div>
                  <button onClick={() => goToPage(page + 1)} disabled={page === totalPages} aria-label="Next page"
                    className="flex items-center gap-1 rounded-xl border border-border bg-card px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-40 sm:py-2">
                    Next<ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Mini player — mobile fixed bar (above bottom nav) */}
      {playingSurah && playerVisible && (
        <div className="md:hidden">
          <MiniPlayer mobile surah={playingSurah} audioState={audioState}
            currentTime={currentTime} duration={duration} volume={volume} muted={muted}
            onPlayPause={handleCurrentPlayPause}
            onSeek={handleSeek} onVolumeChange={handleVolumeChange} onMute={handleMute}
            onPrev={handlePrev} onNext={handleNext}
            onDismiss={() => {
                const audio = audioRef.current;
                if (audio) { audio.pause(); audio.src = ""; }
                loadedSurahIdRef.current = null;
                setPlayingSurah(null);
                setAudioState("idle");
                setCurrentTime(0);
                setDuration(0);
                setPlayerVisible(false);
              }} />
        </div>
      )}

      {/* Mini player — desktop in-flow bar */}
      {playingSurah && playerVisible && (
        <div className="hidden md:block">
          <MiniPlayer surah={playingSurah} audioState={audioState}
            currentTime={currentTime} duration={duration} volume={volume} muted={muted}
            onPlayPause={handleCurrentPlayPause}
            onSeek={handleSeek} onVolumeChange={handleVolumeChange} onMute={handleMute}
            onPrev={handlePrev} onNext={handleNext}
            onDismiss={() => {
                const audio = audioRef.current;
                if (audio) { audio.pause(); audio.src = ""; }
                loadedSurahIdRef.current = null;
                setPlayingSurah(null);
                setAudioState("idle");
                setCurrentTime(0);
                setDuration(0);
                setPlayerVisible(false);
              }} />
        </div>
      )}

      {/* Mobile bottom nav bar */}
      <MobileBottomNav
        onOpenList={() => setListOpen(true)}
        panel={sidePanel} onPanel={setSidePanel}
        onLogout={() => setLogoutOpen(true)} />

      {/* Mobile surah list drawer (slides from bottom) */}
      {listOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end md:hidden">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setListOpen(false)} />
          <div className="relative z-10 flex flex-col rounded-t-2xl bg-background shadow-[0_-4px_24px_rgba(0,0,0,0.18)]"
            style={{ height: "80dvh" }}>
            {/* Drag handle */}
            <div className="flex shrink-0 items-center justify-center pt-3 pb-1">
              <div className="h-1 w-10 rounded-full bg-border" />
            </div>
            <div className="flex shrink-0 items-center justify-between px-5 pb-3">
              <h2 className="text-base font-semibold text-foreground">All Surahs</h2>
              <button onClick={() => setListOpen(false)} aria-label="Close"
                className="grid h-8 w-8 place-items-center rounded-full bg-muted text-muted-foreground">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-hidden">
              <SurahList activeSurah={active} playingSurahId={playingSurah?.id ?? null}
                audioState={audioState} onSelect={select} onPlayPause={handlePlayPause} />
            </div>
          </div>
        </div>
      )}

      {/* Desktop surah list overlay (md breakpoint gap — shown on md but not lg) */}
      {listOpen && (
        <div className="fixed inset-0 z-50 hidden max-md:flex md:flex lg:hidden">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setListOpen(false)} />
          <div className="relative z-10 flex h-full w-[85%] max-w-sm flex-col bg-background shadow-card">
            <button aria-label="Close" onClick={() => setListOpen(false)}
              className="absolute right-4 top-5 z-20 text-muted-foreground">
              <X className="h-5 w-5" />
            </button>
            <SurahList activeSurah={active} playingSurahId={playingSurah?.id ?? null}
              audioState={audioState} onSelect={select} onPlayPause={handlePlayPause} />
          </div>
        </div>
      )}

      {/* Mobile panels — Bookmarks & Favourites (slide up from bottom, same style as surah drawer) */}
      {(sidePanel === "bookmarks" || sidePanel === "favourites") && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end md:hidden">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setSidePanel("read")} />
          <div className="relative z-10 flex flex-col rounded-t-2xl bg-background shadow-[0_-4px_24px_rgba(0,0,0,0.18)]"
            style={{ height: "85dvh" }}>
            <div className="flex shrink-0 items-center justify-center pt-3 pb-1">
              <div className="h-1 w-10 rounded-full bg-border" />
            </div>
            <div className="min-h-0 flex-1 overflow-hidden">
              {sidePanel === "bookmarks" && (
                <BookmarksPanel
                  bookmarks={bookmarks}
                  onSelect={s => { select(s); setSidePanel("read"); }}
                  onRemove={id => setBookmarks(prev => {
                    const next = new Set(prev); next.delete(id); saveSet(LS_BOOKMARKS, next); return next;
                  })} />
              )}
              {sidePanel === "favourites" && (
                <FavouritesPanel onSelect={s => { select(s); setSidePanel("read"); }} />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Logout confirm dialog */}
      {logoutOpen && (
        <LogoutDialog
          onConfirm={handleLogoutConfirm}
          onCancel={() => setLogoutOpen(false)} />
      )}
    </div>
  );
}
