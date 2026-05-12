import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} — Stellr Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const relatedPosts = post.relatedSlugs
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Stellr" },
    publisher: { "@type": "Organization", name: "Stellr", url: "https://stellr.biz" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="/" className="logo-lockup">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="16,3 19.5,11.5 28.5,12.5 22,18.5 23.8,27.5 16,23 8.2,27.5 10,18.5 3.5,12.5 12.5,11.5" fill="none" stroke="#1DB966" strokeWidth="1.8" strokeLinejoin="round" />
              <polygon points="16,8 18.5,13.5 24.5,14.2 20.2,18.2 21.3,24.2 16,21.2 10.7,24.2 11.8,18.2 7.5,14.2 13.5,13.5" fill="#1DB966" />
            </svg>
            <span className="logo-wordmark">STELLR</span>
          </a>
          <div className="nav-right">
            <ul className="nav-links">
              <li><a href="/#features">Features</a></li>
              <li><a href="/#pricing">Pricing</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
            <a href="/get-started" className="btn-primary" style={{ padding: "10px 24px", fontSize: "13px", background: "var(--sage)", color: "var(--forest)" }}>
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article style={{ background: "var(--petal)", paddingBottom: "80px" }}>
        {/* Header */}
        <div style={{ background: "var(--forest)", padding: "80px 0 60px" }}>
          <div className="container" style={{ maxWidth: "760px" }}>
            <Link href="/blog" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none", display: "inline-block", marginBottom: "24px" }}>
              ← Back to blog
            </Link>
            <span className="pill" style={{ background: "rgba(29,185,102,0.12)", color: "var(--sage)", display: "inline-block", marginBottom: "20px" }}>
              {post.category}
            </span>
            <h1 className="font-palatino" style={{
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: 400,
              color: "var(--white)",
              lineHeight: 1.2,
              letterSpacing: "-0.3px",
              marginBottom: "16px",
            }}>
              {post.title}
            </h1>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)" }}>
              {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              {" · "}Stellr Team
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container" style={{ maxWidth: "760px", paddingTop: "56px" }}>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div style={{
            background: "var(--forest)",
            borderRadius: "12px",
            padding: "48px 40px",
            textAlign: "center",
            marginTop: "56px",
          }}>
            <h3 className="font-palatino" style={{
              fontSize: "28px",
              fontWeight: 400,
              color: "var(--white)",
              marginBottom: "12px",
            }}>
              Ready to grow your Google reviews?
            </h3>
            <p style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              marginBottom: "28px",
              maxWidth: "420px",
              marginInline: "auto",
            }}>
              Stellr manages your entire Google reputation — QR collection, professional responses, and weekly reports.
            </p>
            <a href="/get-started" className="btn-primary" style={{ background: "var(--sage)", color: "var(--forest)" }}>
              Get started today
            </a>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div style={{ marginTop: "56px" }}>
              <h3 className="font-palatino" style={{
                fontSize: "24px",
                fontWeight: 400,
                color: "var(--forest)",
                marginBottom: "24px",
              }}>
                Related articles
              </h3>
              <div className="blog-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
                {relatedPosts.map((related) => (
                  <Link key={related!.slug} href={`/blog/${related!.slug}`} className="blog-card">
                    <span className="blog-card-category">{related!.category}</span>
                    <h4 className="blog-card-title font-palatino" style={{ fontSize: "18px" }}>{related!.title}</h4>
                    <span className="blog-card-date">
                      {new Date(related!.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Footer */}
      <footer style={{ background: "var(--forest)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container footer-inner" style={{
          padding: "32px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <a href="/" className="logo-lockup">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="16,3 19.5,11.5 28.5,12.5 22,18.5 23.8,27.5 16,23 8.2,27.5 10,18.5 3.5,12.5 12.5,11.5" fill="none" stroke="#1DB966" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="16,8 18.5,13.5 24.5,14.2 20.2,18.2 21.3,24.2 16,21.2 10.7,24.2 11.8,18.2 7.5,14.2 13.5,13.5" fill="#1DB966"/>
            </svg>
            <span className="logo-wordmark" style={{ fontSize: "15px", letterSpacing: "5px" }}>STELLR</span>
          </a>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>© 2026 Stellr</p>
        </div>
      </footer>
    </>
  );
}
