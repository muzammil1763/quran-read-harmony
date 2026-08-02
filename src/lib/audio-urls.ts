/**
 * Client-safe module — only uses NEXT_PUBLIC_R2_PUBLIC_URL.
 * Maps a surah number to its public CDN audio URL.
 */

const BASE_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL ?? "";

/**
 * Returns the full public URL for a surah's MP3 on Cloudflare R2.
 * e.g. surahAudioUrl(1) → "https://bucket.accountid.r2.cloudflarestorage.com/001.mp3"
 */
export function surahAudioUrl(surahNumber: number): string {
  const key = String(surahNumber).padStart(3, "0") + ".mp3";
  return `${BASE_URL}/${key}`;
}
