export default function Home() {
  return (
    <>
      {/* ─── NAVBAR ─── */}
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="/" className="logo-lockup">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="16,3 19.5,11.5 28.5,12.5 22,18.5 23.8,27.5 16,23 8.2,27.5 10,18.5 3.5,12.5 12.5,11.5"
                fill="none" stroke="#1DB966" strokeWidth="1.8" strokeLinejoin="round" />
              <polygon points="16,8 18.5,13.5 24.5,14.2 20.2,18.2 21.3,24.2 16,21.2 10.7,24.2 11.8,18.2 7.5,14.2 13.5,13.5"
                fill="#1DB966" />
            </svg>
            <span className="logo-wordmark">STELLR</span>
          </a>

          <div className="nav-right">
            <ul className="nav-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="/get-started" className="btn-primary"
              style={{ padding: "10px 24px", fontSize: "13px", background: "var(--sage)", color: "var(--forest)" }}>
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section
        className="section"
        style={{ background: "var(--forest)", paddingTop: "140px", paddingBottom: "140px", position: "relative", overflow: "hidden" }}
      >
        {/* Watermark star */}
        <div style={{
          position: "absolute",
          right: "-80px",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.045,
          pointerEvents: "none",
          userSelect: "none",
        }}>
          <svg width="620" height="620" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon
              points="16,3 19.5,11.5 28.5,12.5 22,18.5 23.8,27.5 16,23 8.2,27.5 10,18.5 3.5,12.5 12.5,11.5"
              fill="#1DB966"
              stroke="#1DB966"
              strokeWidth="0.4"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="container">
          <div style={{ maxWidth: "680px", position: "relative" }}>
            <p style={{
              fontSize: "11px",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "var(--sage)",
              marginBottom: "32px",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}>
              Reputation Management · Powered by AI
            </p>
            <h1 className="font-palatino" style={{
              fontSize: "clamp(44px, 6vw, 72px)",
              fontWeight: 400,
              color: "var(--white)",
              letterSpacing: "-0.5px",
              lineHeight: 1.1,
              marginBottom: "28px",
            }}>
              Your restaurant&apos;s reputation, on autopilot.
            </h1>
            <p style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.52)",
              lineHeight: 1.78,
              marginBottom: "48px",
              maxWidth: "540px",
            }}>
              Stellr uses AI to respond to every Google review in your restaurant&apos;s voice — and puts a beautiful QR stand on every table to keep them coming in.
            </p>

            <div className="hero-buttons" style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "56px" }}>
              <a href="/get-started" className="btn-primary" style={{ background: "var(--sage)", color: "var(--forest)" }}>
                Get started
              </a>
              <a href="#how-it-works" className="btn-secondary">See how it works</a>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "28px" }}>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.32)", letterSpacing: "0.3px" }}>
                Trusted by restaurants across 3 continents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section style={{ background: "var(--mid-green)", padding: "88px 0" }}>
        <div className="container">
          <div style={{ maxWidth: "600px", marginBottom: "48px" }}>
            <h2 className="font-palatino" style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 400,
              color: "var(--white)",
              letterSpacing: "-0.3px",
              margin: 0,
              lineHeight: 1.25,
            }}>
              Most restaurants lose customers before they even walk in.
            </h2>
          </div>
          <div className="stats-grid" style={{ display: "flex", alignItems: "flex-start" }}>
            {[
              { number: "94%", label: "Of customers", text: "avoid a business after one unanswered negative review" },
              { number: "73%", label: "Of people", text: "only trust reviews written in the last 30 days" },
            ].map((stat, i) => (
              <div key={i} className="stat-item" style={{ flex: 1 }}>
                <div className="font-palatino" style={{
                  fontSize: "72px",
                  fontWeight: 400,
                  color: "var(--sage)",
                  lineHeight: 1,
                  marginBottom: "10px",
                }}>
                  {stat.number}
                </div>
                <p style={{
                  fontSize: "10px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.28)",
                  marginBottom: "8px",
                  fontFamily: "system-ui",
                }}>
                  {stat.label}
                </p>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.58)", lineHeight: 1.65, maxWidth: "280px" }}>
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE OPPORTUNITY ─── */}
      <section style={{ background: "var(--forest)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", marginInline: "auto" }}>
            <span className="pill" style={{ background: "rgba(29,185,102,0.12)", color: "var(--sage)" }}>
              The opportunity
            </span>
            <h2 className="font-palatino" style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "var(--white)",
              letterSpacing: "-0.3px",
              margin: "0 0 32px",
              lineHeight: 1.2,
            }}>
              One star on Google is worth more than any ad campaign.
            </h2>
            <div className="font-palatino" style={{
              fontSize: "clamp(56px, 6vw, 80px)",
              fontWeight: 400,
              color: "var(--sage)",
              lineHeight: 1,
              marginBottom: "16px",
            }}>
              5–9%
            </div>
            <p style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              maxWidth: "480px",
              marginInline: "auto",
            }}>
              revenue increase for every one-star improvement on Google.
            </p>
            <p style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.25)",
              fontFamily: "system-ui",
              marginTop: "12px",
            }}>
              Harvard Business School
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section id="how-it-works" className="section" style={{ background: "var(--petal)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <span className="pill">What we do</span>
            <h2 className="font-palatino" style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "var(--forest)",
              letterSpacing: "-0.3px",
              margin: 0,
            }}>
              We manage your Google reputation<br />so you can focus on your food.
            </h2>
          </div>

          <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
            {[
              { n: "01", title: "QR Review Collection", body: "Custom QR codes on your tables and bills. Customers scan and leave a Google review in seconds. Simple and fast." },
              { n: "02", title: "Smart Review Funnel", body: "Happy customers go to Google. Unhappy customers give you private feedback first. It never goes public." },
              { n: "03", title: "Professional Responses", body: "We respond to every review on your behalf, professionally, within 24 hours. In English and Urdu." },
              { n: "04", title: "Reputation Dashboard", body: "All your reviews in one place, with weekly reports and AI summaries of what customers are saying." },
            ].map((step, i) => (
              <div key={i} className="card" style={{ overflow: "hidden" }}>
                <div className="font-palatino" style={{
                  fontSize: "100px",
                  fontWeight: 400,
                  color: "rgba(8,35,18,0.06)",
                  lineHeight: 1,
                  letterSpacing: "-4px",
                  marginBottom: "-8px",
                  marginTop: "-4px",
                  userSelect: "none",
                }}>
                  {step.n}
                </div>
                <h3 className="font-palatino" style={{
                  fontSize: "22px",
                  fontWeight: 400,
                  color: "var(--forest)",
                  marginBottom: "12px",
                  marginTop: "20px",
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "15px", color: "var(--moss)", lineHeight: 1.7, margin: 0 }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS FLOW ─── */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <span className="pill">How it works</span>
            <h2 className="font-palatino" style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "var(--forest)",
              letterSpacing: "-0.3px",
              margin: "0 0 12px",
            }}>
              Simple for your customers.
            </h2>
            <p style={{ fontSize: "18px", color: "var(--moss)", margin: 0 }}>
              Powerful for your reputation.
            </p>
          </div>

          <div className="steps-grid flow-grid" style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { n: "1", title: "Scan", body: "Customer scans QR code on table" },
              { n: "2", title: "Rate", body: "Rates their experience" },
              { n: "3", title: "Publish", body: "4–5 stars go straight to Google" },
              { n: "4", title: "Protect", body: "1–3 stars go to private feedback" },
              { n: "5", title: "Report", body: "You receive a WhatsApp report" },
            ].map((step, i) => (
              <div key={i} className="flow-step" style={{
                textAlign: "center",
                padding: "28px 16px",
                background: "var(--petal)",
                borderRadius: "12px",
                border: "1px solid var(--divider)",
              }}>
                <div className="font-palatino" style={{
                  fontSize: "36px",
                  fontWeight: 400,
                  color: "var(--sage)",
                  lineHeight: 1,
                  marginBottom: "12px",
                }}>
                  {step.n}
                </div>
                <h3 style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--forest)",
                  marginBottom: "8px",
                  fontFamily: "system-ui",
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "13px", color: "var(--moss)", lineHeight: 1.5, margin: 0 }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "48px", textAlign: "center", display: "flex", flexDirection: "column", gap: "12px", maxWidth: "500px", marginInline: "auto" }}>
            <p style={{ fontSize: "15px", color: "var(--forest)", lineHeight: 1.7 }}>
              ✓ Positive reviews build your Google rating automatically
            </p>
            <p style={{ fontSize: "15px", color: "var(--forest)", lineHeight: 1.7 }}>
              ✓ Complaints stay private until you fix them
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHY STELLR ─── */}
      <section id="features" className="section" style={{ background: "var(--petal)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <span className="pill">Why Stellr</span>
            <h2 className="font-palatino" style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "var(--forest)",
              letterSpacing: "-0.3px",
              margin: 0,
            }}>
              Built for restaurant owners<br />who take reputation seriously.
            </h2>
          </div>

          <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB966" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>,
                title: "No password needed.",
                body: "You simply add us as a Manager on Google. You stay in full control. Remove us anytime.",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB966" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
                title: "Always professional.",
                body: "Every response is written in the right tone, on-brand, within 24 hours of every review going live.",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB966" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
                title: "Human, not robotic.",
                body: "AI assists our team. But every response is written by a person who understands your restaurant.",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB966" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
                title: "Results you can see.",
                body: "Your rating climbs month by month. You get a clear weekly report of what your customers are saying.",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB966" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
                title: "Zero setup hassle.",
                body: "We handle everything: QR code design, dashboard setup, onboarding. You just focus on the food.",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB966" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
                title: "First mover advantage.",
                body: "Most restaurants still manage reviews manually. The ones that automate it first own their market position.",
              },
            ].map((feature, i) => (
              <div key={i} className="card" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{
                  width: "44px",
                  height: "44px",
                  background: "rgba(29,185,102,0.08)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {feature.icon}
                </div>
                <h3 className="font-palatino" style={{ fontSize: "21px", fontWeight: 400, color: "var(--forest)", margin: 0 }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: "15px", color: "var(--moss)", lineHeight: 1.7, margin: 0 }}>
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE IMPACT ─── */}
      <section className="section" style={{ background: "var(--forest)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "72px", maxWidth: "640px", marginInline: "auto" }}>
            <span className="pill" style={{ background: "rgba(29,185,102,0.12)", color: "var(--sage)" }}>The impact</span>
            <h2 className="font-palatino" style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "var(--white)",
              letterSpacing: "-0.3px",
              margin: "0 0 20px",
              lineHeight: 1.2,
            }}>
              When you manage your reputation, your revenue follows.
            </h2>
          </div>

          <div className="impact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}>
            {[
              {
                stat: "+18%",
                body: "more revenue earned by businesses that respond to every review",
              },
              {
                stat: "+31%",
                body: "more a customer spends at a business with excellent reviews",
              },
              {
                stat: "+45%",
                body: "more likely to visit a restaurant that responds to negative reviews",
              },
            ].map((item, i) => (
              <div key={i} style={{
                textAlign: "center",
                padding: "40px 32px",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}>
                <div className="font-palatino" style={{
                  fontSize: "clamp(48px, 5vw, 64px)",
                  fontWeight: 400,
                  color: "var(--sage)",
                  lineHeight: 1,
                  marginBottom: "16px",
                  letterSpacing: "-1px",
                }}>
                  {item.stat}
                </div>
                <p style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.7,
                  maxWidth: "240px",
                  marginInline: "auto",
                }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="section" style={{ background: "var(--petal)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "72px", maxWidth: "640px", marginInline: "auto" }}>
            <span className="pill">Plans</span>
            <h2 className="font-palatino" style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "var(--forest)",
              letterSpacing: "-0.3px",
              margin: "0 0 20px",
              lineHeight: 1.2,
            }}>
              Two ways to grow with Stellr.
            </h2>
            <p style={{ fontSize: "16px", color: "var(--moss)", lineHeight: 1.7, margin: 0 }}>
              Pricing is tailored to your restaurant&apos;s size and table count. Talk to us for a quote — no sales pitch, no pressure.
            </p>
          </div>

          <div className="pricing-grid" style={{ display: "flex", gap: "24px", justifyContent: "center" }}>
            {/* Standard */}
            <div className="pricing-card" style={{
              background: "var(--white)",
              border: "1px solid var(--divider)",
              borderRadius: "12px",
              padding: "40px 36px",
              width: "420px",
              flex: "0 0 auto",
            }}>
              <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--moss)", marginBottom: "16px", fontFamily: "system-ui" }}>
                Standard
              </p>
              <h3 className="font-palatino" style={{ fontSize: "28px", fontWeight: 400, color: "var(--forest)", margin: "0 0 10px", lineHeight: 1.25 }}>
                For independent restaurants ready to compete on rating.
              </h3>
              <p style={{ fontSize: "15px", color: "var(--moss)", lineHeight: 1.7, marginBottom: "28px" }}>
                Get every Google review answered automatically, drive new reviews from every table, and watch your star rating climb.
              </p>
              <div style={{ borderTop: "1px solid var(--divider)", paddingTop: "28px" }}>
                {[
                  "AI review replies in your voice",
                  "1 Stellr-branded QR stand (free on 3-month commit)",
                  "Monthly performance report",
                  "Email support",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "16px" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: "2px", flexShrink: 0 }}>
                      <circle cx="8" cy="8" r="7" stroke="#C8DED0" strokeWidth="1.2"/>
                      <polyline points="5,8 7,10 11,6" stroke="#1DB966" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontSize: "15px", color: "var(--moss)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
              <a href="/get-started" className="btn-primary" style={{ display: "block", textAlign: "center", marginTop: "32px" }}>
                Talk to us
              </a>
            </div>

            {/* White-label */}
            <div className="pricing-card" style={{
              background: "var(--forest)",
              borderRadius: "12px",
              padding: "40px 36px",
              width: "420px",
              flex: "0 0 auto",
              position: "relative",
              borderTop: "2px solid var(--sage)",
            }}>
              <div style={{
                position: "absolute",
                top: "-1px",
                right: "36px",
                background: "var(--sage)",
                color: "var(--forest)",
                borderRadius: "0 0 6px 6px",
                padding: "4px 14px",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontFamily: "system-ui",
                whiteSpace: "nowrap",
              }}>
                Recommended
              </div>
              <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "16px", fontFamily: "system-ui" }}>
                White-label
              </p>
              <h3 className="font-palatino" style={{ fontSize: "28px", fontWeight: 400, color: "var(--white)", margin: "0 0 10px", lineHeight: 1.25 }}>
                For premium groups protecting a brand.
              </h3>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "28px" }}>
                Everything in Standard, fully under your name. Faster response speed, deeper voice training, and zero Stellr branding visible to your guests.
              </p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "28px" }}>
                {[
                  "Everything in Standard",
                  "Fully restaurant-branded stand — no Stellr logo",
                  "AI deep-trained on your restaurant's voice",
                  "Branded monthly report",
                  "WhatsApp support",
                  "Priority reply speed for negative reviews",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "16px" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: "2px", flexShrink: 0 }}>
                      <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2"/>
                      <polyline points="5,8 7,10 11,6" stroke="#1DB966" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
              <a href="/get-started" className="btn-primary" style={{
                display: "block",
                textAlign: "center",
                marginTop: "32px",
                background: "var(--sage)",
                color: "var(--forest)",
              }}>
                Talk to us
              </a>
            </div>
          </div>

          <p style={{ textAlign: "center", marginTop: "36px", fontSize: "14px", color: "var(--moss)" }}>
            QR stands included free on a 3-month commitment. No setup fees. No long contracts.
          </p>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="contact" className="section" style={{ background: "var(--forest)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="font-palatino" style={{
            fontSize: "clamp(28px, 3.5vw, 50px)",
            fontWeight: 400,
            color: "var(--white)",
            letterSpacing: "-0.3px",
            maxWidth: "640px",
            margin: "0 auto 20px",
          }}>
            Ready to take control of your reputation?
          </h2>
          <p style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.78,
            maxWidth: "480px",
            margin: "0 auto 44px",
          }}>
            Join restaurants worldwide who let Stellr handle the reviews while they focus on the food.
          </p>
          <a href="/get-started" className="btn-primary" style={{ background: "var(--sage)", color: "var(--forest)" }}>
            Get started today
          </a>

          <div style={{
            marginTop: "60px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "56px",
            flexWrap: "wrap",
          }}>
            {[
              { label: "Email", value: "bilal@stellr.biz", href: "mailto:bilal@stellr.biz" },
              { label: "Web", value: "stellr.biz", href: "https://stellr.biz" },
            ].map((item, i) => (
              <div key={i}>
                <p style={{
                  fontSize: "10px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.25)",
                  marginBottom: "6px",
                  fontFamily: "system-ui",
                }}>
                  {item.label}
                </p>
                <a href={item.href} style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                }}>
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
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

          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", letterSpacing: "1px", fontFamily: "system-ui" }}>
            Reputation · Elevated
          </p>

          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>
            © 2026 Stellr
          </p>
        </div>
      </footer>
    </>
  );
}
