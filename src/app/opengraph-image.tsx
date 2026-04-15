import { ImageResponse } from "next/og";

export const alt = "Stellr — AI Reputation Management for Premium Restaurants in Pakistan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#082312",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Watermark star */}
        <div
          style={{
            position: "absolute",
            right: "-40px",
            top: "50%",
            transform: "translateY(-50%)",
            opacity: 0.08,
            display: "flex",
          }}
        >
          <svg width="520" height="520" viewBox="0 0 32 32" fill="none">
            <polygon
              points="16,3 19.5,11.5 28.5,12.5 22,18.5 23.8,27.5 16,23 8.2,27.5 10,18.5 3.5,12.5 12.5,11.5"
              fill="#1DB966"
            />
          </svg>
        </div>

        {/* Logo lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
            <polygon
              points="16,3 19.5,11.5 28.5,12.5 22,18.5 23.8,27.5 16,23 8.2,27.5 10,18.5 3.5,12.5 12.5,11.5"
              fill="none"
              stroke="#1DB966"
              strokeWidth="1.8"
            />
            <polygon
              points="16,8 18.5,13.5 24.5,14.2 20.2,18.2 21.3,24.2 16,21.2 10.7,24.2 11.8,18.2 7.5,14.2 13.5,13.5"
              fill="#1DB966"
            />
          </svg>
          <div
            style={{
              fontSize: "24px",
              color: "#FFFFFF",
              letterSpacing: "6px",
              fontWeight: 400,
            }}
          >
            STELLR
          </div>
        </div>

        {/* Headline block */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", maxWidth: "900px" }}>
          <div
            style={{
              fontSize: "18px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#1DB966",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Reputation · Elevated
          </div>
          <div
            style={{
              fontSize: "78px",
              color: "#FFFFFF",
              lineHeight: 1.08,
              letterSpacing: "-1px",
            }}
          >
            Your restaurant&apos;s reputation, on autopilot.
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.4,
              fontFamily: "system-ui, sans-serif",
              maxWidth: "820px",
            }}
          >
            AI review responses and premium QR stands for Pakistan&apos;s top restaurants.
          </div>
        </div>

        {/* Footer line */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "20px",
            color: "rgba(255,255,255,0.5)",
            fontFamily: "system-ui, sans-serif",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "28px",
          }}
        >
          <div>stellr.biz</div>
          <div>Islamabad · Lahore · Karachi</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
