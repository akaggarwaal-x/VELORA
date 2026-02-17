# Velora Organics (Production-ready Next.js 14 Platform)

Premium global organic lifestyle website with retail ecommerce + wholesale lead generation.

## Stack
- Next.js 14 App Router + TypeScript + Tailwind + Framer Motion
- ShadCN-style reusable UI components
- PostgreSQL schema via Prisma (Supabase/Neon compatible)
- API Routes + server-first rendering

## Folder structure
- `app/` website routes + API routes
- `components/` UI and section components
- `lib/` schemas, utilities, sample CMS/ecommerce content
- `prisma/` database schema and seed

## Setup
1. `npm install`
2. `cp .env.example .env.local`
3. Optional DB mode:
   - start Postgres/Supabase/Neon and set `DATABASE_URL`
   - run `npx prisma migrate dev`
   - run `npm run prisma:seed`
4. `npm run dev`

Without `DATABASE_URL`, the app runs in demo-safe mode with mock content and working front-end flows.


## Resolve npm 403 / install blockage
If dependency install fails with `403`, run:

```bash
./scripts/doctor-network.sh
```

If your environment is policy-restricted, share the output with your network/admin team to allowlist npm registry access.

Quick local bootstrap (when registry access is available):

```bash
./scripts/deploy-quickstart.sh
```

## Pages included
- Home (`/`)
- Retail shop (`/shop`)
- Product detail (`/product/[slug]`)
- Bulk/export lead capture (`/bulk-export`)
- About (`/about`)
- Blog/SEO hub (`/blog` + `/blog/[slug]`)
- Contact (`/contact`)
- Admin dashboard (`/admin`)

## API routes
- `GET/POST /api/products`
- `POST /api/bulk-inquiries`
- `GET /api/orders`
- `GET /api/blog`
- `GET /api/admin/export-leads`
- `POST /api/admin/login`

## Deployment (Vercel + Supabase)
1. Create Supabase Postgres project.
2. Run migrations locally and push schema.
3. Create Vercel project from this repo.
4. Add all env vars from `.env.example` in Vercel.
5. Set `NEXT_PUBLIC_SITE_URL` to production URL.
6. Deploy and validate `/sitemap.xml`, `/robots.txt`, and lead forms.

## SEO/Performance features
- Dynamic metadata and route-level titles
- XML sitemap + robots file
- Semantic content hierarchy
- Lazy-loaded iframe map and Next Image optimization
- Mobile-first responsive layout

## Database schema coverage
Includes required entities:
`users`, `products`, `product_variants`, `categories`, `orders`, `order_items`, `bulk_inquiries`, `reviews`, `blog_posts`, `blog_categories`, `coupons`, `shipping_zones`.


## Automation added for owner-operator workflow
- `Makefile` shortcuts: `make doctor`, `make bootstrap`, `make ci`, `make smoke`.
- `scripts/smoke-remote.sh` one-command remote smoke checks after deployment.
- GitHub Actions CI (`.github/workflows/ci.yml`) to run install + build on push/PR.
- GitHub Actions deployment (`.github/workflows/deploy-vercel.yml`) for production deploys from `main`.

### Required GitHub secrets for deploy workflow
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Deployment execution (Vercel CLI)
1. Install Vercel CLI: `npm i -g vercel`
2. Authenticate: `vercel login`
3. Link project: `vercel link`
4. Add env vars: `vercel env add DATABASE_URL production` (repeat for all env keys)
5. Deploy preview: `vercel`
6. Deploy production: `vercel --prod`

## Post-deploy testing
Use the smoke test guide in `scripts-smoke-test.md` plus manual conversion checks for cart, product pages, and bulk lead capture.
