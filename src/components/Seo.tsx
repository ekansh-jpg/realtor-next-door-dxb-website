import { Helmet } from "react-helmet-async";

const SITE = "https://realtornextdoordxb.com";
const DEFAULT_IMAGE = `${SITE}/og-image.jpg?v=4`;

interface Crumb {
  name: string;
  path: string;
}

interface SeoProps {
  title: string;
  description: string;
  path: string;
  /** Optional JSON-LD object (or array of objects) for this route */
  schema?: Record<string, unknown> | Record<string, unknown>[];
  /** Absolute or site-relative social share image */
  image?: string;
  /** Breadcrumb trail (Home is added automatically) */
  breadcrumbs?: Crumb[];
  /** Set true for pages that should not be indexed */
  noindex?: boolean;
  /** article | website | profile */
  type?: string;
  keywords?: string;
}

const Seo = ({
  title,
  description,
  path,
  schema,
  image,
  breadcrumbs,
  noindex = false,
  type = "website",
  keywords,
}: SeoProps) => {
  const url = `${SITE}${path}`;
  const img = image ? (image.startsWith("http") ? image : `${SITE}${image}`) : DEFAULT_IMAGE;

  const schemas: Record<string, unknown>[] = Array.isArray(schema)
    ? schema
    : schema
    ? [schema]
    : [];

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ name: "Home", path: "/" }, ...breadcrumbs].map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: `${SITE}${c.path}`,
      })),
    });
  }

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en-ae" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Ekansh Kinger — Realtor Next Door DXB" />
      <meta property="og:locale" content="en_AE" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@realtor_nextdoordxb" />
      <meta name="twitter:creator" content="@realtor_nextdoordxb" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
