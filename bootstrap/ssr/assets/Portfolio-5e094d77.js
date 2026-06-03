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
function Portfolio({ auth }) {
  const customProjects = [
    {
      title: "C&A Dumpsters",
      industry: "Home Services / Waste Management",
      location: "El Paso, TX",
      type: "Custom Web Development",
      impact: "+150% Phone Calls in 3 Months",
      desc: "Local dumpster rental and junk removal services. A complete custom build highly optimized for local search, designed to immediately capture high-intent traffic.",
      link: "https://ca-dumpsters.com/",
      image: "/images/ca-dumpsters.png",
      accent: "var(--accent-teal)"
    },
    {
      title: "Lawn Heros",
      industry: "Home Services / Landscaping",
      location: "El Paso, TX",
      type: "Custom Web Development",
      impact: "High Conversion Rate on Local Ads",
      desc: "Weed control and premium lawn care services. Features a clean, fast-loading industry design built to convert local homeowners smoothly and securely.",
      link: "https://lawnheros.com/",
      image: "/images/lawn-heros.png",
      accent: "var(--accent-blue)"
    },
    {
      title: "Roofing Repair El Paso",
      industry: "Home Services / Roofing",
      location: "El Paso, TX",
      type: "Custom HTML/CSS Overhaul",
      impact: "High Lead Turnover & Ad Performance",
      desc: "A massive technical overhaul replacing a restrictive corporate template with custom-engineered architecture. Built specifically to handle high-volume local ad traffic with zero friction.",
      link: "https://roofingrepairelpaso.com/",
      image: "/images/lone-star.png",
      accent: "var(--accent-orange)"
    },
    {
      title: "The Hard Truth",
      industry: "Author / Personal Branding",
      location: "El Paso, TX",
      type: "Custom Web Development",
      impact: "High-Visibility Launch Platform",
      desc: "A high-trust digital platform created for a major book launch. Prioritized clean UI and emotional resonance to serve as a central hub for author branding and sales.",
      link: "https://thehardtruthaf.com/",
      image: "/images/hard-truth.png",
      accent: "var(--accent-purple)"
    }
  ];
  const wordpressProjects = [
    {
      title: "Unique Roofing NM",
      status: "Completed",
      desc: "Professional WordPress build providing a robust digital footprint for a regional roofing service provider.",
      link: "https://uniqueroofingnm.com/",
      accent: "var(--accent-pink)"
    },
    {
      title: "Texas Healthcare Plans",
      status: "In Progress",
      desc: "Developing a comprehensive healthcare portal focused on accessibility and local service navigation in the El Paso region.",
      link: "https://texashealthcareplans.com/",
      accent: "var(--accent-teal)"
    },
    {
      title: "El Paso Fire & Police",
      status: "In Progress",
      desc: "Technical development for a local institutional site, ensuring community resources are mobile-responsive and reachable.",
      link: "https://elpasofireandpolice.org/wordpress/",
      accent: "var(--accent-blue)"
    }
  ];
  return /* @__PURE__ */ jsxs(HelmetProvider, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.ervotechep.com/work" }),
      /* @__PURE__ */ jsx("title", { children: "Portfolio | El Paso Custom Dev & WordPress | Ervotech" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "View Ervotech's diverse portfolio: from high-performance Laravel/React builds to professional WordPress implementations for El Paso businesses." })
    ] }),
    /* @__PURE__ */ jsxs(Public, { user: auth == null ? void 0 : auth.user, children: [
      /* @__PURE__ */ jsx(Head, { title: "Portfolio - Technical Proof of Concept" }),
      /* @__PURE__ */ jsxs("main", { className: "home-main", children: [
        /* @__PURE__ */ jsx("section", { className: "hero-modern aurora-bg", style: { minHeight: "60vh", display: "flex", alignItems: "center", paddingTop: "6rem", paddingBottom: "4rem" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 10 }, children: [
          /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 1e3, children: /* @__PURE__ */ jsx("span", { className: "badge-premium", style: { fontSize: "inherit", fontWeight: "600" }, children: "Engineering Across Platforms" }) }),
          /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 200, duration: 1e3, children: /* @__PURE__ */ jsxs("h1", { className: "display-heading", children: [
            "Our ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Work." })
          ] }) }),
          /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 400, duration: 1e3, children: /* @__PURE__ */ jsx("p", { className: "hero-subtext", children: "From sub-second custom applications to scalable WordPress platforms, we build the digital infrastructure that businesses use to grow." }) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "portfolio-section", style: { padding: "6rem 1rem", background: "var(--primary-dark)" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "section-header", style: { marginBottom: "4rem" }, children: [
            /* @__PURE__ */ jsx("h2", { children: "Custom High-Performance Builds" }),
            /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", fontSize: "1.2rem", textAlign: "center" }, children: "Elite speed, zero templates, full ownership." })
          ] }) }),
          /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2.5rem" }, children: customProjects.map((project, index) => /* @__PURE__ */ jsx(Fade, { bottom: true, delay: index * 150, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "portfolio-item", style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
            /* @__PURE__ */ jsx("div", { style: { background: "var(--surface-1)", height: "260px", borderRadius: "12px 12px 0 0", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-2)", position: "relative", overflow: "hidden" }, children: project.image ? /* @__PURE__ */ jsx(
              "img",
              {
                src: project.image,
                alt: `${project.title} Website Design`,
                style: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
                loading: "lazy"
              }
            ) : /* @__PURE__ */ jsx("span", { style: { fontSize: "1.2rem", opacity: 0.5 }, children: project.title }) }),
            /* @__PURE__ */ jsxs("div", { style: { flexGrow: 1, padding: "2rem", background: "var(--secondary-dark)", borderRadius: "0 0 12px 12px", border: "1px solid var(--border-subtle)", borderTop: "none", display: "flex", flexDirection: "column" }, children: [
              /* @__PURE__ */ jsx("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }, children: /* @__PURE__ */ jsx("span", { style: { color: project.accent, fontSize: "0.8rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }, children: project.industry }) }),
              /* @__PURE__ */ jsx("h3", { style: { color: "var(--text-1)", marginBottom: "0.5rem", fontSize: "1.6rem" }, children: project.title }),
              /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.9rem", color: "var(--text-2)", marginBottom: "1.5rem", fontWeight: "600" }, children: [
                project.location,
                " • ",
                project.type
              ] }),
              /* @__PURE__ */ jsx("p", { style: { fontSize: "1.05rem", color: "var(--text-1)", marginBottom: "2rem", flexGrow: 1, lineHeight: "1.7" }, children: project.desc }),
              /* @__PURE__ */ jsxs("div", { style: { borderTop: "1px solid var(--border-subtle)", paddingTop: "1.5rem", marginTop: "auto" }, children: [
                project.impact && /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.9rem", fontWeight: "bold", color: project.accent, marginBottom: "1rem" }, children: [
                  "Impact: ",
                  project.impact
                ] }),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: project.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: { color: "var(--text-1)", textDecoration: "none", fontWeight: "bold", display: "inline-flex", alignItems: "center", gap: "8px", transition: "color 0.3s ease" },
                    onMouseOver: (e) => e.target.style.color = project.accent,
                    onMouseOut: (e) => e.target.style.color = "var(--text-1)",
                    children: [
                      "View Live Project",
                      /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                        /* @__PURE__ */ jsx("line", { x1: "7", y1: "17", x2: "17", y2: "7" }),
                        /* @__PURE__ */ jsx("polyline", { points: "7 7 17 7 17 17" })
                      ] })
                    ]
                  }
                )
              ] })
            ] })
          ] }) }, index)) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "bento-section", style: { padding: "6rem 1rem", background: "var(--secondary-dark)" }, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "section-header", style: { marginBottom: "4rem" }, children: [
            /* @__PURE__ */ jsx("h2", { children: "WordPress Implementations" }),
            /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", fontSize: "1.2rem", textAlign: "center" }, children: "Robust, manageable CMS solutions." })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "bento-grid", style: { gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }, children: wordpressProjects.map((project, i) => /* @__PURE__ */ jsx(Fade, { bottom: true, delay: i * 150, duration: 800, children: /* @__PURE__ */ jsx("div", { className: "bento-card", style: { height: "100%", padding: "2.5rem" }, children: /* @__PURE__ */ jsxs("div", { className: "bento-content", style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }, children: [
              /* @__PURE__ */ jsx("h3", { style: { color: project.accent, fontSize: "1.4rem", margin: 0 }, children: project.title }),
              /* @__PURE__ */ jsx("span", { style: {
                fontSize: "0.75rem",
                padding: "4px 10px",
                borderRadius: "50px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                background: project.status === "Completed" ? "rgba(0, 245, 212, 0.15)" : "rgba(157, 78, 221, 0.15)",
                color: project.status === "Completed" ? "var(--accent-teal)" : "var(--accent-purple)",
                border: `1px solid ${project.status === "Completed" ? "var(--accent-teal)" : "var(--accent-purple)"}`
              }, children: project.status })
            ] }),
            /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", fontSize: "1.05rem", marginBottom: "2rem", flexGrow: 1 }, children: project.desc }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: project.link,
                target: "_blank",
                rel: "noopener noreferrer",
                style: { color: "var(--text-1)", textDecoration: "none", fontWeight: "bold", display: "inline-flex", alignItems: "center", gap: "8px", transition: "color 0.3s ease" },
                onMouseOver: (e) => e.target.style.color = project.accent,
                onMouseOut: (e) => e.target.style.color = "var(--text-1)",
                children: [
                  "Visit Site",
                  /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                    /* @__PURE__ */ jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
                    /* @__PURE__ */ jsx("polyline", { points: "12 5 19 12 12 19" })
                  ] })
                ]
              }
            )
          ] }) }) }, i)) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "audit-cta-section", style: { padding: "8rem 1rem", background: "var(--primary-dark)" }, children: /* @__PURE__ */ jsx("div", { className: "container", style: { maxWidth: "900px", margin: "0 auto" }, children: /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "audit-box aurora-bg-subtle", style: { textAlign: "left", display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center", justifyContent: "space-between" }, children: [
          /* @__PURE__ */ jsxs("div", { style: { flex: "1 1 400px" }, children: [
            /* @__PURE__ */ jsxs("h2", { style: { fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1rem", textAlign: "left", color: "var(--text-1)" }, children: [
              "The Ervotech ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Sandbox" })
            ] }),
            /* @__PURE__ */ jsxs("p", { style: { color: "var(--text-2)", fontSize: "1.2rem", lineHeight: "1.7" }, children: [
              "We utilize isolated environments like our ",
              /* @__PURE__ */ jsx("strong", { children: "ervotech.site" }),
              " and ",
              /* @__PURE__ */ jsx("strong", { children: "ervotech.xyz" }),
              " testing labs to benchmark sub-second load times, push Laravel architectures to the limit, and stress-test new UI components before they ever hit production."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: { flex: "1 1 250px", textAlign: "center" }, children: [
            /* @__PURE__ */ jsx("a", { href: "http://www.ervotech.site/", target: "_blank", rel: "noopener noreferrer", className: "btn-primary magnetic-btn", style: { padding: "1rem 2.5rem", fontSize: "1.1rem", width: "100%" }, children: "Enter the Sandbox" }),
            /* @__PURE__ */ jsx("a", { href: "http://www.ervotech.xyz/", target: "_blank", rel: "noopener noreferrer", className: "btn-secondary", style: { padding: "1rem 2.5rem", fontSize: "1.1rem", width: "100%", marginTop: "1rem" }, children: "View Staging Lab" })
          ] })
        ] }) }) }) })
      ] })
    ] })
  ] });
}
export {
  Portfolio as default
};
