# StackRunner MVP

A usable early version of StackRunner with auth, gig intake, map and routing, run sheet, and earnings tracking.

## Tech Stack
- Next.js (App Router, TypeScript)
- Tailwind CSS
- React Query
- Prisma + Postgres via Supabase
- MapLibre + OpenRouteService

## Getting Started
```bash
npm install
npm run dev
```

Run database migrations and seed data:
```bash
npx prisma migrate dev
npx prisma db seed
```
