import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  BookOpen,
  Heart,
  Send,
  Trash2,
  Bookmark,
  Search,
  Share2,
  Info,
  Link2,
  Play,
  Pause,

  Menu,
  X,
  LogOut,
} from "lucide-react";
import { surahData, type Surah } from "@/data/surahs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Noor Quran — Read Surahs with Translation" },
      {
        name: "description",
        content:
          "Read the Holy Quran online: browse all 114 surahs, Arabic text with Sahih International English translation and tafsir links.",
      },
      { property: "og:title", content: "Noor Quran — Read Surahs with Translation" },
      {
        property: "og:description",
        content:
          "Browse all 114 surahs with Arabic text and Sahih International English translation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const sideIcons = [
  { icon: BookOpen, label: "Read" },
  { icon: Heart, label: "Favorites" },
  { icon: Send, label: "Share" },
  { icon: Trash2, label: "Trash" },
  { icon: Bookmark, label: "Bookmarks" },
];

function Sidebar() {
  const [active, setActive] = useState(0);
  return (
    <aside className="hidden w-[68px] shrink-0 flex-col border-r border-border bg-card lg:flex">
      <div className="grid h-[68px] place-items-center bg-primary">
        <BookOpen className="h-6 w-6 text-primary-foreground" />
      </div>
      <nav className="flex flex-1 flex-col items-center gap-2 py-6">
        {sideIcons.map((item, i) => (
          <button
            key={item.label}
            aria-label={item.label}
            onClick={() => setActive(i)}
            className={`grid h-10 w-10 place-items-center rounded-lg transition-colors ${
              active === i
                ? "bg-accent text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <item.icon className="h-5 w-5" />
          </button>
        ))}
      </nav>
      <button
        aria-label="Sign out"
        className="grid h-14 place-items-center text-muted-foreground transition-colors hover:text-foreground"
      >
        <LogOut className="h-5 w-5" />
      </button>
    </aside>
  );
}

function SurahList({
  active,
  onSelect,
}: {
  active: Surah;
  onSelect: (s: Surah) => void;
}) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return surahData;
    return surahData.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.translation.toLowerCase().includes(q) ||
        s.arabicName.includes(query.trim()) ||
        String(s.id) === q,
    );
  }, [query]);

  return (
    <div className="flex h-full min-h-0 flex-col bg-background">
      <div className="flex h-[68px] shrink-0 items-center gap-3 border-b border-border bg-card px-5">
        <Search className="h-5 w-5 shrink-0 text-primary" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search here for surah, ayah"
          className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
      </div>
      <ul className="min-h-0 flex-1 space-y-[10px] overflow-y-auto p-5">
        {results.map((s) => {
          const isActive = s.id === active.id;
          return (
            <li key={s.id}>
              <button
                onClick={() => onSelect(s)}
                className={`grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-lg border bg-card px-4 py-3 text-left transition-all ${
                  isActive
                    ? "border-primary shadow-card"
                    : "border-transparent hover:border-border"
                }`}
              >
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border text-xs font-semibold ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-primary/40 text-primary"
                  }`}
                >
                  {s.id}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[15px] font-semibold text-foreground">
                    {s.name}
                  </span>
                  <span className="block truncate text-[11px] uppercase tracking-wide text-muted-foreground">
                    {s.translation}
                  </span>
                </span>
                <span className="font-arabic shrink-0 text-lg text-primary">
                  {s.arabicName}
                </span>
              </button>
            </li>
          );
        })}
        {results.length === 0 && (
          <li className="py-10 text-center text-sm text-muted-foreground">
            No surah found
          </li>
        )}
      </ul>
    </div>
  );
}

function AyahCard({ surahId, ayah }: { surahId: number; ayah: { number: number; arabic: string; english: string } }) {
  const [liked, setLiked] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <article className="rounded-lg bg-card p-5 shadow-card">
      <p className="font-arabic mb-4 text-right text-2xl leading-[2.4] text-foreground sm:text-3xl">
        {ayah.arabic}
      </p>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="text-lg font-bold text-primary">
          {surahId}:{ayah.number}
        </span>
        <span className="text-[11px] uppercase tracking-wide text-muted-foreground">
          English - Sahih International
        </span>
        <span className="text-border">|</span>
        <button className="text-[11px] font-medium uppercase tracking-wide text-tafsir hover:underline">
          See tafsir →
        </button>
      </div>
      <p className="mt-3 text-[15px] leading-relaxed text-foreground">{ayah.english}</p>
      <div className="mt-4 flex items-center gap-5 text-muted-foreground">
        <button aria-label="Favorite" onClick={() => setLiked((v) => !v)}>
          <Heart
            className={`h-[18px] w-[18px] transition-colors ${
              liked ? "fill-destructive text-destructive" : "hover:text-foreground"
            }`}
          />
        </button>
        <button aria-label="Share">
          <Share2 className="h-[18px] w-[18px] hover:text-foreground" />
        </button>
        <button aria-label="Info">
          <Info className="h-[18px] w-[18px] hover:text-foreground" />
        </button>
        <button aria-label="Copy link">
          <Link2 className="h-[18px] w-[18px] hover:text-foreground" />
        </button>
      </div>
    </article>
  );
}

function Index() {
  const [active, setActive] = useState<Surah>(surahData[0]);
  const [listOpen, setListOpen] = useState(false);

  const select = (s: Surah) => {
    setActive(s);
    setListOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />

      <div className="hidden w-[320px] shrink-0 border-r border-border md:block">
        <SurahList active={active} onSelect={select} />
      </div>

      <main className="flex min-w-0 flex-1 flex-col bg-card">
        <header className="grid h-[68px] shrink-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-border px-5">
          <button
            aria-label="Open surah list"
            className="grid h-9 w-9 place-items-center rounded-lg text-foreground md:hidden"
            onClick={() => setListOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="min-w-0">
            <h1 className="truncate text-base font-semibold text-foreground">
              {active.name}
            </h1>
            <p className="truncate text-[11px] uppercase tracking-wide text-muted-foreground">
              {active.translation} · {active.ayahCount} ayahs · {active.revelation}
            </p>
          </div>
          <span className="font-arabic shrink-0 text-xl text-primary sm:text-2xl">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </span>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto bg-background p-5">
          <div className="mx-auto flex max-w-3xl flex-col gap-[15px]">
            {active.ayahs.map((a) => (
              <AyahCard key={a.number} surahId={active.id} ayah={a} />
            ))}
            {active.ayahs.length < active.ayahCount && (
              <p className="py-4 text-center text-xs text-muted-foreground">
                Showing {active.ayahs.length} of {active.ayahCount} ayahs
              </p>
            )}
          </div>
        </div>
      </main>

      {listOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="absolute inset-0 bg-foreground/40"
            onClick={() => setListOpen(false)}
          />
          <div className="relative z-10 flex h-full w-[85%] max-w-sm flex-col bg-background shadow-card">
            <button
              aria-label="Close"
              className="absolute right-4 top-5 z-20 text-muted-foreground"
              onClick={() => setListOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <SurahList active={active} onSelect={select} />
          </div>
        </div>
      )}
    </div>
  );
}
