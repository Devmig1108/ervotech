import { j as jsxs, a as jsx } from "../ssr.js";
import "react";
import { usePage, Link } from "@inertiajs/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { P as Public } from "./PublicLayout-8f05ad2f.js";
import DOMPurify from "dompurify";
import Fade from "react-reveal/Fade.js";
import { C as ContactForm } from "./ContactForm-660d6b69.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "react-scroll-parallax";
import "axios";
function BlogIndex({ auth }) {
  const { blogs } = usePage().props;
  return /* @__PURE__ */ jsxs(HelmetProvider, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.ervotechep.com/blog/" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:title",
          content: "Insights & Strategy | Ervotech"
        }
      ),
      /* @__PURE__ */ jsx("title", { children: "Web Design & SEO Blog | Ervotech" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Deep dives into high-performance web development, local SEO strategies, and digital growth for El Paso businesses." })
    ] }),
    /* @__PURE__ */ jsx(Public, { user: auth == null ? void 0 : auth.user, children: /* @__PURE__ */ jsxs("main", { className: "home-main", children: [
      /* @__PURE__ */ jsx("section", { className: "hero-modern aurora-bg", style: { minHeight: "60vh", display: "flex", alignItems: "center", paddingTop: "6rem", paddingBottom: "4rem" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 10 }, children: [
        /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 1e3, children: /* @__PURE__ */ jsx("span", { className: "badge-premium", style: { fontSize: "inherit", fontWeight: "600" }, children: "Insights & Strategy" }) }),
        /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 200, duration: 1e3, children: /* @__PURE__ */ jsxs("h1", { className: "display-heading", children: [
          "The Ervotech ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Journal." })
        ] }) }),
        /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 400, duration: 1e3, children: /* @__PURE__ */ jsx("p", { className: "hero-subtext", children: "Deep dives into high-performance web development, local SEO strategies, and digital growth techniques for El Paso businesses." }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { style: { padding: "4rem 1rem 8rem", background: "var(--primary-dark)" }, children: /* @__PURE__ */ jsx("div", { className: "container", style: { maxWidth: "1200px", margin: "0 auto" }, children: /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }, children: blogs == null ? void 0 : blogs.map((blog, index) => /* @__PURE__ */ jsx(Fade, { bottom: true, delay: index % 3 * 150, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "portfolio-item", style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
        /* @__PURE__ */ jsx("div", { style: { background: "var(--surface-1)", height: "240px", borderRadius: "12px 12px 0 0", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-2)", position: "relative", overflow: "hidden" }, children: blog.image ? /* @__PURE__ */ jsx(Link, { href: `/blog/${blog.slug}`, style: { display: "block", width: "100%", height: "100%" }, children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/storage/" + blog.image,
            alt: blog.title,
            style: { width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease" },
            loading: "lazy",
            onMouseOver: (e) => e.target.style.transform = "scale(1.05)",
            onMouseOut: (e) => e.target.style.transform = "scale(1)"
          }
        ) }) : /* @__PURE__ */ jsx("span", { style: { fontSize: "1.2rem", opacity: 0.5 }, children: "No Image" }) }),
        /* @__PURE__ */ jsxs("div", { style: { flexGrow: 1, padding: "2rem", background: "var(--secondary-dark)", borderRadius: "0 0 12px 12px", border: "1px solid var(--border-subtle)", borderTop: "none", display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ jsx("div", { style: { marginBottom: "1rem", color: "var(--accent-teal)", fontSize: "0.85rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }, children: new Date(blog.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) }),
          /* @__PURE__ */ jsx("h2", { style: { fontSize: "1.5rem", marginBottom: "1rem", lineHeight: "1.4", textAlign: "left" }, children: /* @__PURE__ */ jsx(
            Link,
            {
              href: `/blog/${blog.slug}`,
              style: { color: "var(--text-1)", textDecoration: "none", transition: "color 0.3s ease" },
              onMouseOver: (e) => e.target.style.color = "var(--accent-blue)",
              onMouseOut: (e) => e.target.style.color = "var(--text-1)",
              children: blog.title
            }
          ) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              style: { fontSize: "1.05rem", color: "var(--text-2)", marginBottom: "2rem", fontFamily: "'Poppins', sans-serif", flexGrow: 1, lineHeight: "1.7" },
              dangerouslySetInnerHTML: {
                __html: DOMPurify.sanitize(
                  blog.content.slice(0, 140) + "..."
                )
              }
            }
          ),
          /* @__PURE__ */ jsx("div", { style: { borderTop: "1px solid var(--border-subtle)", paddingTop: "1.5rem", marginTop: "auto" }, children: /* @__PURE__ */ jsxs(
            Link,
            {
              href: `/blog/${blog.slug}`,
              style: { color: "var(--accent-teal)", textDecoration: "none", fontWeight: "bold", display: "inline-flex", alignItems: "center", gap: "8px", transition: "color 0.3s ease" },
              onMouseOver: (e) => e.target.style.color = "var(--accent-purple)",
              onMouseOut: (e) => e.target.style.color = "var(--accent-teal)",
              children: [
                "Read Article",
                /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                  /* @__PURE__ */ jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
                  /* @__PURE__ */ jsx("polyline", { points: "12 5 19 12 12 19" })
                ] })
              ]
            }
          ) })
        ] })
      ] }) }, blog.id)) }) }) }),
      /* @__PURE__ */ jsx("section", { id: "audit", className: "audit-cta-section", style: { padding: "6rem 1rem 8rem", background: "var(--secondary-dark)" }, children: /* @__PURE__ */ jsx("div", { className: "container", style: { maxWidth: "800px", margin: "0 auto" }, children: /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "audit-box aurora-bg", children: [
        /* @__PURE__ */ jsx("h2", { style: { fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1rem" }, children: "Apply These Strategies to Your Site." }),
        /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", marginBottom: "2rem" }, children: "Stop guessing what works. Drop your website address below, and we'll send you a free technical review showing exactly how to capture more local traffic." }),
        /* @__PURE__ */ jsx("div", { className: "form-wrapper", children: /* @__PURE__ */ jsx(ContactForm, {}) })
      ] }) }) }) })
    ] }) })
  ] });
}
export {
  BlogIndex as default
};
