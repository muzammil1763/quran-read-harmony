/**
 * Upload 114 Surah MP3 files directly to Cloudflare R2.
 *
 * Run ONCE from your machine (not in production):
 *   node scripts/upload-audio-to-r2.js --dir /path/to/your/mp3s
 *
 * Your MP3 files must be named:
 *   001.mp3, 002.mp3, ..., 114.mp3
 *
 * Reads credentials from .env.local automatically.
 * Does NOT go through the Next.js API route — uploads directly to R2.
 */

require("dotenv").config({ path: require("path").join(__dirname, "../.env.local") });

const { S3Client, PutObjectCommand, HeadObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");
const path = require("path");

// ── Parse --dir argument ──────────────────────────────────────────────────────
const dirArgIdx = process.argv.indexOf("--dir");
if (dirArgIdx === -1 || !process.argv[dirArgIdx + 1]) {
  console.error("Usage: node scripts/upload-audio-to-r2.js --dir /path/to/mp3s");
  process.exit(1);
}
const MP3_DIR = path.resolve(process.argv[dirArgIdx + 1]);

// ── Validate env ──────────────────────────────────────────────────────────────
const required = ["CLOUDFLARE_ACCOUNT_ID", "R2_ACCESS_KEY_ID", "R2_SECRET_ACCESS_KEY", "R2_BUCKET_NAME"];
for (const key of required) {
  if (!process.env[key]) {
    console.error(`Missing env variable: ${key}`);
    process.exit(1);
  }
}

const client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

const BUCKET = process.env.R2_BUCKET_NAME;

async function fileExistsInR2(key) {
  try {
    await client.send(new HeadObjectCommand({ Bucket: BUCKET, Key: key }));
    return true;
  } catch {
    return false;
  }
}

async function uploadFile(surahNumber) {
  const key = String(surahNumber).padStart(3, "0") + ".mp3";
  const filePath = path.join(MP3_DIR, key);

  if (!fs.existsSync(filePath)) {
    console.warn(`  ⚠  Skipping ${key} — file not found at ${filePath}`);
    return;
  }

  const alreadyUploaded = await fileExistsInR2(key);
  if (alreadyUploaded) {
    console.log(`  ✓  ${key} already exists in R2, skipping`);
    return;
  }

  const fileBuffer = fs.readFileSync(filePath);
  const fileSizeKB = (fileBuffer.length / 1024).toFixed(1);

  process.stdout.write(`  ↑  Uploading ${key} (${fileSizeKB} KB)...`);

  await client.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: fileBuffer,
      ContentType: "audio/mpeg",
      CacheControl: "public, max-age=31536000, immutable",
    }),
  );

  console.log(" done");
}

async function main() {
  console.log(`\nUploading Surah MP3s to R2 bucket: ${BUCKET}`);
  console.log(`Source directory: ${MP3_DIR}\n`);

  let successCount = 0;
  let skipCount = 0;

  for (let i = 1; i <= 114; i++) {
    const key = String(i).padStart(3, "0") + ".mp3";
    const filePath = path.join(MP3_DIR, key);

    if (!fs.existsSync(filePath)) {
      console.warn(`  ⚠  Skipping ${key} — not found`);
      skipCount++;
      continue;
    }

    try {
      await uploadFile(i);
      successCount++;
    } catch (err) {
      console.error(`  ✗  Failed ${key}:`, err.message);
    }
  }

  console.log(`\n── Done ──────────────────────────────────────`);
  console.log(`  Uploaded : ${successCount}`);
  console.log(`  Skipped  : ${skipCount}`);
  console.log(`  Total    : 114\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
