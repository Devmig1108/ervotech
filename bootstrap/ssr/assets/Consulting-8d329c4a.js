import { j as jsxs, a as jsx } from "../ssr.js";
import { P as Public } from "./PublicLayout-8f05ad2f.js";
import { Head } from "@inertiajs/react";
import Fade from "react-reveal/Fade.js";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "react-scroll-parallax";
function Consulting({ auth }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Technical Web Consulting",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Ervotech",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "El Paso",
        "addressRegion": "TX"
      }
    },
    "areaServed": ["El Paso, TX", "Las Cruces, NM"],
    "description": "Enterprise-grade technical web consulting in El Paso. Our team specializes in Laravel performance, React architecture, and Local SEO strategy."
  };
  return /* @__PURE__ */ jsxs(HelmetProvider, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.ervotechep.com/web-consulting-el-paso" }),
      /* @__PURE__ */ jsx("title", { children: "Web Consulting El Paso | Technical Strategy & SEO | Ervotech" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Stop losing leads to slow websites. Ervotech provides technical web consulting in El Paso, specializing in website audits, performance, and scaling local businesses." }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(structuredData) })
    ] }),
    /* @__PURE__ */ jsxs(Public, { user: auth.user, children: [
      /* @__PURE__ */ jsx(Head, { title: "Web Consulting El Paso | Ervotech" }),
      /* @__PURE__ */ jsxs("main", { className: "home-main", children: [
        /* @__PURE__ */ jsx("section", { className: "hero-modern aurora-bg", style: { minHeight: "70vh", display: "flex", alignItems: "center", paddingTop: "6rem", paddingBottom: "4rem" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 10 }, children: [
          /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 1e3, children: /* @__PURE__ */ jsx("span", { className: "badge-premium", style: { fontSize: "inherit", fontWeight: "600" }, children: "Specialist Web Consulting in El Paso, TX" }) }),
          /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 200, duration: 1e3, children: /* @__PURE__ */ jsxs("h1", { className: "display-heading", children: [
            "Technical Strategy to ",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Scale Your Business." })
          ] }) }),
          /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 400, duration: 1e3, children: /* @__PURE__ */ jsxs("p", { className: "hero-subtext", children: [
            'Most agencies focus on "pretty" design. We focus on ',
            /* @__PURE__ */ jsx("strong", { children: "infrastructure, speed, and search dominance" }),
            " to ensure your website actually generates revenue."
          ] }) }),
          /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 600, duration: 1e3, children: /* @__PURE__ */ jsx("div", { className: "hero-actions", children: /* @__PURE__ */ jsx("a", { href: "#audit", className: "btn-primary magnetic-btn", children: "Request a Technical Audit" }) }) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { style: { padding: "6rem 1rem", background: "var(--secondary-dark)", borderTop: "1px solid var(--border-subtle)" }, children: /* @__PURE__ */ jsx("div", { className: "container", style: { maxWidth: "1000px", margin: "0 auto" }, children: /* @__PURE__ */ jsxs(Fade, { bottom: true, duration: 800, children: [
          /* @__PURE__ */ jsx("h2", { className: "text-gradient", style: { marginBottom: "2.5rem", textAlign: "left", fontSize: "2.8rem" }, children: "Why Generic Web Design Fails in El Paso" }),
          /* @__PURE__ */ jsxs("div", { className: "comparison-card", style: { padding: "3rem", borderRadius: "20px" }, children: [
            /* @__PURE__ */ jsxs("p", { style: { fontSize: "1.2rem", lineHeight: "1.8", color: "var(--text-1)", marginBottom: "1.5rem" }, children: [
              "In a competitive local landscape—from the ",
              /* @__PURE__ */ jsx("strong", { children: "Upper Valley to East Side El Paso" }),
              "—your website is often the first point of failure. If your site is built on a bloated platform like WordPress, you are likely losing 40-50% of your mobile traffic before the page even loads."
            ] }),
            /* @__PURE__ */ jsx("p", { style: { fontSize: "1.2rem", lineHeight: "1.8", color: "var(--text-1)" }, children: "As your technical consulting partner, we look under the hood of your digital presence. We identify load speed issues, poor user experiences, and SEO gaps that allow national competitors to outrank local El Paso firms." })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "bento-section", style: { padding: "6rem 1rem" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsx("div", { className: "section-header", style: { marginBottom: "4rem" }, children: /* @__PURE__ */ jsx("h2", { children: "The Ervotech Performance Standard" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "bento-grid", style: { gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }, children: [
            /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 100, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "bento-card", style: { textAlign: "center", padding: "3rem 2rem" }, children: [
              /* @__PURE__ */ jsx("div", { style: { fontSize: "3rem", color: "var(--accent-teal)", marginBottom: "1rem", fontWeight: "800" }, children: "99%" }),
              /* @__PURE__ */ jsx("h3", { style: { color: "var(--text-1)", marginBottom: "1rem" }, children: "Infrastructure" }),
              /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)" }, children: "Sub-second load times optimized for local mobile networks." })
            ] }) }),
            /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 300, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "bento-card aurora-bg-subtle", style: { textAlign: "center", padding: "3rem 2rem" }, children: [
              /* @__PURE__ */ jsx("div", { style: { fontSize: "3rem", color: "var(--accent-purple)", marginBottom: "1rem", fontWeight: "800" }, children: "Top 3" }),
              /* @__PURE__ */ jsx("h3", { style: { color: "var(--text-1)", marginBottom: "1rem" }, children: "Search Rank" }),
              /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)" }, children: "Targeted Local SEO strategies to dominate service terms." })
            ] }) }),
            /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 500, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "bento-card", style: { textAlign: "center", padding: "3rem 2rem" }, children: [
              /* @__PURE__ */ jsx("div", { style: { fontSize: "3rem", color: "var(--accent-blue)", marginBottom: "1rem", fontWeight: "800" }, children: "100%" }),
              /* @__PURE__ */ jsx("h3", { style: { color: "var(--text-1)", marginBottom: "1rem" }, children: "Full Control" }),
              /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)" }, children: "Zero templates. Custom code your business owns entirely." })
            ] }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "performance-section", style: { background: "var(--secondary-dark)", padding: "6rem 1rem" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "1000px", margin: "0 auto", textAlign: "center" }, children: [
          /* @__PURE__ */ jsxs(Fade, { bottom: true, duration: 800, children: [
            /* @__PURE__ */ jsx("h2", { children: "Our Strategic Consulting Process" }),
            /* @__PURE__ */ jsx("p", { className: "subtext", style: { color: "var(--text-2)", fontSize: "1.2rem", marginBottom: "4rem" }, children: "A precise methodology for diagnosing issues and scaling your digital presence." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "comparison-grid", style: { gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", marginTop: "2rem" }, children: [
            { step: "01", title: "Technical Audit", desc: "We deep-dive into your current code, hosting, and SEO health to find friction points.", color: "var(--accent-teal)" },
            { step: "02", title: "Performance Roadmap", desc: "We draft a sub-second response strategy using modern architecture.", color: "var(--accent-blue)" },
            { step: "03", title: "Local Market Siloing", desc: "We architect your content to dominate El Paso and regional search terms.", color: "var(--accent-purple)" },
            { step: "04", title: "Scalable Execution", desc: "Our team implements the high-performance stack that your business owns for life.", color: "var(--accent-pink)" }
          ].map((item, index) => /* @__PURE__ */ jsx(Fade, { bottom: true, delay: index * 150, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "comparison-card", style: { padding: "2rem", textAlign: "left", height: "100%" }, children: [
            /* @__PURE__ */ jsx("span", { style: { fontSize: "2rem", fontWeight: "bold", color: item.color, display: "block", marginBottom: "1rem" }, children: item.step }),
            /* @__PURE__ */ jsx("h4", { style: { fontSize: "1.2rem", marginBottom: "1rem", color: "var(--text-1)" }, children: item.title }),
            /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", fontSize: "1rem" }, children: item.desc })
          ] }) }, index)) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { style: { padding: "6rem 1rem", background: "var(--primary-dark)" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "800px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsx("h2", { style: { marginBottom: "3rem" }, children: "Web Consulting FAQ" }) }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "1.5rem" }, children: [
            /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 100, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "bento-card", style: { padding: "2rem" }, children: [
              /* @__PURE__ */ jsx("h3", { style: { color: "var(--accent-teal)", fontSize: "1.4rem", marginBottom: "1rem" }, children: "What does a technical web consultant actually do?" }),
              /* @__PURE__ */ jsxs("p", { style: { color: "var(--text-2)", fontSize: "1.1rem", lineHeight: "1.6" }, children: [
                "Unlike a traditional design firm, we audit your ",
                /* @__PURE__ */ jsx("strong", { children: "entire tech stack" }),
                ". We identify security vulnerabilities, database bottlenecks, and code issues that prevent your platform from converting leads or ranking on Google."
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 300, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "bento-card", style: { padding: "2rem" }, children: [
              /* @__PURE__ */ jsx("h3", { style: { color: "var(--accent-purple)", fontSize: "1.4rem", marginBottom: "1rem" }, children: "How do you help with Local SEO in El Paso?" }),
              /* @__PURE__ */ jsxs("p", { style: { color: "var(--text-2)", fontSize: "1.1rem", lineHeight: "1.6" }, children: [
                "We implement technical signals—like ",
                /* @__PURE__ */ jsx("strong", { children: "JSON-LD Schema" }),
                " and localized content structures—that help search engines understand your exact relevance to the El Paso, Socorro, and Las Cruces markets."
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 500, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "bento-card", style: { padding: "2rem" }, children: [
              /* @__PURE__ */ jsx("h3", { style: { color: "var(--accent-orange)", fontSize: "1.4rem", marginBottom: "1rem" }, children: "Why move away from templates?" }),
              /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", fontSize: "1.1rem", lineHeight: "1.6" }, children: "Security and Speed. Custom-coded solutions are inherently more secure and load significantly faster than plugin-heavy template sites, providing a massive advantage in search rankings and user experience." })
            ] }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("section", { id: "audit", className: "audit-cta-section", style: { padding: "8rem 1rem", background: "var(--secondary-dark)" }, children: /* @__PURE__ */ jsx("div", { className: "container", style: { maxWidth: "800px", margin: "0 auto" }, children: /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "audit-box aurora-bg", children: [
          /* @__PURE__ */ jsx("h2", { style: { fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1rem" }, children: "Ready to Outpace the Competition?" }),
          /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", marginBottom: "3rem", fontSize: "1.2rem" }, children: "Get a professional technical audit from El Paso's leading technical web consulting firm." }),
          /* @__PURE__ */ jsxs("div", { className: "logo-track", style: { fontSize: "0.9rem", color: "var(--text-1)", marginBottom: "3rem", justifyContent: "center" }, children: [
            /* @__PURE__ */ jsx("span", { children: "EL PASO" }),
            /* @__PURE__ */ jsx("span", { children: "LAS CRUCES" }),
            /* @__PURE__ */ jsx("span", { children: "HORIZON CITY" }),
            /* @__PURE__ */ jsx("span", { children: "SOCORRO" })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "/contact", className: "btn-primary magnetic-btn", style: { padding: "1rem 2.5rem", fontSize: "1.1rem" }, children: "Schedule Your Session Today" })
        ] }) }) }) })
      ] })
    ] })
  ] });
}
export {
  Consulting as default
};
