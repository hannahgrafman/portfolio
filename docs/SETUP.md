# Portfolio setup

## Run locally
Install Node.js 20.9 or newer (Node 22 LTS recommended) and pnpm. From this folder:

```sh
pnpm install
cp .env.example .env.local
pnpm dev
```

Open http://localhost:3000. Run `pnpm typecheck` and `pnpm build` before deployment. `pnpm start` serves the production build.

## Folder structure

```text
src/app/                     App Router pages, metadata, sitemap, and styles
  photography/               Filterable photo gallery
  campaigns/[slug]/          Statically generated campaign detail pages
  about/                     Biography and experience
  contact/                   Contact page
  api/contact/route.ts       Server-side email delivery
src/components/              Shared header, footer, image, gallery, contact form
src/data/site.ts             Name, biography, email, social profiles, skills
src/data/photography.ts      Photo sources, captions, categories, alt text
src/data/campaigns.ts        Campaign content and supporting images
src/lib/                    Typed content models and shared form validation
public/images/               Put your own images here
.env.example                 Environment variable template; never commit secrets
```

## Replace sample content
All biography and experience copy is illustrative. Campaigns describe fictional brands and deliverables, not real client work. Replace these before publishing. Update `src/data/site.ts`, including sample email and social URLs. Change the visible introduction in `src/app/page.tsx` and page headings as desired. Colors and typography live in `src/app/globals.css`.

Campaign concept images remain Unsplash placeholders. The photography gallery now uses Hannah’s supplied sports and portrait photographs. Add properly licensed photos to `public/images/` and use paths such as `/images/coast.jpg` in the data. Update alt text, categories, captions, locations, and the homepage featured image. Next Image handles responsive image optimization. For another remote image host, add its domain to `next.config.ts`. Remove demo notices after replacement. Edit `photoCategories` in `src/lib/types.ts` to change the gallery filters. Set each photo’s category to one of those values, or `null` to show it only in All. The gallery contains 10 Sports Photography photos and 3 Posed Shots. Web-ready images are in `public/images/gallery/`; width and height in the data preserve each original composition.

Gallery controls support keyboard focus, Enter/Space to open, left/right arrows to browse, and Escape to close. The native modal dialog contains focus and restores it to the triggering button.

## Configure contact delivery
Create a Resend account and verify your sending domain. Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY`: your private Resend API key
- `CONTACT_FROM`: sender on your verified domain, e.g. `Portfolio <hello@your-domain.com>`
- `CONTACT_TO`: inbox that should receive inquiries
- `NEXT_PUBLIC_SITE_URL`: canonical site URL, e.g. `https://your-domain.com`

Restart the server after changing environment variables. Only the site URL is public. Never prefix the email API key with NEXT_PUBLIC. The endpoint validates the fields again, sends plain text, and sets the visitor email as Reply-To. Without configuration it returns a clear error; it does not pretend a message was delivered. Test a valid inquiry and an invalid address after configuration, and confirm receipt in your inbox.

The form includes a honeypot, same-origin request check, and size limits. Before a public launch, enable host-level rate limiting (for example a Vercel Firewall rule targeting POST /api/contact), or add a shared rate limiter and bot challenge if abuse warrants it. In-memory limits are unreliable across serverless instances. The form does not store inquiries; review your email provider's retention and add any privacy notice appropriate to your use.

## GitHub and Vercel
The requested repository is https://github.com/hannahgrafman/portfolio.git. This checkout was cloned from it. To upload after reviewing:

```sh
git add .
git commit -m "Build editorial portfolio boilerplate"
git push -u origin main
```

If your initial local branch has another name, use that branch instead of main. Sign into GitHub when prompted. In Vercel, choose Add New → Project, import this repository, and keep the detected Next.js framework preset. Add the environment variables above in project settings; use your production domain for NEXT_PUBLIC_SITE_URL. Deploy, then test mobile navigation, gallery keyboard controls, campaign pages, and a real contact submission. Subsequent pushes to the production branch trigger deployments. A server-capable deployment is required for /api/contact; do not enable static export.

## Design system
The current layout takes inspiration from the structure of leahchow.com: a handwritten greeting, simple fixed navigation, horizontal project previews, centered project cards, and a generous contact footer. The camera sketch is an original inline SVG; no artwork or project content from the reference is included. Locally served Cedarville Cursive and Funnel Sans fonts are in `public/fonts/` with their OFL licenses. Typography uses `next/font/local` in `src/app/layout.tsx`; layout, color, spacing, and responsive rules are in `src/app/globals.css`. The homepage’s image strip scrolls horizontally by touch, trackpad, or keyboard focus. Essential content remains visible without scroll-triggered animation.

Instrument Serif is the default font throughout the site. Cedarville Cursive is reserved for the homepage greeting, footer invitation, and “something good.” on the contact page. Local font files and licenses are in `public/fonts/`.

The three accent phrases now use New Kansas ExtraSwash (400 italic) through the Adobe Fonts web project at `https://use.typekit.net/qdz0mfn.css`. Keep that Adobe web project active. Instrument Serif remains locally hosted for all other text. The Adobe font files are served by Adobe, not copied into this repository.

Gallery assets are optimized WebP copies of Hannah’s supplied photographs, sized to a maximum of 2400 pixels without changing their proportions. Keep the source JPEGs separately. The lightbox displays the complete image; gallery thumbnails preserve its aspect ratio.
