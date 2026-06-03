import { j as jsxs, a as jsx } from "../ssr.js";
import "react";
import { usePage } from "@inertiajs/react";
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
function BlogShow({ auth }) {
  const { blog } = usePage().props;
  return /* @__PURE__ */ jsxs(HelmetProvider, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: `https://www.ervotechep.com/blog/${blog.slug}`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:title",
          content: `${blog.title} | Ervotech`
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: blog.excerpt || "Read the latest insights on high-performance web development and local SEO from Ervotech."
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: blog.image ? `https://www.ervotechep.com/storage/${blog.image}` : "https://www.ervotechep.com/default-thumbnail.jpg"
        }
      ),
      /* @__PURE__ */ jsxs("title", { children: [
        blog.title,
        " | Ervotech - El Paso Web Experts"
      ] })
    ] }),
    /* @__PURE__ */ jsx(Public, { user: auth == null ? void 0 : auth.user, children: /* @__PURE__ */ jsxs("main", { className: "home-main", children: [
      /* @__PURE__ */ jsx("section", { className: "hero-modern aurora-bg", style: { minHeight: "50vh", display: "flex", alignItems: "center", paddingTop: "8rem", paddingBottom: blog.image ? "8rem" : "4rem" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 10 }, children: [
        /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 1e3, children: /* @__PURE__ */ jsxs("div", { style: { marginBottom: "1.5rem", color: "var(--accent-teal)", fontSize: "0.95rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }, children: [
          new Date(blog.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
          /* @__PURE__ */ jsx("span", { style: { margin: "0 10px", color: "var(--border-subtle)" }, children: "|" }),
          "By ",
          blog.author || "Ervotech Editorial"
        ] }) }),
        /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 200, duration: 1e3, children: /* @__PURE__ */ jsx("h1", { className: "display-heading", style: { fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: "1.15", marginBottom: "0" }, children: blog.title }) })
      ] }) }),
      blog.image && /* @__PURE__ */ jsx("section", { style: { background: "var(--page-bg)", padding: "0 1rem", marginTop: "-6rem", position: "relative", zIndex: 20 }, children: /* @__PURE__ */ jsx("div", { className: "container", style: { maxWidth: "1000px", margin: "0 auto" }, children: /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 400, duration: 1e3, children: /* @__PURE__ */ jsx("div", { style: { borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.5)", background: "var(--surface-1)", border: "1px solid var(--border-subtle)" }, children: /* @__PURE__ */ jsx(
        "img",
        {
          src: `/storage/${blog.image}`,
          alt: blog.title,
          style: { width: "100%", height: "auto", display: "block", maxHeight: "600px", objectFit: "cover" }
        }
      ) }) }) }) }),
      /* @__PURE__ */ jsx("section", { style: { background: "var(--page-bg)", padding: "5rem 1rem 8rem" }, children: /* @__PURE__ */ jsx("div", { className: "container", style: { maxWidth: "800px", margin: "0 auto" }, children: /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "blog-content",
          style: { color: "var(--text-1)" },
          dangerouslySetInnerHTML: {
            __html: DOMPurify.sanitize(blog.content)
          }
        }
      ) }) }) }),
      /* @__PURE__ */ jsx("section", { id: "audit", className: "audit-cta-section", style: { padding: "4rem 1rem 8rem", borderTop: "1px solid var(--border-subtle)" }, children: /* @__PURE__ */ jsx("div", { className: "container", style: { maxWidth: "800px", margin: "0 auto" }, children: /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "audit-box aurora-bg-subtle", children: [
        /* @__PURE__ */ jsx("h2", { style: { fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1rem" }, children: "Apply These Strategies to Your Site." }),
        /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", marginBottom: "2rem" }, children: "Enjoyed the article? Find out how these concepts apply to your specific business. Drop your website address below for a free technical review." }),
        /* @__PURE__ */ jsx("div", { className: "form-wrapper", children: /* @__PURE__ */ jsx(ContactForm, {}) })
      ] }) }) }) })
    ] }) })
  ] });
}
export {
  BlogShow as default
};
