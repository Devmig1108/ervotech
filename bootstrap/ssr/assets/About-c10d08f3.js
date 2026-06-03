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
function About({ auth }) {
  return /* @__PURE__ */ jsxs(HelmetProvider, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.ervotechep.com/about" }),
      /* @__PURE__ */ jsx("title", { children: "About Ervotech | El Paso Web Design & SEO Experts" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Discover Ervotech: El Paso's trusted local partners in custom web design and SEO. We build fast, professional websites that help local businesses grow." })
    ] }),
    /* @__PURE__ */ jsxs(
      Public,
      {
        user: auth.user,
        header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "About Ervotech - El Paso Web Design Experts" }),
        children: [
          /* @__PURE__ */ jsx(Head, { title: "About Ervotech - El Paso Web Design Experts" }),
          /* @__PURE__ */ jsxs("main", { className: "home-main", children: [
            /* @__PURE__ */ jsx("section", { className: "hero-modern aurora-bg", style: { minHeight: "60vh", display: "flex", alignItems: "center", paddingTop: "6rem", paddingBottom: "4rem" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 10 }, children: [
              /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 1e3, children: /* @__PURE__ */ jsx("span", { className: "badge-premium", style: { fontSize: "inherit", fontWeight: "600" }, children: "Your Local Digital Partners" }) }),
              /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 200, duration: 1e3, children: /* @__PURE__ */ jsxs("h1", { className: "display-heading", children: [
                "We Build Websites That ",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Build Your Business." })
              ] }) }),
              /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 400, duration: 1e3, children: /* @__PURE__ */ jsx("p", { className: "hero-subtext", children: "Ervotech bridges the gap between high-end digital design and the everyday needs of local El Paso businesses. No jargon, just results." }) })
            ] }) }),
            /* @__PURE__ */ jsx("section", { className: "about-story", style: { background: "var(--primary-dark)", padding: "6rem 1rem" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
              /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsx("div", { className: "section-header", style: { marginBottom: "4rem", textAlign: "center" }, children: /* @__PURE__ */ jsx("h2", { children: "Rooted in Performance" }) }) }),
              /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }, children: [
                /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 100, duration: 800, children: /* @__PURE__ */ jsx("div", { className: "bento-card", style: { height: "100%", padding: "2.5rem" }, children: /* @__PURE__ */ jsxs("div", { className: "bento-content", children: [
                  /* @__PURE__ */ jsx("div", { style: { fontSize: "2rem", marginBottom: "1rem" }, children: "📍" }),
                  /* @__PURE__ */ jsx("h3", { className: "color-pop-teal", style: { fontSize: "1.5rem", marginBottom: "1rem" }, children: "Our Roots" }),
                  /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", fontSize: "1.1rem" }, children: "Founded in El Paso, we created Ervotech to give local businesses access to the same high-quality, professional websites usually reserved for massive corporations." })
                ] }) }) }),
                /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 300, duration: 800, children: /* @__PURE__ */ jsx("div", { className: "bento-card", style: { height: "100%", padding: "2.5rem" }, children: /* @__PURE__ */ jsxs("div", { className: "bento-content", children: [
                  /* @__PURE__ */ jsx("div", { style: { fontSize: "2rem", marginBottom: "1rem" }, children: "💡" }),
                  /* @__PURE__ */ jsx("h3", { className: "color-pop-purple", style: { fontSize: "1.5rem", marginBottom: "1rem" }, children: "Custom Solutions" }),
                  /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", fontSize: "1.1rem" }, children: "We don't rely on slow, pre-made templates. We custom-build every website so it loads instantly on mobile phones and perfectly matches your unique brand." })
                ] }) }) }),
                /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 500, duration: 800, children: /* @__PURE__ */ jsx("div", { className: "bento-card", style: { height: "100%", padding: "2.5rem" }, children: /* @__PURE__ */ jsxs("div", { className: "bento-content", children: [
                  /* @__PURE__ */ jsx("div", { style: { fontSize: "2rem", marginBottom: "1rem" }, children: "🚀" }),
                  /* @__PURE__ */ jsx("h3", { className: "color-pop-orange", style: { fontSize: "1.5rem", marginBottom: "1rem" }, children: "Driven by Results" }),
                  /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", fontSize: "1.1rem" }, children: "Our commitment is simple: We build digital tools that help you rank higher on Google, get more phone calls, and grow your revenue." })
                ] }) }) })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("section", { className: "performance-section", style: { background: "var(--secondary-dark)", padding: "8rem 1rem" }, children: /* @__PURE__ */ jsx("div", { className: "container text-center", style: { maxWidth: "900px", margin: "0 auto" }, children: /* @__PURE__ */ jsxs(Fade, { bottom: true, duration: 800, children: [
              /* @__PURE__ */ jsx("h2", { className: "text-gradient", style: { margin: "0 0 2rem 0" }, children: "Our Mission" }),
              /* @__PURE__ */ jsxs("p", { style: { color: "var(--text-1)", fontSize: "1.4rem", lineHeight: "1.8", margin: "0 auto 3rem" }, children: [
                "At Ervotech, our mission is to eliminate the digital friction that holds El Paso businesses back. By delivering lightning-fast websites and proven SEO strategies, we ensure local services in areas from ",
                /* @__PURE__ */ jsx("strong", { children: "Horizon City" }),
                " to the ",
                /* @__PURE__ */ jsx("strong", { children: "Upper Valley" }),
                " are found first."
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "logo-track", style: { fontSize: "0.9rem", color: "var(--accent-teal)" }, children: [
                /* @__PURE__ */ jsx("span", { children: "WEST SIDE" }),
                /* @__PURE__ */ jsx("span", { children: "EAST SIDE" }),
                /* @__PURE__ */ jsx("span", { children: "CENTRAL" }),
                /* @__PURE__ */ jsx("span", { children: "NORTHEAST" }),
                /* @__PURE__ */ jsx("span", { children: "HORIZON CITY" })
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsx("section", { className: "audit-cta-section", style: { padding: "8rem 1rem", background: "var(--primary-dark)" }, children: /* @__PURE__ */ jsx("div", { className: "container", style: { maxWidth: "800px", margin: "0 auto" }, children: /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "audit-box aurora-bg-subtle", children: [
              /* @__PURE__ */ jsx("h2", { style: { fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1rem" }, children: "Partner with El Paso's Web Experts" }),
              /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", marginBottom: "3rem", fontSize: "1.2rem" }, children: "Stop guessing what works. Start using professional, custom web solutions that produce measurable leads." }),
              /* @__PURE__ */ jsx("a", { href: "/contact", className: "btn-primary magnetic-btn", style: { padding: "1rem 2.5rem", fontSize: "1.1rem" }, children: "Let's Talk About Your Project" })
            ] }) }) }) })
          ] })
        ]
      }
    )
  ] });
}
export {
  About as default
};
