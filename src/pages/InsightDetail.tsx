import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { insightArticles } from "@/data/insights";
import { SITE_URL } from "@/lib/seo";
import { openLeadForm } from "@/lib/leads";
import authorImage from "@/assets/ekansh-portrait.webp";
import NotFound from "./NotFound";

export default function InsightDetail() {
  const { slug } = useParams();
  const article = insightArticles.find(item => item.slug === slug);
  if (!article) return <NotFound />;
  const path = `/dubai-insights/${article.slug}`;
  const whatsapp = `https://wa.me/971544590555?text=${encodeURIComponent(`Hi Ekansh, I'd like a shortlist matched to my budget. I read ${article.title} on your website.`)}`;
  return <div className="min-h-screen bg-background pb-16 md:pb-0">
    <Seo title={article.seoTitle} description={article.excerpt} path={path} image={article.share} type="article"
      breadcrumbs={[{ name: "Dubai Insights", path: "/dubai-insights" }, { name: article.title, path }]}
      schema={{ "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.excerpt,
        image: `${SITE_URL}${article.share}`, datePublished: article.date, dateModified: article.date,
        author: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Ekansh Kinger", jobTitle: "Real Estate Investment Advisor", url: `${SITE_URL}/` },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${path}` } }} />
    <Navbar />
    <article className="container max-w-4xl px-5 pb-14 pt-28 md:px-6 md:pt-36">
      <Button asChild variant="link" className="mb-6 p-0"><Link to="/dubai-insights"><ArrowLeft /> Dubai Insights</Link></Button>
      <p className="mb-3 text-xs uppercase text-primary">{article.category}</p>
      <h1 className="font-serif text-3xl font-bold leading-tight md:text-5xl">{article.title}</h1>
      <time dateTime={article.date} className="mt-5 block text-sm text-muted-foreground">Published {article.dateLabel}</time>
      <img src={article.image} width={800} height={600} alt={`Dubai property landscape illustrating ${article.title}`} className="my-8 aspect-[16/9] w-full rounded-lg object-cover" fetchPriority="high" />
      <p className="mb-9 text-lg leading-relaxed text-muted-foreground">{article.excerpt}</p>
      <div className="space-y-9">{article.sections.map(section => <section key={section.heading}>
        <h2 className="mb-4 font-serif text-2xl font-semibold">{section.heading}</h2>
        <p className="text-base leading-relaxed text-muted-foreground">{section.text}</p>
      </section>)}</div>
      <p className="mt-8 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">General guidance, not financial, legal or tax advice. Verify current fees with DLD. Prices and availability can change; returns are not guaranteed.</p>
      <div className="my-6 flex flex-wrap gap-5 text-xs text-primary underline">
        <a href="https://dubailand.gov.ae/en/eservices/property-sale-registration/" target="_blank" rel="noopener noreferrer">DLD registration guidance</a>
        <a href="https://dubailand.gov.ae/en/eservices/request-for-golden-visa-investor/" target="_blank" rel="noopener noreferrer">DLD Golden Visa guidance</a>
      </div>
      <aside className="mt-10 flex items-center gap-5 border-y border-border py-6" aria-label="About the author">
        <img src={authorImage} alt="Ekansh Kinger, article author" width={441} height={537} loading="lazy" className="h-20 w-16 rounded-md object-cover" />
        <div><h2 className="font-serif text-xl">Ekansh Kinger</h2><p className="mt-2 text-sm text-muted-foreground">Real Estate Investment Advisor</p><p className="mt-1 text-xs text-primary">RERA BRN 84711 · English & Hindi</p></div>
      </aside>
      <aside className="mt-10 rounded-lg border border-border bg-card p-6 md:p-8">
        <h2 className="font-serif text-2xl font-semibold">Want a shortlist matched to your budget?</h2>
        <p className="mt-3 text-sm text-muted-foreground">Discuss your goals and receive relevant property options.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button size="lg" onClick={() => openLeadForm({ formName: "article_shortlist", title: "Get your tailored shortlist" })}>Request a shortlist</Button>
          <Button asChild variant="outline" size="lg"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp Ekansh</a></Button>
        </div>
      </aside>
      <section className="mt-14"><h2 className="mb-6 font-serif text-2xl">Related articles</h2>
        <div className="grid gap-5 sm:grid-cols-2">{insightArticles.filter(item => item.slug !== slug).slice(0, 2).map(item => <Link key={item.slug} to={`/dubai-insights/${item.slug}`} className="rounded-lg border border-border bg-card p-5 hover:border-primary">
          <p className="mb-3 text-xs text-primary">{item.category}</p><h3 className="font-serif text-lg">{item.title}</h3><p className="mt-3 text-sm text-muted-foreground">{item.excerpt}</p>
        </Link>)}</div>
      </section>
    </article>
    <Footer />
  </div>;
}