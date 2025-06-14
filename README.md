# Farcaster Bot Auto-Post

Bot ini memposting otomatis ke Farcaster melalui Neynar API.

## Setup

1. Salin `.env.example` menjadi `.env`
2. Masukkan API Key dan Signer UUID/Secret dari Neynar
3. Jalankan:

```bash
npm install
node index.js
```

## Deploy ke Vercel

```bash
vercel --prod
```