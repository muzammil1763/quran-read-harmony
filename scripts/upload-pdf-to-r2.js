/**
 * Upload easytajweed.pdf to Cloudflare R2.
 *
 * Run once from the project root:
 *   node scripts/upload-pdf-to-r2.js
 *
 * Reads credentials from .env.local automatically.
 */

require("dotenv").config({ path: require("path").join(__dirname, "../.env.local") });

const { S3Client, PutObjectCommand, HeadObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");
const path = require("path");

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
const PDF_PATH = path.join(__dirname, "../easytajweed.pdf");
const PDF_KEY = "easytajweed.pdf";

async function main() {
  if (!fs.existsSync(PDF_PATH)) {
    console.error(`PDF not found at: ${PDF_PATH}`);
    process.exit(1);
  }

  // Check if already uploaded
  try {
    await client.send(new HeadObjectCommand({ Bucket: BUCKET, Key: PDF_KEY }));
    console.log(`✓  ${PDF_KEY} already exists in R2 — overwriting with latest version...`);
  } catch {
    console.log(`  Uploading ${PDF_KEY} to R2 bucket: ${BUCKET}`);
  }

  const fileBuffer = fs.readFileSync(PDF_PATH);
  const fileSizeKB = (fileBuffer.length / 1024).toFixed(1);

  process.stdout.write(`  ↑  Uploading ${PDF_KEY} (${fileSizeKB} KB)...`);

  await client.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: PDF_KEY,
      Body: fileBuffer,
      ContentType: "application/pdf",
      CacheControl: "public, max-age=31536000, immutable",
      ContentDisposition: `inline; filename="${PDF_KEY}"`,
    }),
  );

  console.log(" done ✓");
  console.log(`\n  Public URL: ${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${PDF_KEY}`);
}

main().catch(err => {
  console.error("\nUpload failed:", err.message);
  process.exit(1);
});
