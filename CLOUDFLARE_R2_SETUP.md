# Cloudflare R2 Audio Setup Guide

Step-by-step instructions to host all 114 Surah MP3 files on Cloudflare R2
and connect them to the Noor Quran Next.js app.

---

## Folder structure on R2

```
noor-quran-audio/        ← bucket root
  001.mp3                ← Al-Faatiha
  002.mp3                ← Al-Baqara
  ...
  114.mp3                ← An-Naas
```

Your local MP3 files must be named with zero-padding: `001.mp3` … `114.mp3`.

---

## Step 1 — Create the R2 bucket

1. Log in to [dash.cloudflare.com](https://dash.cloudflare.com).
2. In the left sidebar click **R2 Object Storage**.
3. Click **Create bucket**.
4. Name it `noor-quran-audio` (or anything — you'll set this in env vars).
5. Leave location as **Automatic**.
6. Click **Create bucket**.

---

## Step 2 — Enable public access on the bucket

> This lets audio URLs work directly in `<audio src="...">` without signed URLs.

1. Open your bucket → **Settings** tab.
2. Under **Public Access**, click **Allow Access**.
3. Copy the **Public bucket URL** — it looks like:
   ```
   https://noor-quran-audio.<YOUR_ACCOUNT_ID>.r2.cloudflarestorage.com
   ```
   This becomes your `NEXT_PUBLIC_R2_PUBLIC_URL`.

> **Optional (recommended for production):** Add a **Custom Domain** (e.g. `audio.yourdomain.com`)
> in the same Settings tab. This gives you a cleaner URL and lets Cloudflare CDN
> cache the files globally at no extra cost.

---

## Step 3 — Create R2 API credentials

> These are server-side only — never go in `NEXT_PUBLIC_` variables.

1. In R2, click **Manage R2 API Tokens** (top-right of the R2 page).
2. Click **Create API token**.
3. Give it a name like `noor-quran-upload`.
4. Set permissions: **Object Read & Write** (or **Admin Read & Write** for uploads).
5. Under **Specify bucket**, choose your `noor-quran-audio` bucket.
6. Click **Create API Token**.
7. Copy and save:
   - **Access Key ID** → `R2_ACCESS_KEY_ID`
   - **Secret Access Key** → `R2_SECRET_ACCESS_KEY`

Also copy your **Account ID** from the Cloudflare dashboard right sidebar.

---

## Step 4 — Configure environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
CLOUDFLARE_ACCOUNT_ID=abc123...          # from Cloudflare dashboard sidebar
R2_ACCESS_KEY_ID=your_access_key         # from Step 3
R2_SECRET_ACCESS_KEY=your_secret_key     # from Step 3
R2_BUCKET_NAME=noor-quran-audio          # your bucket name from Step 1
NEXT_PUBLIC_R2_PUBLIC_URL=https://noor-quran-audio.<ACCOUNT_ID>.r2.cloudflarestorage.com
```

> `.env.local` is already in `.gitignore` — it will never be committed.

---

## Step 5 — Name your MP3 files correctly

Rename your 114 MP3 files to zero-padded 3-digit format:

```
001.mp3   (Al-Faatiha)
002.mp3   (Al-Baqara)
...
114.mp3   (An-Naas)
```

Put them all in one folder, e.g. `C:\Users\You\quran-audio\`.

---

## Step 6 — Upload all 114 files to R2

Run the upload script from the project root (make sure `.env.local` is filled in):

```bash
node scripts/upload-audio-to-r2.js --dir "C:\Users\You\quran-audio"
```

The script:
- Reads credentials from `.env.local` directly
- Skips files that already exist in R2 (safe to re-run)
- Shows progress per file
- Sets `Cache-Control: public, max-age=31536000, immutable` on each file

---

## Step 7 — Test one Surah first

Before uploading all 114, test with just Surah 1:

1. Upload only `001.mp3`:
   ```bash
   node scripts/upload-audio-to-r2.js --dir "C:\Users\You\quran-audio"
   ```
   (if only `001.mp3` exists in the folder, only that gets uploaded)

2. Open your browser and visit the public URL directly:
   ```
   https://noor-quran-audio.<ACCOUNT_ID>.r2.cloudflarestorage.com/001.mp3
   ```
   It should play or prompt download. If you get a 403, double-check Step 2.

3. Start the dev server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000` — select **Al-Faatiha** and press play in the audio player.

---

## Step 8 — Deploy to production

### Vercel

```bash
vercel env add CLOUDFLARE_ACCOUNT_ID
vercel env add R2_ACCESS_KEY_ID
vercel env add R2_SECRET_ACCESS_KEY
vercel env add R2_BUCKET_NAME
vercel env add NEXT_PUBLIC_R2_PUBLIC_URL
```

Or set them in the Vercel Dashboard → Project → Settings → Environment Variables.

### Other platforms (Netlify, Railway, etc.)

Set the same 5 variables in your platform's environment variable settings panel.

> `R2_ACCESS_KEY_ID` and `R2_SECRET_ACCESS_KEY` are server-only (no `NEXT_PUBLIC_` prefix)
> so they are never bundled into the client JavaScript.

---

## Architecture summary

```
Browser
  └── SurahAudioPlayer component
        └── <audio src="https://...r2.cloudflarestorage.com/001.mp3" preload="none">
              └── Cloudflare R2 / CDN (streams audio directly to browser)

Upload (one-time, local machine only)
  └── scripts/upload-audio-to-r2.js
        └── @aws-sdk/client-s3 → R2 S3-compatible endpoint

Next.js server (optional future use)
  └── /api/upload-audio  (POST — server-side upload via multipart form)
        └── src/lib/r2.ts (R2 client, credentials from env)
```

---

## Security notes

| Variable | Where it lives | Exposed to browser? |
|---|---|---|
| `CLOUDFLARE_ACCOUNT_ID` | Server only | No |
| `R2_ACCESS_KEY_ID` | Server only | No |
| `R2_SECRET_ACCESS_KEY` | Server only | No |
| `R2_BUCKET_NAME` | Server only | No |
| `NEXT_PUBLIC_R2_PUBLIC_URL` | Client + Server | Yes (read-only CDN URL — no secrets) |

The public URL only lets users **read** audio files. It cannot be used to upload,
delete, or list objects. Your write credentials stay server-side only.
