/**
 * Server-side R2 client — never imported by client components.
 * Uses the S3-compatible API that Cloudflare R2 exposes.
 */
import { S3Client } from "@aws-sdk/client-s3";

if (!process.env.CLOUDFLARE_ACCOUNT_ID) throw new Error("Missing CLOUDFLARE_ACCOUNT_ID");
if (!process.env.R2_ACCESS_KEY_ID) throw new Error("Missing R2_ACCESS_KEY_ID");
if (!process.env.R2_SECRET_ACCESS_KEY) throw new Error("Missing R2_SECRET_ACCESS_KEY");

export const r2Client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

export const R2_BUCKET = process.env.R2_BUCKET_NAME ?? "noor-quran-audio";

/** Returns the zero-padded filename for a surah number, e.g. 1 → "001.mp3" */
export function surahAudioKey(surahNumber: number): string {
  return `${String(surahNumber).padStart(3, "0")}.mp3`;
}
