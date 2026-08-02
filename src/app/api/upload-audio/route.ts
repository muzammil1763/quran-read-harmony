/**
 * POST /api/upload-audio
 *
 * Server-side API route for uploading a single Surah MP3 to Cloudflare R2.
 * R2 credentials stay server-side — never exposed to the browser.
 *
 * Usage (from the upload script):
 *   curl -X POST http://localhost:3000/api/upload-audio \
 *     -F "file=@/path/to/001.mp3" \
 *     -F "surah=1"
 *
 * Protected by UPLOAD_SECRET header in production.
 */
import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { r2Client, R2_BUCKET, surahAudioKey } from "@/lib/r2";

export const runtime = "nodejs"; // needs Node.js for stream handling

export async function POST(req: NextRequest) {
  // Optional: protect with a secret so only your upload script can call this
  const secret = req.headers.get("x-upload-secret");
  if (
    process.env.UPLOAD_SECRET &&
    secret !== process.env.UPLOAD_SECRET
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const surahParam = formData.get("surah") as string | null;

    if (!file || !surahParam) {
      return NextResponse.json(
        { error: "Missing 'file' or 'surah' field" },
        { status: 400 },
      );
    }

    const surahNumber = parseInt(surahParam, 10);
    if (isNaN(surahNumber) || surahNumber < 1 || surahNumber > 114) {
      return NextResponse.json(
        { error: "surah must be a number between 1 and 114" },
        { status: 400 },
      );
    }

    const key = surahAudioKey(surahNumber);
    const buffer = Buffer.from(await file.arrayBuffer());

    await r2Client.send(
      new PutObjectCommand({
        Bucket: R2_BUCKET,
        Key: key,
        Body: buffer,
        ContentType: "audio/mpeg",
        // Cache for 1 year — audio files don't change
        CacheControl: "public, max-age=31536000, immutable",
      }),
    );

    const publicUrl = `${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${key}`;
    return NextResponse.json({ success: true, key, url: publicUrl });
  } catch (err) {
    console.error("[upload-audio]", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
