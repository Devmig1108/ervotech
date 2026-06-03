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
function ElPasoWebDesign({ auth }) {
  const canonical = "https://www.ervotechep.com/web-design-el-paso";
  const faqs = [
    { q: "How much does a website cost in El Paso?", a: "It depends on scope. Business sites land in common tiers; the fastest way to price it is a quick audit." },
    { q: "How long does it take to build a website?", a: "Most launch in a few weeks. The biggest variable is having your content and photos ready." },
    { q: "Will my website show up on Google?", a: "A foundation of clean structure and fast load times helps. Ongoing SEO makes the biggest difference." },
    { q: "Do you write the content for the website?", a: "Yes. Ervotech can write service-first copy that makes it obvious what you do and who you serve." }
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ervotech",
    url: canonical,
    areaServed: ["El Paso, TX", "Las Cruces, NM"],
    serviceType: ["Web Design", "Local SEO", "Website Development"],
    brand: "Ervotech"
  };
  return /* @__PURE__ */ jsxs(HelmetProvider, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonical }),
      /* @__PURE__ */ jsx("title", { children: "Web Design El Paso | Lead-Driven Websites | Ervotech" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "High-performance web design for El Paso businesses. 99% performance grade, local SEO, and conversion tracking." }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(faqSchema) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(businessSchema) })
    ] }),
    /* @__PURE__ */ jsxs(Public, { user: auth == null ? void 0 : auth.user, children: [
      /* @__PURE__ */ jsx(Head, { title: "Web Design El Paso | Ervotech" }),
      /* @__PURE__ */ jsxs("main", { className: "home-main", children: [
        /* @__PURE__ */ jsx("section", { className: "hero-modern aurora-bg", style: { minHeight: "75vh", display: "flex", alignItems: "center", paddingTop: "6rem", paddingBottom: "4rem" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 10 }, children: [
          /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 1e3, children: /* @__PURE__ */ jsx("span", { className: "badge-premium", style: { fontSize: "inherit", fontWeight: "600" }, children: "99% Performance Infrastructure" }) }),
          /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 200, duration: 1e3, children: /* @__PURE__ */ jsxs("h1", { className: "display-heading", children: [
            "Web Design in El Paso ",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Built for Speed & Leads." })
          ] }) }),
          /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 400, duration: 1e3, children: /* @__PURE__ */ jsx("p", { className: "hero-subtext", children: "Stop losing customers to slow, outdated sites. We build high-performance Laravel & React architecture that loads instantly and dominates local El Paso search rankings." }) }),
          /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 600, duration: 1e3, children: /* @__PURE__ */ jsx("div", { className: "hero-actions", children: /* @__PURE__ */ jsx("a", { href: "#audit", className: "btn-primary magnetic-btn", children: "Get a Free Website Audit" }) }) }),
          /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 800, duration: 1e3, children: /* @__PURE__ */ jsxs("div", { className: "logo-track", style: { marginTop: "4rem", fontSize: "0.9rem", color: "var(--text-2)", justifyContent: "center" }, children: [
            /* @__PURE__ */ jsx("span", { children: "✓ 943ms LCP Speed" }),
            /* @__PURE__ */ jsx("span", { children: "✓ Conversion Tracking" }),
            /* @__PURE__ */ jsx("span", { children: "✓ SEO Foundation" }),
            /* @__PURE__ */ jsx("span", { children: "✓ Secure Architecture" })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { style: { padding: "6rem 1rem", background: "var(--secondary-dark)", borderTop: "1px solid var(--border-subtle)" }, children: /* @__PURE__ */ jsx("div", { className: "container", style: { maxWidth: "1000px", margin: "0 auto" }, children: /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "comparison-card", style: { padding: "3rem", borderRadius: "20px", borderLeft: "4px solid var(--accent-purple)" }, children: [
          /* @__PURE__ */ jsx("h2", { style: { marginBottom: "1.5rem", textAlign: "left", fontSize: "2.2rem", color: "var(--text-1)" }, children: "The Ervotech Performance Edge" }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "1.2rem", lineHeight: "1.8", color: "var(--text-2)" }, children: "Most El Paso agencies use heavy, pre-made templates that frustrate mobile users and actively hurt your Google rankings. Ervotech engineers custom websites with sub-second speeds, ensuring you capture every single lead in the local market." })
        ] }) }) }) }),
        /* @__PURE__ */ jsx("section", { className: "bento-section", style: { padding: "8rem 1rem", background: "var(--primary-dark)" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsx("div", { className: "section-header", style: { marginBottom: "4rem" }, children: /* @__PURE__ */ jsx("h2", { children: "Engineered for the El Paso Market" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "bento-grid", style: { gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }, children: [
            /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 100, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "bento-card", style: { textAlign: "center", padding: "3rem 2rem" }, children: [
              /* @__PURE__ */ jsx("div", { style: { fontSize: "3rem", marginBottom: "1rem" }, children: "🚀" }),
              /* @__PURE__ */ jsx("h3", { className: "color-pop-teal", style: { marginBottom: "1rem" }, children: "Performance Basics" }),
              /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)" }, children: "Sub-second response times that keep El Paso mobile users from bouncing to competitors." })
            ] }) }),
            /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 300, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "bento-card aurora-bg-subtle", style: { textAlign: "center", padding: "3rem 2rem" }, children: [
              /* @__PURE__ */ jsx("div", { style: { fontSize: "3rem", marginBottom: "1rem" }, children: "📍" }),
              /* @__PURE__ */ jsx("h3", { className: "color-pop-purple", style: { marginBottom: "1rem" }, children: "Local SEO Focus" }),
              /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)" }, children: "Strategic visibility structured to dominate West Side, Horizon City, and Downtown searches." })
            ] }) }),
            /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 500, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "bento-card", style: { textAlign: "center", padding: "3rem 2rem" }, children: [
              /* @__PURE__ */ jsx("div", { style: { fontSize: "3rem", marginBottom: "1rem" }, children: "📊" }),
              /* @__PURE__ */ jsx("h3", { className: "color-pop-blue", style: { marginBottom: "1rem" }, children: "Lead Tracking" }),
              /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)" }, children: "Integrated call and form tracking so you know exactly which marketing efforts are generating ROI." })
            ] }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("section", { style: { padding: "6rem 1rem", background: "var(--secondary-dark)" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "800px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsx("h2", { style: { marginBottom: "3rem" }, children: "El Paso Web Design FAQ" }) }),
          /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: "1.5rem" }, children: faqs.map((f, index) => /* @__PURE__ */ jsx(Fade, { bottom: true, delay: index * 150, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "bento-card", style: { padding: "2rem" }, children: [
            /* @__PURE__ */ jsx("h3", { style: { color: "var(--accent-teal)", fontSize: "1.4rem", marginBottom: "1rem" }, children: f.q }),
            /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", fontSize: "1.1rem", lineHeight: "1.6" }, children: f.a })
          ] }) }, f.q)) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { id: "audit", className: "audit-cta-section", style: { padding: "8rem 1rem", background: "var(--primary-dark)" }, children: /* @__PURE__ */ jsx("div", { className: "container", style: { maxWidth: "800px", margin: "0 auto" }, children: /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "audit-box aurora-bg", children: [
          /* @__PURE__ */ jsx("h2", { style: { fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1rem" }, children: "Start Your Technical Audit" }),
          /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", marginBottom: "3rem", fontSize: "1.2rem" }, children: "Ready for a website that actually generates leads? Drop your details below to get started." }),
          /* @__PURE__ */ jsx("div", { className: "form-wrapper", children: /* @__PURE__ */ jsx(ContactForm, {}) })
        ] }) }) }) })
      ] })
    ] })
  ] });
}
export {
  ElPasoWebDesign as default
};
