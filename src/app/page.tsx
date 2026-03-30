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
                Trusted by premium restaurants in Islamabad &amp; Lahore
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section style={{ background: "var(--mid-green)", padding: "88px 0" }}>
        <div className="container">
          <div className="stats-grid" style={{ display: "flex", alignItems: "flex-start" }}>
            {[
              { number: "88%", label: "Of diners", text: "check Google reviews before choosing a restaurant" },
              { number: "12%", label: "Of restaurants", text: "actually respond to their reviews — be the exception" },
              { number: "9%",  label: "Revenue uplift", text: "from a single 0.1 star increase in your Google rating" },
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
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.58)", lineHeight: 1.65, maxWidth: "240px" }}>
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="section" style={{ background: "var(--petal)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <span className="pill">How it works</span>
            <h2 className="font-palatino" style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "var(--forest)",
              letterSpacing: "-0.3px",
              margin: 0,
            }}>
              Three steps to a flawless reputation
            </h2>
          </div>

          <div className="steps-grid" style={{ display: "flex", gap: "24px" }}>
            {[
              { n: "01", title: "We set you up", body: "We onboard your restaurant, learn your voice, and install your QR stands on every table." },
              { n: "02", title: "AI handles the reviews", body: "Every Google review gets a personalised, on-brand response within hours. No delays, no copy-paste replies." },
              { n: "03", title: "Your rating climbs", body: "More reviews come in, all get answered, and Google rewards you with higher visibility." },
            ].map((step, i) => (
              <div key={i} className="card" style={{ flex: 1, overflow: "hidden" }}>
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

      {/* ─── FEATURES ─── */}
      <section id="features" className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <span className="pill">Features</span>
            <h2 className="font-palatino" style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "var(--forest)",
              letterSpacing: "-0.3px",
              margin: 0,
            }}>
              Everything your reputation needs
            </h2>
          </div>

          <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB966" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
                title: "AI review replies",
                body: "Automated, personalised responses in your restaurant's tone — generated for every review.",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB966" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
                title: "QR table stands",
                body: "Premium acrylic stands on every table drive more reviews passively, night after night.",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB966" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
                title: "White-label option",
                body: "Premium tier with your branding only — no Stellr logo visible anywhere.",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB966" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
                title: "Monthly report",
                body: "An auto-generated reputation report sent to you every month — clear, readable, actionable.",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB966" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
                title: "Negative review alerts",
                body: "Get notified the moment a low rating comes in, so you can act before it spreads.",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB966" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
                title: "Voice training",
                body: "AI learns your restaurant's personality during onboarding. Set once, never touch again.",
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

      {/* ─── MARKET SIZE ─── */}
      <section style={{ background: "var(--forest)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
        {/* Faint watermark star, bottom-left */}
        <div style={{
          position: "absolute",
          left: "-120px",
          bottom: "-100px",
          opacity: 0.035,
          pointerEvents: "none",
          userSelect: "none",
        }}>
          <svg width="500" height="500" viewBox="0 0 32 32" fill="none">
            <polygon points="16,3 19.5,11.5 28.5,12.5 22,18.5 23.8,27.5 16,23 8.2,27.5 10,18.5 3.5,12.5 12.5,11.5"
              fill="#1DB966" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="container" style={{ position: "relative" }}>
          <div style={{ maxWidth: "600px", marginBottom: "64px" }}>
            <span className="pill" style={{ background: "rgba(29,185,102,0.12)", color: "var(--sage)" }}>
              The opportunity
            </span>
            <h2 className="font-palatino" style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "var(--white)",
              letterSpacing: "-0.3px",
              margin: 0,
              lineHeight: 1.2,
            }}>
              A massive market — almost entirely unmanaged.
            </h2>
          </div>

          <div className="market-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}>
            {[
              {
                figure: "$4B",
                label: "Pakistan restaurant industry",
                body: "The total size of the food service sector — one of the fastest-growing consumer categories in the country.",
                source: "Pakistan Bureau of Statistics, 2023",
              },
              {
                figure: "80,000+",
                label: "Registered restaurants",
                body: "The number of food businesses operating in Pakistan's major cities. Fewer than 5% have any structured reputation management.",
                source: "REAP / FBR industry estimates",
              },
              {
                figure: "$9.5B",
                label: "Global ORM market by 2028",
                body: "Online reputation management is growing at 13% annually worldwide — and Pakistan is at the start of that curve.",
                source: "Grand View Research, 2024",
              },
            ].map((item, i) => (
              <div key={i} style={{
                padding: "40px 40px 40px 0",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                paddingRight: i < 2 ? "40px" : "0",
                paddingLeft: i > 0 ? "40px" : "0",
              }}>
                <div className="font-palatino" style={{
                  fontSize: "clamp(40px, 4vw, 56px)",
                  fontWeight: 400,
                  color: "var(--sage)",
                  lineHeight: 1,
                  marginBottom: "12px",
                  letterSpacing: "-1px",
                }}>
                  {item.figure}
                </div>
                <p style={{
                  fontSize: "11px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: "14px",
                  fontFamily: "system-ui",
                }}>
                  {item.label}
                </p>
                <p style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.7,
                  marginBottom: "16px",
                }}>
                  {item.body}
                </p>
                <p style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.2)",
                  fontFamily: "system-ui",
                  letterSpacing: "0.3px",
                }}>
                  {item.source}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: "64px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            maxWidth: "720px",
          }}>
            <p style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.78,
              fontFamily: "'Palatino Linotype', Palatino, Georgia, serif",
              fontStyle: "italic",
            }}>
              &ldquo;Every premium restaurant in Islamabad, Lahore, and Karachi is competing for the same upper-end diner — and that diner checks Google before they book. Stellr gives you the edge.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="section" style={{ background: "var(--petal)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <span className="pill">Pricing</span>
            <h2 className="font-palatino" style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "var(--forest)",
              letterSpacing: "-0.3px",
              margin: 0,
            }}>
              Simple, honest pricing
            </h2>
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
              <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--moss)", marginBottom: "20px", fontFamily: "system-ui" }}>
                Standard
              </p>
              <div style={{ marginBottom: "4px" }}>
                <span className="font-palatino" style={{ fontSize: "46px", fontWeight: 400, color: "var(--forest)" }}>
                  Rs 6,000
                </span>
              </div>
              <p style={{ fontSize: "13px", color: "var(--moss)", marginBottom: "32px" }}>/month · billed monthly</p>
              <div style={{ borderTop: "1px solid var(--divider)", paddingTop: "28px" }}>
                {[
                  "AI review replies",
                  "1 Stellr-branded QR stand (free on 3-month commit)",
                  "Monthly auto report",
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
                Get started
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
              <p style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "20px", fontFamily: "system-ui" }}>
                White-label
              </p>
              <div style={{ marginBottom: "4px" }}>
                <span className="font-palatino" style={{ fontSize: "46px", fontWeight: 400, color: "var(--white)" }}>
                  Rs 12,000
                </span>
              </div>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", marginBottom: "32px" }}>/month · billed monthly</p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "28px" }}>
                {[
                  "Everything in Standard",
                  "Fully restaurant-branded stand (no Stellr logo)",
                  "AI trained to your restaurant's voice",
                  "Branded monthly report",
                  "WhatsApp support",
                  "Priority reply speed",
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
                Get started
              </a>
            </div>
          </div>

          <p style={{ textAlign: "center", marginTop: "36px", fontSize: "14px", color: "var(--moss)" }}>
            Stand included free on 3-month commitment. No setup fees. No contracts.
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
            Join premium restaurants across Pakistan who let Stellr handle the reviews while they focus on the food.
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
            © 2025 Stellr
          </p>
        </div>
      </footer>
    </>
  );
}
