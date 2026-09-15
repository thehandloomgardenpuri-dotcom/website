# Handloom Garden, Puri

Website for **Handloom Garden**, the Silk Mark certified A/C mega showroom at Swargadwar Square, Puri, Odisha.
Live at [www.handloomgarden.com](https://www.handloomgarden.com).

## Stack

- **Next.js 16** (App Router, Turbopack), React 19, Tailwind CSS 4
- **Supabase**: product catalogue (`products` table), enquiry form (`enquiries` table) and every image (public `site` storage bucket)
- **GSAP 3** (ScrollTrigger, SplitText, Flip) + **Lenis** smooth scrolling
- **boneyard-js** skeleton loading, captured from the real product-card layout
- **Fonts:** Zodiak (headings) and Satoshi (text) by the Indian Type Foundry, loaded from the Fontshare CDN under the ITF Free Font License. Don't commit the font files: this repository is public and the license forbids redistributing them.
- **Responsive motion:** animations are tuned per device with `gsap.matchMedia` (see `MQ` in `src/lib/gsap.ts`). Desktop pins and scrubs; phones and tablets get unpinned variants, so controls are always reachable and no text is left hidden.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

Create `.env.local` (never commit it):

```bash
NEXT_PUBLIC_SITE_URL=https://www.handloomgarden.com
NEXT_PUBLIC_SUPABASE_URL=https://ziygbdfuyokqolgvtfxf.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
# Only needed for scripts/migrate-to-supabase.ts, never in the browser or on Vercel:
SUPABASE_SECRET_KEY=sb_secret_...
DIRECT_URL=postgresql://postgres.<ref>:<password>@aws-0-ap-south-1.pooler.supabase.com:5432/postgres
```

The site itself only needs the two `NEXT_PUBLIC_` values (they are public by design, and `src/lib/site.ts` has safe fallbacks), so Vercel deploys work without extra configuration.

## Managing products

Products live in Supabase. Pages are statically generated and refresh from Supabase **every hour**, so edits in the Supabase dashboard appear on the site without a redeploy.

- **Edit a product:** Table Editor → `products`. Change `title`, `description`, `featured`, `collection` or `sort_order`. Set `is_active = false` to hide a piece.
- **Add a product:** upload the photo to the `site` bucket under `products/<category>/`, then add a row with the same `image_path` and the image's width and height.
- **Bulk (re)import:** add items to `src/data/catalog.ts` and run `npm run migrate:images`. The script uploads images, applies `supabase/migrations/*.sql` and upserts rows. It is safe to re-run.

## Enquiries

The contact form writes to `public.enquiries` (visitors can insert but never read). View submissions in Supabase → Table Editor → `enquiries`.

## Skeleton loading (boneyard)

Skeleton bones are generated from the rendered product grid. After changing the product card layout:

```bash
npm run build && npx next start -p 3000
npm run bones        # captures src/bones/*.bones.json and registry.ts
```

## SEO, AEO and GEO

- One source of truth for business facts: `src/lib/site.ts` (name, address, phone, hours, geo pin)
- Keyword map (place + product + intent + regional language): `src/lib/seo.ts`
- Structured data (ClothingStore/LocalBusiness, Product, FAQPage, Article, BreadcrumbList, ItemList): `src/lib/schema.ts`
- Answer-first FAQs and weave guides: `src/data/faqs.ts`, `src/data/weaves.ts`
- `/sitemap.xml` is a sitemap index pointing to `/sitemaps/pages.xml`, `/sitemaps/sarees.xml` (every saree), `/sitemaps/kurtis-and-frocks.xml` and `/sitemaps/guides.xml`. Product entries include the image and the real last-edited date (a database trigger keeps `products.updated_at` current).
- `/site-map` is a human-readable page linking every saree and page
- `robots.txt` (explicitly allows AI crawlers) and `llms.txt` for AI assistants
