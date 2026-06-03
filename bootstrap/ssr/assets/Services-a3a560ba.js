import { j as jsxs, a as jsx } from "../ssr.js";
import { P as Public } from "./PublicLayout-8f05ad2f.js";
import { Head } from "@inertiajs/react";
import Fade from "react-reveal/Fade.js";
import { C as ContactForm } from "./ContactForm-660d6b69.js";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "react-scroll-parallax";
import "axios";
function Services({ auth }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Design and SEO Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Ervotech",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "El Paso",
        "addressRegion": "TX"
      }
    },
    "areaServed": ["El Paso, TX", "Las Cruces, NM", "Horizon City, TX"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing and Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO Strategy"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical Consulting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development"
          }
        }
      ]
    }
  };
  return /* @__PURE__ */ jsxs(HelmetProvider, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.ervotechep.com/services" }),
      /* @__PURE__ */ jsx("title", { children: "Web Design & Local SEO Services in El Paso | Ervotech" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Ervotech provides premium custom web design, local SEO, and software development services designed to help El Paso businesses capture more leads and revenue." }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(structuredData) })
    ] }),
    /* @__PURE__ */ jsxs(Public, { user: auth == null ? void 0 : auth.user, children: [
      /* @__PURE__ */ jsx(Head, { title: "Our Services | Ervotech" }),
      /* @__PURE__ */ jsxs("main", { className: "home-main", children: [
        /* @__PURE__ */ jsx("section", { className: "hero-modern aurora-bg", style: { minHeight: "60vh", display: "flex", alignItems: "center", paddingTop: "6rem", paddingBottom: "4rem" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 10 }, children: [
          /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 1e3, children: /* @__PURE__ */ jsx("span", { className: "badge-premium", style: { fontSize: "inherit", fontWeight: "600" }, children: "Premium Digital Solutions" }) }),
          /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 200, duration: 1e3, children: /* @__PURE__ */ jsxs("h1", { className: "display-heading", children: [
            "Engineered For ",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Maximum Growth." })
          ] }) }),
          /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 400, duration: 1e3, children: /* @__PURE__ */ jsx("p", { className: "hero-subtext", children: "We don't just sell websites. We build high-performance digital infrastructure designed to help your business dominate the El Paso market." }) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { id: "bento-services", className: "bento-section", style: { background: "var(--primary-dark)", padding: "4rem 1rem 8rem" }, children: /* @__PURE__ */ jsx("div", { className: "container", style: { maxWidth: "1200px", margin: "0 auto" }, children: /* @__PURE__ */ jsxs("div", { className: "bento-grid", children: [
          /* @__PURE__ */ jsx("div", { className: "bento-large", style: { gridColumn: "span 8", gridRow: "span 2" }, children: /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsx("div", { className: "bento-card aurora-bg-subtle", style: { height: "100%" }, children: /* @__PURE__ */ jsxs("div", { className: "bento-content", children: [
            /* @__PURE__ */ jsx("div", { style: { fontSize: "2rem", marginBottom: "1rem" }, children: "🖥️" }),
            /* @__PURE__ */ jsx("h3", { className: "color-pop-teal", children: "Custom Web Design" }),
            /* @__PURE__ */ jsx("p", { style: { marginBottom: "1.5rem" }, children: "Stop losing customers to slow, outdated template websites. We custom-code visually stunning, blazing-fast websites that look perfect on mobile devices and are engineered to convert visitors into paying clients." }),
            /* @__PURE__ */ jsx("a", { href: "/web-design-el-paso", style: { color: "var(--text-1)", fontWeight: "bold", textDecoration: "none", borderBottom: "2px solid var(--accent-teal)", paddingBottom: "2px" }, children: "Explore Web Design →" })
          ] }) }) }) }),
          /* @__PURE__ */ jsx("div", { className: "bento-medium", style: { gridColumn: "span 4" }, children: /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 200, duration: 800, children: /* @__PURE__ */ jsx("div", { className: "bento-card", style: { height: "100%" }, children: /* @__PURE__ */ jsxs("div", { className: "bento-content", children: [
            /* @__PURE__ */ jsx("div", { style: { fontSize: "2rem", marginBottom: "1rem" }, children: "📈" }),
            /* @__PURE__ */ jsx("h3", { className: "color-pop-orange", children: "Local SEO Strategy" }),
            /* @__PURE__ */ jsx("p", { children: "We optimize your site to dominate the Google Map Pack and search results so local customers find you before they find your competitors." })
          ] }) }) }) }),
          /* @__PURE__ */ jsx("div", { className: "bento-medium", style: { gridColumn: "span 4" }, children: /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 400, duration: 800, children: /* @__PURE__ */ jsx("div", { className: "bento-card", style: { height: "100%" }, children: /* @__PURE__ */ jsxs("div", { className: "bento-content", children: [
            /* @__PURE__ */ jsx("div", { style: { fontSize: "2rem", marginBottom: "1rem" }, children: "🔍" }),
            /* @__PURE__ */ jsx("h3", { className: "color-pop-purple", children: "Technical Consulting" }),
            /* @__PURE__ */ jsx("p", { children: "Not sure why your current site isn't working? We provide deep technical audits and clear roadmaps to fix your digital presence." })
          ] }) }) }) }),
          /* @__PURE__ */ jsx("div", { className: "bento-wide", style: { gridColumn: "span 8" }, children: /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 600, duration: 800, children: /* @__PURE__ */ jsx("div", { className: "bento-card", style: { height: "100%" }, children: /* @__PURE__ */ jsxs("div", { className: "bento-content", style: { display: "flex", flexDirection: "column", justifyContent: "center" }, children: [
            /* @__PURE__ */ jsx("div", { style: { fontSize: "2rem", marginBottom: "1rem" }, children: "⚙️" }),
            /* @__PURE__ */ jsx("h3", { className: "color-pop-pink", children: "Custom Software Development" }),
            /* @__PURE__ */ jsx("p", { children: "Need something more complex than a standard website? We build custom web applications, customer portals, and internal tools using industry-leading frameworks like React and Laravel to streamline your business operations." })
          ] }) }) }) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "performance-section", style: { background: "var(--secondary-dark)", padding: "6rem 1rem" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "1000px", margin: "0 auto", textAlign: "center" }, children: [
          /* @__PURE__ */ jsxs(Fade, { bottom: true, duration: 800, children: [
            /* @__PURE__ */ jsx("h2", { children: "How We Work With You" }),
            /* @__PURE__ */ jsx("p", { className: "subtext", style: { color: "var(--text-2)", fontSize: "1.2rem", marginBottom: "4rem" }, children: "A transparent, professional process designed to respect your time and deliver results." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "comparison-grid", style: { gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", marginTop: "2rem" }, children: [
            /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 100, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "comparison-card", style: { padding: "2rem", textAlign: "left" }, children: [
              /* @__PURE__ */ jsx("h4", { className: "color-pop-teal", style: { fontSize: "1.2rem", marginBottom: "1rem" }, children: "1. The Audit" }),
              /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", fontSize: "1rem" }, children: "We review your current digital footprint, local competitors, and business goals to find the gaps in your strategy." })
            ] }) }),
            /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 300, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "comparison-card", style: { padding: "2rem", textAlign: "left" }, children: [
              /* @__PURE__ */ jsx("h4", { className: "color-pop-blue", style: { fontSize: "1.2rem", marginBottom: "1rem", color: "var(--accent-blue)" }, children: "2. The Blueprint" }),
              /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", fontSize: "1rem" }, children: "You receive a custom proposal outlining the exact design, tech stack, and timeline required to hit your targets." })
            ] }) }),
            /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 500, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "comparison-card", style: { padding: "2rem", textAlign: "left" }, children: [
              /* @__PURE__ */ jsx("h4", { className: "color-pop-purple", style: { fontSize: "1.2rem", marginBottom: "1rem" }, children: "3. The Build" }),
              /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", fontSize: "1rem" }, children: "Our team codes your custom solution, keeping you updated at major milestones without overwhelming you with jargon." })
            ] }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("section", { id: "audit", className: "audit-cta-section", style: { padding: "8rem 1rem", background: "var(--primary-dark)" }, children: /* @__PURE__ */ jsx("div", { className: "container", style: { maxWidth: "800px", margin: "0 auto" }, children: /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "audit-box aurora-bg", children: [
          /* @__PURE__ */ jsx("h2", { children: "Stop leaving money on the table." }),
          /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", marginBottom: "2rem" }, children: "Drop your website address below. We'll run a deep technical review and show you exactly what's stopping your site from generating leads." }),
          /* @__PURE__ */ jsx("div", { className: "form-wrapper", children: /* @__PURE__ */ jsx(ContactForm, {}) })
        ] }) }) }) })
      ] })
    ] })
  ] });
}
export {
  Services as default
};
