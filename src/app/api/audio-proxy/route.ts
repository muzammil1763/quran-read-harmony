/**
 * GET /api/audio-proxy?surah=1
 *
 * Server-side proxy that fetches a surah MP3 from the R2 public URL and
 * streams it back to the browser, bypassing CORS restrictions on the CDN.
 */
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const surahParam = req.nextUrl.searchParams.get("surah");
  const surahNumber = parseInt(surahParam ?? "", 10);

  if (!surahNumber || surahNumber < 1 || surahNumber > 114) {
    return NextResponse.json({ error: "Invalid surah number" }, { status: 400 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;
  if (!baseUrl) {
    return NextResponse.json({ error: "Audio base URL not configured" }, { status: 500 });
  }

  const key = `${String(surahNumber).padStart(3, "0")}.mp3`;
  const audioUrl = `${baseUrl}/${key}`;

  try {
    const upstream = await fetch(audioUrl);
    if (!upstream.ok) {
      return NextResponse.json({ error: "Audio not found" }, { status: 404 });
    }

    const contentLength = upstream.headers.get("content-length");
    const headers: Record<string, string> = {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "public, max-age=3600",
      // Tell the browser to download with a nice filename
      "Content-Disposition": `attachment; filename="${key}"`,
    };
    if (contentLength) headers["Content-Length"] = contentLength;

    return new NextResponse(upstream.body, { status: 200, headers });
  } catch (err) {
    console.error("[audio-proxy]", err);
    return NextResponse.json({ error: "Failed to fetch audio" }, { status: 500 });
  }
}
