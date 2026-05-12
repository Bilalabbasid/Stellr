import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Stellr | Google Review Management Tips & Strategies",
  description:
    "Expert guides on Google review management, reputation building, and growing your restaurant business through better reviews.",
  openGraph: {
    title: "Blog — Stellr",
    description:
      "Expert guides on Google review management, reputation building, and growing your restaurant business through better reviews.",
  },
};

const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

export default function BlogPage() {
  return (
    <>
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

      {/* Hero */}
      <section style={{ background: "var(--forest)", padding: "80px 0 60px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="font-palatino" style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 400,
            color: "var(--white)",
            letterSpacing: "-0.3px",
            marginBottom: "16px",
          }}>
            The Stellr Blog
          </h1>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", maxWidth: "520px", margin: "0 auto" }}>
            Expert guides on Google review management, reputation building, and growing your business.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ background: "var(--petal)", padding: "80px 0" }}>
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-card"
              >
                <span className="blog-card-category">{post.category}</span>
                <h2 className="blog-card-title font-palatino">{post.title}</h2>
                <p className="blog-card-desc">{post.description}</p>
                <span className="blog-card-date">
                  {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--forest)", padding: "80px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="font-palatino" style={{
            fontSize: "clamp(24px, 3vw, 40px)",
            fontWeight: 400,
            color: "var(--white)",
            marginBottom: "16px",
          }}>
            Ready to take control of your reviews?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", marginBottom: "32px" }}>
            Join restaurants worldwide who let Stellr handle their reputation.
          </p>
          <a href="/get-started" className="btn-primary" style={{ background: "var(--sage)", color: "var(--forest)" }}>
            Get started today
          </a>
        </div>
      </section>

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
