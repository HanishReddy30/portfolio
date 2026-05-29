# Hanish Reddy Portfolio



## Tech

- Next.js App Router
- Tailwind CSS
- Framer Motion
- Optional Sanity CMS client in `lib/sanity.ts`

## Run

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## CMS Setup

The site currently uses local content arrays in `app/page.tsx`. To connect Sanity, create a Sanity project and add:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Then replace the local arrays with Sanity queries using `sanityClient` from `lib/sanity.ts`.
