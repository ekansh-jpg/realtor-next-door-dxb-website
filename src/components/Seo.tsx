import { Helmet } from "react-helmet-async";

const SITE = "https://realtornextdoordxb.com";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  /** Optional JSON-LD object for this route */
  schema?: Record<string, unknown>;
}

const Seo = ({ title, description, path, schema }: SeoProps) => {
  const url = `${SITE}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

export default Seo;
