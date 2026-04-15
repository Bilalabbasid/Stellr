"use client";

import { useState } from "react";

const LogoStar = () => (
  <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="16,3 19.5,11.5 28.5,12.5 22,18.5 23.8,27.5 16,23 8.2,27.5 10,18.5 3.5,12.5 12.5,11.5"
      fill="none" stroke="#1DB966" strokeWidth="1.8" strokeLinejoin="round" />
    <polygon points="16,8 18.5,13.5 24.5,14.2 20.2,18.2 21.3,24.2 16,21.2 10.7,24.2 11.8,18.2 7.5,14.2 13.5,13.5"
      fill="#1DB966" />
  </svg>
);

export default function GetStarted() {
  const [plan, setPlan] = useState<"standard" | "white-label">("standard");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const restaurant = data.get("restaurant") as string;
    const city = data.get("city") as string;
    const whatsapp = data.get("whatsapp") as string;
    const message = data.get("message") as string;

    const subject = `Stellr enquiry — ${restaurant}`;
    const body = [
      `Name: ${name}`,
      `Restaurant: ${restaurant}`,
      `City: ${city}`,
      `WhatsApp: ${whatsapp}`,
      `Plan interest: ${plan === "white-label" ? "White-label" : "Standard"}`,
      message ? `\nMessage:\n${message}` : "",
    ].filter(Boolean).join("\n");

    window.location.href = `mailto:bilal@stellr.biz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <>
      {/* ─── NAVBAR ─── */}
      <nav style={{
        background: "var(--forest)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        borderBottom: "1px solid var(--mid-green)",
      }}>
        <div style={{
          maxWidth: "1140px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <LogoStar />
            <span style={{
              fontFamily: "'Palatino Linotype', Palatino, Georgia, serif",
              fontSize: "18px",
              fontWeight: 400,
              letterSpacing: "5.5px",
              color: "var(--white)",
            }}>
              STELLR
            </span>
          </a>
          <a href="/" style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.45)",
            textDecoration: "none",
            fontFamily: "system-ui",
            transition: "color 0.2s",
          }}>
            ← Back
          </a>
        </div>
      </nav>

      {/* ─── FORM ─── */}
      <section style={{ background: "var(--petal)", minHeight: "calc(100vh - 64px)", padding: "80px 24px" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>

          {/* Header */}
          <div style={{ marginBottom: "48px" }}>
            <span style={{
              fontSize: "11px",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "var(--sage)",
              fontFamily: "system-ui",
              display: "block",
              marginBottom: "16px",
            }}>
              Get started
            </span>
            <h1 className="font-palatino" style={{
              fontSize: "clamp(32px, 4vw, 46px)",
              fontWeight: 400,
              color: "var(--forest)",
              letterSpacing: "-0.3px",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}>
              Let&apos;s build your reputation.
            </h1>
            <p style={{
              fontSize: "16px",
              color: "var(--moss)",
              lineHeight: 1.7,
            }}>
              Fill in your details and Bilal will be in touch within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div style={{
              background: "var(--white)",
              border: "1px solid var(--divider)",
              borderRadius: "12px",
              padding: "48px 40px",
              textAlign: "center",
            }}>
              <div style={{
                width: "48px",
                height: "48px",
                background: "rgba(29,185,102,0.1)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB966" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h2 className="font-palatino" style={{ fontSize: "26px", fontWeight: 400, color: "var(--forest)", marginBottom: "12px" }}>
                Your email app should open shortly.
              </h2>
              <p style={{ fontSize: "15px", color: "var(--moss)", lineHeight: 1.65, marginBottom: "28px" }}>
                If it didn&apos;t, email us directly at{" "}
                <a href="mailto:bilal@stellr.biz" style={{ color: "var(--sage)", textDecoration: "none" }}>bilal@stellr.biz</a>.
              </p>
              <a href="/" style={{
                fontSize: "13px",
                color: "var(--moss)",
                textDecoration: "none",
                letterSpacing: "0.5px",
              }}>
                ← Back to site
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{
                background: "var(--white)",
                border: "1px solid var(--divider)",
                borderRadius: "12px",
                padding: "40px 36px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}>
                {/* Name */}
                <div>
                  <label className="form-label">Your name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Bilal Abbasi"
                    className="form-input"
                  />
                </div>

                {/* Restaurant */}
                <div>
                  <label className="form-label">Restaurant name</label>
                  <input
                    name="restaurant"
                    type="text"
                    required
                    placeholder="Monal, Savour, ..."
                    className="form-input"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="form-label">City</label>
                  <select name="city" required className="form-input" defaultValue="">
                    <option value="" disabled>Select city</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="form-label">WhatsApp number</label>
                  <input
                    name="whatsapp"
                    type="tel"
                    required
                    placeholder="03XX XXXXXXX"
                    className="form-input"
                  />
                </div>

                {/* Plan */}
                <div>
                  <label className="form-label" style={{ marginBottom: "12px", display: "block" }}>Which plan?</label>
                  <div style={{ display: "flex", gap: "12px" }}>
                    {[
                      { value: "standard", label: "Standard", desc: "Independent restaurant" },
                      { value: "white-label", label: "White-label", desc: "Premium / multi-location" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setPlan(option.value as typeof plan)}
                        style={{
                          flex: 1,
                          padding: "14px 16px",
                          borderRadius: "6px",
                          border: plan === option.value
                            ? "1.5px solid var(--sage)"
                            : "1px solid var(--divider)",
                          background: plan === option.value
                            ? "rgba(29,185,102,0.06)"
                            : "var(--white)",
                          cursor: "pointer",
                          textAlign: "left",
                          transition: "all 0.15s",
                        }}
                      >
                        <span style={{
                          display: "block",
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "var(--forest)",
                          fontFamily: "system-ui",
                          marginBottom: "2px",
                        }}>
                          {option.label}
                        </span>
                        <span style={{
                          display: "block",
                          fontSize: "12px",
                          color: "var(--moss)",
                          fontFamily: "system-ui",
                        }}>
                          {option.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="form-label">
                    Anything else?{" "}
                    <span style={{ color: "var(--moss)", fontWeight: 400 }}>(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Number of tables, specific requirements, questions..."
                    className="form-input"
                    style={{ resize: "vertical", minHeight: "88px" }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{
                  background: "var(--sage)",
                  color: "var(--forest)",
                  width: "100%",
                  textAlign: "center",
                  marginTop: "4px",
                }}>
                  Send enquiry
                </button>

                <p style={{
                  fontSize: "12px",
                  color: "var(--moss)",
                  textAlign: "center",
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  This opens your email app with your details pre-filled.<br/>
                  We respond within 24 hours.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
