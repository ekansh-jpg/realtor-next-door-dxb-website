# Architecture rules
- Keep route metadata in `src/lib/seo.ts` and use the shared `Seo` component for canonical URLs, social tags and breadcrumbs so page identity stays consistent.
- Keep advisor identity and FAQs in shared data; the static HTML identity must match the advisor data so crawlers and rendered pages receive consistent structured data.
- Store insight articles in `src/data/insights.ts` and render them through a shared detail page so article content, related links and sitemap entries remain aligned.