// @ts-nocheck
"use client";

import { Alfa_Slab_One, IBM_Plex_Sans, Fira_Mono } from "next/font/google";
import content from "../data/content.json";

// /ui-ux-pro-max → Mid-century Americana / vintage service-station mood.
const display = Alfa_Slab_One({ subsets: ["latin"], weight: ["400"] });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const mono = Fira_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

// Vintage Americana — navy + tomato + cognac + cream (no prior use).
const NAVY = "#1E3A8A";       // deep service-station navy
const NAVY_DEEP = "#172554";  // pressed/hover
const TOMATO = "#B91C1C";     // tomato red
const COGNAC = "#B45309";     // cognac amber
const CREAM = "#FEF7E5";      // warm cream
const INK = "#1C1917";        // warm black
const STONE = "#E7E0CC";      // tinted stone
const MUTED = "#78716C";      // muted body

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl =
    "https://maps.google.com/maps?output=embed&q=" +
    encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main
      className={body.className}
      style={{ backgroundColor: CREAM, color: INK, minHeight: "100vh" }}
    >
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .fade-up { animation: fadeUp 0.9s cubic-bezier(.2,.7,.2,1) forwards; }
        .fade-up-d1 { animation: fadeUp 0.9s cubic-bezier(.2,.7,.2,1) 0.15s forwards; opacity: 0; }
        .fade-up-d2 { animation: fadeUp 0.9s cubic-bezier(.2,.7,.2,1) 0.30s forwards; opacity: 0; }
        .stripe-bg {
          background-image: repeating-linear-gradient(135deg, ${NAVY} 0 12px, ${TOMATO} 12px 24px);
        }
        .badge-shadow { box-shadow: 4px 4px 0 ${INK}; }
        .ticket {
          background-color: ${CREAM};
          border: 2px solid ${INK};
          position: relative;
        }
        .ticket::before, .ticket::after {
          content: ""; position: absolute; width: 16px; height: 16px;
          border-radius: 50%; background-color: ${INK}; top: 50%; transform: translateY(-50%);
        }
        .ticket::before { left: -10px; }
        .ticket::after { right: -10px; }
      `}</style>

      {/* CHROME STRIPE TOP BAR */}
      <div className="stripe-bg" style={{ height: 8 }} aria-hidden />

      {/* NAV — navy service-station header */}
      <nav style={{ backgroundColor: NAVY, color: CREAM, borderBottom: `4px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                backgroundColor: TOMATO,
                color: CREAM,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: 22,
                border: `3px solid ${CREAM}`,
                boxShadow: `0 0 0 3px ${INK}`,
              }}
              className={display.className}
            >
              P
            </span>
            <div>
              <p className={display.className} style={{ fontSize: 20, color: CREAM, letterSpacing: "0.02em", lineHeight: 1 }}>
                PETER'S
              </p>
              <p className={mono.className} style={{ fontSize: 10, letterSpacing: "0.32em", color: COGNAC, textTransform: "uppercase", marginTop: 2 }}>
                Auto Repair · Burbank
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a href="#bay" className={mono.className} style={{ display: "none", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: CREAM }}>
              <span className="hidden md:inline">/ THE BAY</span>
            </a>
            <a href="#services" className={mono.className} style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: CREAM }}>
              <span className="hidden md:inline">/ SERVICES</span>
            </a>
            <a href="#visit" className={mono.className} style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: CREAM }}>
              <span className="hidden md:inline">/ VISIT</span>
            </a>
            <a
              href={phoneTel}
              className={display.className}
              style={{
                backgroundColor: TOMATO,
                color: CREAM,
                padding: "12px 22px",
                fontSize: 14,
                letterSpacing: "0.1em",
                border: `2px solid ${INK}`,
                boxShadow: `3px 3px 0 ${INK}`,
              }}
            >
              CALL
            </a>
          </div>
        </div>
      </nav>

      {/* HERO — split with vintage signage badge */}
      <section style={{ backgroundColor: CREAM, borderBottom: `4px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-7 fade-up">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className={mono.className} style={{ fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", color: TOMATO, fontWeight: 700 }}>
                ★ EST. 1985 · S. VICTORY BLVD
              </span>
            </div>
            <h1
              className={display.className}
              style={{
                fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                color: INK,
                lineHeight: 1.0,
                letterSpacing: "-0.005em",
                textTransform: "uppercase",
              }}
            >
              Forty <span style={{ color: TOMATO }}>years</span><br />
              under the <span style={{ color: NAVY }}>hood</span>.
            </h1>
            <p className="mt-7 max-w-xl" style={{ fontSize: "1.075rem", lineHeight: 1.65, color: INK }}>
              {content.hero.subheading}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4 fade-up-d1">
              <a
                href={content.hero.ctaLink}
                className={display.className}
                style={{
                  backgroundColor: NAVY,
                  color: CREAM,
                  padding: "18px 32px",
                  fontSize: 16,
                  letterSpacing: "0.08em",
                  border: `3px solid ${INK}`,
                  boxShadow: `4px 4px 0 ${INK}`,
                  textTransform: "uppercase",
                }}
              >
                {content.hero.ctaText}
              </a>
              <a
                href="#services"
                className={mono.className}
                style={{
                  color: INK,
                  fontSize: 12,
                  letterSpacing: "0.28em",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  borderBottom: `2px solid ${COGNAC}`,
                  paddingBottom: 4,
                }}
              >
                ↓ Our service list
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 fade-up-d2">
              {[
                ["4.7", "RATING"],
                ["49", "REVIEWS"],
                ["40", "YEARS"],
              ].map(([v, k], i) => (
                <div key={i} className="ticket px-4 py-3">
                  <p className={display.className} style={{ fontSize: 28, color: NAVY, lineHeight: 1 }}>{v}</p>
                  <p className={mono.className} style={{ fontSize: 9, letterSpacing: "0.32em", color: TOMATO, textTransform: "uppercase", fontWeight: 700, marginTop: 4 }}>{k}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 fade-up-d1">
            {/* Vintage gas-station style badge over photo */}
            <div className="relative">
              <div
                style={{
                  border: `4px solid ${INK}`,
                  boxShadow: `8px 8px 0 ${TOMATO}, 8px 8px 0 4px ${INK}`,
                  backgroundColor: CREAM,
                  padding: 4,
                }}
              >
                <div
                  style={{
                    aspectRatio: "4/5",
                    backgroundImage: `url("${content.hero.image}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "saturate(0.95) contrast(1.05) sepia(0.05)",
                  }}
                />
              </div>
              {/* Round badge */}
              <div
                className={`${display.className} badge-shadow`}
                style={{
                  position: "absolute",
                  top: -22,
                  left: -22,
                  width: 110,
                  height: 110,
                  borderRadius: "50%",
                  backgroundColor: TOMATO,
                  color: CREAM,
                  border: `4px solid ${INK}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  transform: "rotate(-8deg)",
                }}
              >
                <p style={{ fontSize: 14, lineHeight: 1, letterSpacing: "0.04em" }}>WRITTEN</p>
                <p style={{ fontSize: 26, lineHeight: 1, letterSpacing: "0.02em", marginTop: 4 }}>QUOTES</p>
                <p style={{ fontSize: 9, lineHeight: 1, marginTop: 5, letterSpacing: "0.18em" }} className={mono.className}>FREE · EVERY JOB</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE BAY — about */}
      <section
        id="bay"
        style={{ backgroundColor: NAVY, color: CREAM, borderBottom: `4px solid ${INK}` }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.32em", color: COGNAC, textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>
                / IN THE BAY
              </p>
              <h2
                className={display.className}
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                  color: CREAM,
                  lineHeight: 1.0,
                  textTransform: "uppercase",
                }}
              >
                Family-run. Tools&nbsp;down at five.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6" style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: CREAM, opacity: 0.92 }}>
              {content.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {content.guarantees.map((g, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: CREAM,
                  color: INK,
                  border: `3px solid ${INK}`,
                  boxShadow: `4px 4px 0 ${COGNAC}`,
                  padding: "20px 18px",
                }}
              >
                <p
                  className={display.className}
                  style={{
                    fontSize: 28,
                    color: TOMATO,
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {g.icon}
                </p>
                <p className={display.className} style={{ fontSize: 16, color: INK, letterSpacing: "0.02em", textTransform: "uppercase" }}>
                  {g.title}
                </p>
                <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.06em", color: MUTED, marginTop: 6 }}>
                  {g.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — boxed list with red corner accents */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-6 mb-10 items-end">
          <div className="md:col-span-7">
            <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.32em", color: TOMATO, textTransform: "uppercase", marginBottom: 10, fontWeight: 700 }}>
              / Posted by the front desk
            </p>
            <h2
              className={display.className}
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                color: INK,
                lineHeight: 1.0,
                textTransform: "uppercase",
              }}
            >
              What we work on.
            </h2>
          </div>
          <div className="md:col-span-5 md:text-right">
            <span className={mono.className} style={{ fontSize: 12, letterSpacing: "0.32em", color: MUTED, textTransform: "uppercase" }}>
              · {String(content.services.length).padStart(2, "0")} services · written quotes free
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {content.services.map((s, i) => (
            <div
              key={i}
              style={{
                backgroundColor: CREAM,
                border: `3px solid ${INK}`,
                boxShadow: `5px 5px 0 ${NAVY}`,
                padding: "26px",
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <span
                  className={display.className}
                  style={{
                    fontSize: 14,
                    color: CREAM,
                    backgroundColor: TOMATO,
                    padding: "5px 12px",
                    letterSpacing: "0.08em",
                    border: `2px solid ${INK}`,
                  }}
                >
                  №{String(i + 1).padStart(2, "0")}
                </span>
                {s.price && (
                  <span className={mono.className} style={{ fontSize: 13, color: NAVY, fontWeight: 700, letterSpacing: "0.06em" }}>
                    {s.price}
                  </span>
                )}
              </div>
              <h3
                className={display.className}
                style={{
                  fontSize: "1.5rem",
                  color: INK,
                  letterSpacing: "0.01em",
                  lineHeight: 1.1,
                  textTransform: "uppercase",
                }}
              >
                {s.title}
              </h3>
              <p className="mt-3" style={{ color: INK, fontSize: "0.95rem", lineHeight: 1.65 }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS — vintage punch-card style */}
      <section
        style={{
          backgroundColor: STONE,
          borderTop: `4px solid ${INK}`,
          borderBottom: `4px solid ${INK}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-12">
            <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.32em", color: TOMATO, textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>
              / Filed in the office binder
            </p>
            <h2
              className={display.className}
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                color: INK,
                lineHeight: 1.0,
                textTransform: "uppercase",
              }}
            >
              Customer slips.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {content.reviews.map((r, i) => (
              <div
                key={i}
                className="ticket"
                style={{ padding: "26px 22px" }}
              >
                <p
                  className={mono.className}
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.28em",
                    color: TOMATO,
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginBottom: 14,
                    borderBottom: `2px dashed ${INK}`,
                    paddingBottom: 10,
                  }}
                >
                  CUSTOMER №{String(i + 1).padStart(3, "0")} · BURBANK
                </p>
                <div className="mb-4" style={{ color: TOMATO, letterSpacing: "0.1em" }}>
                  {Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}
                </div>
                <p style={{ fontSize: "0.98rem", lineHeight: 1.65, color: INK }}>
                  "{r.text}"
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <p className={display.className} style={{ fontSize: 14, color: NAVY, letterSpacing: "0.02em", textTransform: "uppercase" }}>
                    {r.name}
                  </p>
                  <p className={mono.className} style={{ fontSize: 10, letterSpacing: "0.18em", color: MUTED, textTransform: "uppercase" }}>
                    {r.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT — navy block with ticket-style address */}
      <section id="visit" style={{ backgroundColor: NAVY, color: CREAM, borderBottom: `4px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-5">
              <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.32em", color: COGNAC, textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>
                / Address · Hours · Phone
              </p>
              <h2
                className={display.className}
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                  color: CREAM,
                  lineHeight: 1.0,
                  textTransform: "uppercase",
                }}
              >
                Drop it off.
              </h2>

              <div
                className="ticket mt-8 px-6 py-5"
                style={{ color: INK, backgroundColor: CREAM }}
              >
                <p className={display.className} style={{ fontSize: 18, letterSpacing: "0.02em", color: NAVY, textTransform: "uppercase", lineHeight: 1.2 }}>
                  {content.contact.address.split(",")[0]}
                </p>
                <p className={mono.className} style={{ fontSize: 12, letterSpacing: "0.06em", color: MUTED, marginTop: 4 }}>
                  {content.contact.address.split(",").slice(1).join(",").trim()}
                </p>
              </div>

              <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.32em", color: COGNAC, textTransform: "uppercase", marginTop: 32, marginBottom: 16, fontWeight: 700 }}>
                / Hours of Operation
              </p>
              <table style={{ width: "100%", fontSize: 13 }} className={mono.className}>
                <tbody>
                  {Object.entries(content.contact.hours).map(([day, time]) => {
                    const closed = String(time).toLowerCase().includes("closed");
                    return (
                      <tr key={day} style={{ borderBottom: `1px dashed rgba(254,247,229,0.30)` }}>
                        <td className="py-2.5" style={{ color: CREAM, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em" }}>
                          {day.slice(0, 3)}
                        </td>
                        <td className="py-2.5 text-right" style={{ color: closed ? "rgba(254,247,229,0.5)" : CREAM, fontStyle: closed ? "italic" : "normal" }}>
                          {String(time)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <a
                href={phoneTel}
                className={`${display.className} block mt-10`}
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3rem)",
                  color: COGNAC,
                  lineHeight: 1.0,
                  letterSpacing: "0.01em",
                }}
              >
                {content.contact.phone}
              </a>
              <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.28em", color: "rgba(254,247,229,0.7)", textTransform: "uppercase", marginTop: 6 }}>
                · Tap to call · We answer ourselves ·
              </p>
            </div>
            <div className="md:col-span-7">
              <div
                style={{
                  border: `3px solid ${COGNAC}`,
                  outline: `1px solid ${INK}`,
                  outlineOffset: 4,
                  minHeight: 460,
                  backgroundColor: CREAM,
                }}
              >
                <iframe
                  title="Location"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  style={{ border: 0, minHeight: 454, display: "block", filter: "sepia(0.15) saturate(0.95)" }}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapUrl}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — tomato red full-bleed */}
      <section style={{ backgroundColor: TOMATO, color: CREAM, borderBottom: `4px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.32em", color: CREAM, textTransform: "uppercase", marginBottom: 12, fontWeight: 700, opacity: 0.85 }}>
              / Bring it in
            </p>
            <h3
              className={display.className}
              style={{
                fontSize: "clamp(2.25rem, 6vw, 5rem)",
                color: CREAM,
                lineHeight: 1.0,
                textTransform: "uppercase",
              }}
            >
              Forty years on Victory.<br />
              Drop the keys.
            </h3>
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href={phoneTel}
              className={display.className}
              style={{
                display: "inline-block",
                backgroundColor: NAVY,
                color: CREAM,
                padding: "22px 30px",
                fontSize: 18,
                letterSpacing: "0.08em",
                border: `3px solid ${INK}`,
                boxShadow: `5px 5px 0 ${INK}`,
                textTransform: "uppercase",
              }}
            >
              CALL {content.contact.phone}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: INK, color: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6 items-start mb-8">
            <div>
              <p className={display.className} style={{ fontSize: 24, color: CREAM, letterSpacing: "0.02em", textTransform: "uppercase" }}>
                PETER'S <span style={{ color: TOMATO }}>AUTO</span>
              </p>
              <p className={mono.className} style={{ fontSize: 10, letterSpacing: "0.28em", color: COGNAC, textTransform: "uppercase", marginTop: 4, fontWeight: 700 }}>
                / Family-owned · Burbank · Since 1985
              </p>
            </div>
            <div className={mono.className} style={{ fontSize: 12, letterSpacing: "0.06em", color: CREAM }}>
              <p>{content.contact.address}</p>
              <p className="mt-1">{content.contact.phone}</p>
            </div>
            {content.social && (
              <div className="flex flex-wrap gap-3 md:justify-end">
                {Object.entries(content.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={String(url)}
                    className={mono.className}
                    style={{
                      backgroundColor: NAVY,
                      color: CREAM,
                      padding: "8px 14px",
                      fontSize: 11,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      border: `2px solid ${COGNAC}`,
                    }}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            )}
          </div>
          <p
            className={mono.className}
            style={{
              fontSize: 10,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              borderTop: `2px solid ${COGNAC}`,
              paddingTop: 14,
              color: "rgba(254,247,229,0.60)",
            }}
          >
            © {new Date().getFullYear()} PETER'S AUTO REPAIR · 1220 S VICTORY BLVD · BURBANK, CA · WRITTEN QUOTES, EVERY JOB
          </p>
        </div>
      </footer>
    </main>
  );
}
