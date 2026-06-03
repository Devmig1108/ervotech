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
function Contact({ auth }) {
  return /* @__PURE__ */ jsxs(HelmetProvider, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.ervotechep.com/contact" }),
      /* @__PURE__ */ jsx("title", { children: "Contact Ervotech | Technical Web Consulting El Paso" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Ready to scale? Contact Ervotech for expert web consulting, SEO audits, and custom software development in El Paso and Horizon City." })
    ] }),
    /* @__PURE__ */ jsxs(Public, { user: auth == null ? void 0 : auth.user, children: [
      /* @__PURE__ */ jsx(Head, { title: "Contact Us - Technical Web Consulting" }),
      /* @__PURE__ */ jsxs("main", { className: "home-main", children: [
        /* @__PURE__ */ jsx("section", { className: "hero-modern aurora-bg", style: { minHeight: "55vh", display: "flex", alignItems: "center", paddingTop: "6rem", paddingBottom: "4rem" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 10 }, children: [
          /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 1e3, children: /* @__PURE__ */ jsx("span", { className: "badge-premium", style: { fontSize: "inherit", fontWeight: "600" }, children: "99% Performance Infrastructure Ready" }) }),
          /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 200, duration: 1e3, children: /* @__PURE__ */ jsxs("h1", { className: "display-heading", children: [
            "Let’s Build ",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "For Scale." })
          ] }) }),
          /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 400, duration: 1e3, children: /* @__PURE__ */ jsx("p", { className: "hero-subtext", children: "Whether you're in Downtown El Paso or Horizon City, we provide the technical roadmap your business needs to outpace the competition." }) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "bento-section", style: { background: "var(--primary-dark)", padding: "4rem 1rem 8rem" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "section-header", style: { marginBottom: "4rem" }, children: [
            /* @__PURE__ */ jsx("h2", { children: "Direct Channels" }),
            /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", fontSize: "1.2rem", textAlign: "center" }, children: "Reach out to us directly or book a session below." })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "bento-grid", style: { gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }, children: [
            /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 100, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "bento-card", style: { textAlign: "center", padding: "3rem 2rem" }, children: [
              /* @__PURE__ */ jsx("div", { style: { fontSize: "3rem", marginBottom: "1rem" }, children: "📧" }),
              /* @__PURE__ */ jsx("h3", { className: "color-pop-teal", style: { marginBottom: "1rem", fontSize: "1.5rem" }, children: "Email Us" }),
              /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", marginBottom: "1.5rem" }, children: "For detailed audits and project inquiries." }),
              /* @__PURE__ */ jsx("a", { href: "mailto:contact@ervotechep.com", style: { color: "var(--text-1)", fontWeight: "bold", textDecoration: "none", borderBottom: "2px solid var(--accent-teal)", paddingBottom: "2px", transition: "color 0.3s ease" }, onMouseOver: (e) => e.target.style.color = "var(--accent-teal)", onMouseOut: (e) => e.target.style.color = "var(--text-1)", children: "contact@ervotechep.com" })
            ] }) }),
            /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 300, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "bento-card aurora-bg-subtle", style: { textAlign: "center", padding: "3rem 2rem" }, children: [
              /* @__PURE__ */ jsx("div", { style: { fontSize: "3rem", marginBottom: "1rem" }, children: "📞" }),
              /* @__PURE__ */ jsx("h3", { className: "color-pop-purple", style: { marginBottom: "1rem", fontSize: "1.5rem" }, children: "Call Us" }),
              /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", marginBottom: "1.5rem" }, children: "Direct technical support and quick questions." }),
              /* @__PURE__ */ jsx("a", { href: "tel:+9153410376", style: { color: "var(--text-1)", fontWeight: "bold", textDecoration: "none", borderBottom: "2px solid var(--accent-purple)", paddingBottom: "2px", transition: "color 0.3s ease" }, onMouseOver: (e) => e.target.style.color = "var(--accent-purple)", onMouseOut: (e) => e.target.style.color = "var(--text-1)", children: "+1 (915) 341-0376" })
            ] }) }),
            /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 500, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "bento-card", style: { textAlign: "center", padding: "3rem 2rem" }, children: [
              /* @__PURE__ */ jsx("div", { style: { fontSize: "3rem", marginBottom: "1rem" }, children: "🗓️" }),
              /* @__PURE__ */ jsx("h3", { className: "color-pop-blue", style: { marginBottom: "1rem", fontSize: "1.5rem" }, children: "Strategy Session" }),
              /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", marginBottom: "1.5rem" }, children: "Book a deep-dive technical discovery call." }),
              /* @__PURE__ */ jsx("a", { href: "#audit-form", style: { color: "var(--text-1)", fontWeight: "bold", textDecoration: "none", borderBottom: "2px solid var(--accent-blue)", paddingBottom: "2px", transition: "color 0.3s ease" }, onMouseOver: (e) => e.target.style.color = "var(--accent-blue)", onMouseOut: (e) => e.target.style.color = "var(--text-1)", children: "Schedule Now →" })
            ] }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("section", { id: "audit-form", className: "audit-cta-section", style: { padding: "6rem 1rem 8rem", background: "var(--secondary-dark)", borderTop: "1px solid var(--border-subtle)" }, children: /* @__PURE__ */ jsx("div", { className: "container", style: { maxWidth: "800px", margin: "0 auto" }, children: /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "audit-box aurora-bg", children: [
          /* @__PURE__ */ jsx("h2", { style: { fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1rem" }, children: "Send Us a Message" }),
          /* @__PURE__ */ jsxs("p", { style: { color: "var(--text-2)", marginBottom: "3rem", fontSize: "1.2rem" }, children: [
            "Fill out the form below to receive your ",
            /* @__PURE__ */ jsx("strong", { children: "Free Website & SEO Audit" }),
            " punch list."
          ] }),
          /* @__PURE__ */ jsx("div", { className: "form-wrapper", children: /* @__PURE__ */ jsx(ContactForm, {}) })
        ] }) }) }) })
      ] })
    ] })
  ] });
}
export {
  Contact as default
};
