"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { surahAudioUrl } from "@/lib/audio-urls";
import type { Surah } from "@/data/surahs";

// ─── Types ────────────────────────────────────────────────────────────────────

type PlayerState = "idle" | "loading" | "playing" | "paused" | "error";

interface SurahAudioPlayerProps {
  surah: Surah;
  /** All surahs, used for previous/next navigation */
  allSurahs: Surah[];
  onSurahChange: (surah: Surah) => void;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function SurahAudioPlayer({
  surah,
  allSurahs,
  onSurahChange,
}: SurahAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [state, setState] = useState<PlayerState>("idle");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const audioUrl = surahAudioUrl(surah.id);
  const hasR2Url = Boolean(process.env.NEXT_PUBLIC_R2_PUBLIC_URL);

  const prevSurah = allSurahs.find((s) => s.id === surah.id - 1) ?? null;
  const nextSurah = allSurahs.find((s) => s.id === surah.id + 1) ?? null;

  // ── Reset player when surah changes ────────────────────────────────────────
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setCurrentTime(0);
    setDuration(0);
    setState("idle");
    setErrorMsg("");
  }, [surah.id]);

  // ── Sync volume / mute ─────────────────────────────────────────────────────
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.muted = muted;
  }, [volume, muted]);

  // ── Audio event handlers ────────────────────────────────────────────────────
  const handleLoadStart = useCallback(() => setState("loading"), []);

  const handleCanPlay = useCallback(() => {
    setState((prev) => (prev === "loading" ? "paused" : prev));
  }, []);

  const handlePlay = useCallback(() => setState("playing"), []);
  const handlePause = useCallback(() => setState("paused"), []);

  const handleTimeUpdate = useCallback(() => {
    setCurrentTime(audioRef.current?.currentTime ?? 0);
  }, []);

  const handleDurationChange = useCallback(() => {
    setDuration(audioRef.current?.duration ?? 0);
  }, []);

  const handleEnded = useCallback(() => {
    setState("paused");
    setCurrentTime(0);
    if (audioRef.current) audioRef.current.currentTime = 0;
  }, []);

  const handleError = useCallback(() => {
    const audio = audioRef.current;
    const code = audio?.error?.code;
    const messages: Record<number, string> = {
      1: "Playback aborted.",
      2: "Network error — check your connection.",
      3: "Audio decoding failed.",
      4: "Audio format not supported.",
    };
    setErrorMsg(
      code ? (messages[code] ?? "Unknown error.") : "Failed to load audio.",
    );
    setState("error");
  }, []);

  // ── Controls ────────────────────────────────────────────────────────────────
  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (state === "playing") {
      audio.pause();
    } else {
      audio.play().catch(() => {
        setErrorMsg("Playback blocked. Tap play again.");
        setState("error");
      });
    }
  }, [state]);

  const seek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const t = parseFloat(e.target.value);
    if (audioRef.current) audioRef.current.currentTime = t;
    setCurrentTime(t);
  }, []);

  const changeVolume = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    setMuted(v === 0);
  }, []);

  const toggleMute = useCallback(() => setMuted((m) => !m), []);

  const goToPrev = useCallback(() => {
    if (prevSurah) onSurahChange(prevSurah);
  }, [prevSurah, onSurahChange]);

  const goToNext = useCallback(() => {
    if (nextSurah) onSurahChange(nextSurah);
  }, [nextSurah, onSurahChange]);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  // ── Render ──────────────────────────────────────────────────────────────────
  if (!hasR2Url) {
    return (
      <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
        <AlertCircle className="h-4 w-4 shrink-0 text-yellow-500" />
        <span>
          Audio unavailable — add{" "}
          <code className="rounded bg-muted px-1 text-xs">
            NEXT_PUBLIC_R2_PUBLIC_URL
          </code>{" "}
          to your <code className="rounded bg-muted px-1 text-xs">.env.local</code>.
        </span>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card px-4 py-4 shadow-card">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={audioUrl}
        preload="none"
        onLoadStart={handleLoadStart}
        onCanPlay={handleCanPlay}
        onPlay={handlePlay}
        onPause={handlePause}
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
        onEnded={handleEnded}
        onError={handleError}
      />

      {/* Surah label */}
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">
            {surah.id}. {surah.name}
          </p>
          <p className="truncate text-[11px] uppercase tracking-wide text-muted-foreground">
            {surah.translation}
          </p>
        </div>
        <span className="font-arabic shrink-0 text-base text-primary">
          {surah.arabicName}
        </span>
      </div>

      {/* Progress bar */}
      <div className="mb-1 flex items-center gap-2">
        <span className="w-10 shrink-0 text-right text-[11px] tabular-nums text-muted-foreground">
          {formatTime(currentTime)}
        </span>
        <div className="relative flex-1">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={seek}
            aria-label="Seek"
            disabled={state === "idle" || state === "loading" || state === "error"}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0 disabled:cursor-default"
          />
        </div>
        <span className="w-10 shrink-0 text-[11px] tabular-nums text-muted-foreground">
          {formatTime(duration)}
        </span>
      </div>

      {/* Error message */}
      {state === "error" && (
        <p className="mb-2 flex items-center gap-1 text-[12px] text-destructive">
          <AlertCircle className="h-3 w-3" />
          {errorMsg}
        </p>
      )}

      {/* Controls row */}
      <div className="mt-3 flex items-center justify-between gap-2">
        {/* Prev */}
        <button
          onClick={goToPrev}
          disabled={!prevSurah}
          aria-label="Previous Surah"
          className="grid h-8 w-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
        >
          <SkipBack className="h-4 w-4" />
        </button>

        {/* Play / Pause */}
        <button
          onClick={togglePlay}
          disabled={state === "error"}
          aria-label={state === "playing" ? "Pause" : "Play"}
          className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow transition-transform hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-50"
        >
          {state === "loading" ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : state === "playing" ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5 translate-x-[2px]" />
          )}
        </button>

        {/* Next */}
        <button
          onClick={goToNext}
          disabled={!nextSurah}
          aria-label="Next Surah"
          className="grid h-8 w-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
        >
          <SkipForward className="h-4 w-4" />
        </button>

        {/* Volume */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
            className="grid h-7 w-7 place-items-center rounded text-muted-foreground transition-colors hover:text-foreground"
          >
            {muted || volume === 0 ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={muted ? 0 : volume}
            onChange={changeVolume}
            aria-label="Volume"
            className="h-1.5 w-20 cursor-pointer accent-primary"
          />
        </div>
      </div>
    </div>
  );
}
