import { j as jsxs, a as jsx } from "../ssr.js";
import { P as Public } from "./PublicLayout-8f05ad2f.js";
import { Head } from "@inertiajs/react";
import Fade from "react-reveal/Fade.js";
import { ParallaxBanner } from "react-scroll-parallax";
import { C as ContactForm } from "./ContactForm-660d6b69.js";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useRef, useEffect } from "react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "axios";
const useScrollTracking = (sectionName) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "section_viewed", {
              "section_name": sectionName,
              "event_category": "Engagement"
            });
          }
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [sectionName]);
  return sectionRef;
};
function Home({ auth }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ervotech",
    "image": "https://www.ervotechep.com/images/ervotech-logo-dark.png",
    "@id": "https://www.ervotechep.com/",
    "url": "https://www.ervotechep.com/",
    "telephone": "(915)341-0376",
    // Add your phone number here
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "El Paso",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "description": "Custom web design and local SEO services for El Paso businesses. We build fast, professional websites designed to get more leads and customers.",
    "priceRange": "$$$"
  };
  const portfolioClients = [
    {
      name: "Roofing Repair El Paso",
      url: "https://roofingrepairelpaso.com/",
      image: "/images/lone-star.png",
      description: "Hyper-local lead generation website for roofing contractors. Engineered to capture high-intent emergency repair traffic.",
      accent: "var(--accent-orange)"
    },
    {
      name: "The Hard Truth AF",
      url: "https://thehardtruthaf.com/",
      image: "/images/hard-truth.png",
      description: "Dynamic lifestyle brand and podcast platform. Built for high performance, content streaming, and brand authority.",
      accent: "var(--accent-red)"
    },
    {
      name: "C&A Dumpsters",
      url: "https://ca-dumpsters.com/",
      image: "/images/ca-dumpsters.png",
      // Just add this image to your public/images folder
      description: "Local dumpster rental and junk removal services. Highly optimized for local search and lead capture in the El Paso area.",
      accent: "var(--accent-green)"
    },
    {
      name: "Lawn Heros",
      url: "https://lawnheros.com/",
      image: "/images/lawn-heros.png",
      description: "Weed control and premium lawn care services. Features a clean, green-industry design built to convert local homeowners.",
      accent: "var(--accent-orange)"
    },
    {
      name: "Unique Roofing NM",
      url: "https://uniqueroofingnm.com/",
      image: "/images/unique-roofing.png",
      description: "Regional roofing contractor covering New Mexico. Professional, trust-building design tailored for commercial and residential clients.",
      accent: "var(--accent-gold)"
    },
    {
      name: "Daniell's Tree Removal",
      url: "https://daniellstreeremoval.com/",
      image: "/images/Daniells.png",
      // Make sure to upload this to public/images
      description: "Expert tree removal services with decades of experience. Serving El Paso resident and commercial clients since 1976.",
      accent: "var(--accent-green)"
      // Change this to match their brand (e.g., orange, purple, teal, pink)
    },
    {
      name: "Ervotech Innovation Sandbox",
      url: "https://ervotech.site/",
      image: "/images/sandbox.png",
      description: "Our dedicated development environment. This is where we stress-test experimental React components, push the limits of Laravel architectures, and pioneer new UI/UX designs before they go live.",
      accent: "var(--accent-teal)"
    }
  ];
  const bentoRef = useScrollTracking("viewed_bento_services");
  const performanceRef = useScrollTracking("viewed_performance_advantage");
  const portfolioRef = useScrollTracking("viewed_live_portfolio");
  const trackInteraction = (eventName, label) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, {
        "event_category": "Engagement",
        "event_label": label
      });
    }
  };
  return /* @__PURE__ */ jsxs(HelmetProvider, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.ervotechep.com/" }),
      /* @__PURE__ */ jsx("title", { children: "Top Web Design & Local SEO in El Paso | Ervotech" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Ervotech builds professional, custom websites and provides local SEO to help El Paso businesses get found on Google, attract more customers, and grow." }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(structuredData) })
    ] }),
    /* @__PURE__ */ jsxs(Public, { user: auth.user, children: [
      /* @__PURE__ */ jsx(Head, { title: "El Paso Web Design & SEO | Ervotech" }),
      /* @__PURE__ */ jsxs("main", { className: "home-main", children: [
        /* @__PURE__ */ jsxs(
          ParallaxBanner,
          {
            layers: [{ image: "/images/Office.webp", speed: -15 }],
            className: "hero-modern aurora-bg",
            style: { minHeight: "85vh", position: "relative", display: "flex", alignItems: "center" },
            children: [
              /* @__PURE__ */ jsx("div", { className: "hero-overlay" }),
              /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "1000px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 10 }, children: [
                /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 1e3, children: /* @__PURE__ */ jsx("span", { className: "badge-premium", style: { fontSize: "inherit", fontWeight: "600" }, children: "Top-Rated Technical Agency" }) }),
                /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 200, duration: 1e3, children: /* @__PURE__ */ jsxs("h1", { className: "display-heading", children: [
                  "El Paso Web Design ",
                  /* @__PURE__ */ jsx("br", {}),
                  /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "& Local SEO." })
                ] }) }),
                /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 400, duration: 1e3, children: /* @__PURE__ */ jsxs("p", { className: "hero-subtext", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Turn your website into a lead-generating machine." }),
                  " We engineer fast, professional React & Laravel digital assets that outrank your competitors and convert traffic into revenue."
                ] }) }),
                /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 600, duration: 1e3, children: /* @__PURE__ */ jsxs("div", { className: "hero-actions", children: [
                  /* @__PURE__ */ jsx("a", { href: "#audit", className: "btn-primary magnetic-btn", children: "Get Your Free Website Review" }),
                  /* @__PURE__ */ jsx("a", { href: "#bento-services", className: "btn-secondary", children: "See How We Help" })
                ] }) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsxs("section", { className: "client-strip", children: [
          /* @__PURE__ */ jsx("p", { children: "WE HELP SOUTHWEST BUSINESSES DOMINATE THEIR LOCAL MARKETS" }),
          /* @__PURE__ */ jsxs("div", { className: "logo-track", children: [
            /* @__PURE__ */ jsx("span", { children: "CUSTOM WEB DESIGN" }),
            /* @__PURE__ */ jsx("span", { children: "LOCAL SEO" }),
            /* @__PURE__ */ jsx("span", { children: "E-COMMERCE" }),
            /* @__PURE__ */ jsx("span", { children: "LEAD GENERATION" }),
            /* @__PURE__ */ jsx("span", { children: "BRANDING" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("section", { id: "bento-services", className: "bento-section", ref: bentoRef, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "section-header", children: [
            /* @__PURE__ */ jsx("h2", { children: "Custom Websites, Not Generic Templates." }),
            /* @__PURE__ */ jsx("p", { children: "Your business is unique. Your website shouldn't look like everyone else's, and it shouldn't be slow and hard to use." })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "bento-grid", children: [
            /* @__PURE__ */ jsx("div", { className: "bento-large", style: { gridColumn: "span 8", gridRow: "span 2" }, children: /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "bento-card aurora-bg-subtle", style: { height: "100%" }, children: [
              /* @__PURE__ */ jsxs("div", { className: "bento-content", children: [
                /* @__PURE__ */ jsx("h3", { className: "color-pop-purple", children: "Websites Built to Grow Your Business" }),
                /* @__PURE__ */ jsx("p", { children: "We build beautiful, easy-to-use websites from the ground up. Whether you need a simple local business page or a complex online store, we ensure it looks perfectly tailored to your brand." })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "bento-visual code-visual", children: /* @__PURE__ */ jsxs("code", { children: [
                '"business_status": "Online",',
                /* @__PURE__ */ jsx("br", {}),
                '"monthly_leads": "Growing",',
                /* @__PURE__ */ jsx("br", {}),
                '"website_speed": "Lightning Fast"'
              ] }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: "bento-medium", style: { gridColumn: "span 4" }, children: /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 200, duration: 800, children: /* @__PURE__ */ jsx("div", { className: "bento-card", style: { height: "100%" }, children: /* @__PURE__ */ jsxs("div", { className: "bento-content", children: [
              /* @__PURE__ */ jsx("h3", { className: "color-pop-orange", children: "Be Found on Google" }),
              /* @__PURE__ */ jsx("p", { children: "Having a website doesn't matter if no one can find it. We use proven Local SEO strategies to put your business in front of customers exactly when they are searching for your services." })
            ] }) }) }) }),
            /* @__PURE__ */ jsx("div", { className: "bento-medium", style: { gridColumn: "span 4" }, children: /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 400, duration: 800, children: /* @__PURE__ */ jsx("div", { className: "bento-card", style: { height: "100%" }, children: /* @__PURE__ */ jsxs("div", { className: "bento-content", children: [
              /* @__PURE__ */ jsx("h3", { className: "color-pop-teal", children: "Lightning Fast Speeds" }),
              /* @__PURE__ */ jsx("p", { children: "A slow website costs you customers. We use modern coding practices to ensure your site loads instantly on smartphones, tablets, and computers." })
            ] }) }) }) }),
            /* @__PURE__ */ jsx("div", { className: "bento-wide", style: { gridColumn: "span 8" }, children: /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 600, duration: 800, children: /* @__PURE__ */ jsx("div", { className: "bento-card", style: { height: "100%" }, children: /* @__PURE__ */ jsxs("div", { className: "bento-content", children: [
              /* @__PURE__ */ jsx("h3", { className: "color-pop-pink", children: "Your All-In-One Digital Partner" }),
              /* @__PURE__ */ jsx("p", { children: "You run your business; we handle the web. From designing your logo to managing your website and getting you more reviews, we act as your dedicated, in-house web team." })
            ] }) }) }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "performance-section", ref: performanceRef, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "1000px", margin: "0 auto", textAlign: "center" }, children: [
          /* @__PURE__ */ jsxs(Fade, { bottom: true, duration: 800, children: [
            /* @__PURE__ */ jsx("h2", { children: "The Ervotech Advantage" }),
            /* @__PURE__ */ jsx("p", { className: "subtext", style: { color: "var(--text-2)", fontSize: "1.2rem" }, children: "Why our websites outperform the local competition." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "comparison-grid", children: [
            /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 200, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "comparison-card bad", children: [
              /* @__PURE__ */ jsx("h4", { children: "Standard Template Websites" }),
              /* @__PURE__ */ jsxs("div", { className: "score", children: [
                "45",
                /* @__PURE__ */ jsx("span", { children: "/100" })
              ] }),
              /* @__PURE__ */ jsxs("ul", { children: [
                /* @__PURE__ */ jsx("li", { children: "Slow loading times on mobile" }),
                /* @__PURE__ */ jsx("li", { children: "Looks like everyone else's site" }),
                /* @__PURE__ */ jsx("li", { children: "Hard to update and breaks easily" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(Fade, { bottom: true, delay: 400, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "comparison-card good aurora-bg-subtle", children: [
              /* @__PURE__ */ jsx("h4", { children: "Ervotech Custom Websites" }),
              /* @__PURE__ */ jsxs("div", { className: "score text-gradient", children: [
                "99",
                /* @__PURE__ */ jsx("span", { children: "/100" })
              ] }),
              /* @__PURE__ */ jsxs("ul", { children: [
                /* @__PURE__ */ jsx("li", { children: "Loads instantly on any device" }),
                /* @__PURE__ */ jsx("li", { children: "Designed specifically for your brand" }),
                /* @__PURE__ */ jsx("li", { children: "Built specifically to capture more leads" })
              ] })
            ] }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "portfolio-section", ref: portfolioRef, children: /* @__PURE__ */ jsxs("div", { className: "container", style: { maxWidth: "1200px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "section-header", style: { marginBottom: "3rem" }, children: [
            /* @__PURE__ */ jsx("h2", { children: "Proudly Built for El Paso & Beyond" }),
            /* @__PURE__ */ jsx("p", { children: "Real results for real businesses. See how a professional online presence transforms bottom lines." })
          ] }) }),
          /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }, children: portfolioClients.map((client, index) => /* @__PURE__ */ jsx(Fade, { bottom: true, delay: index * 150, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "portfolio-item", style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
            /* @__PURE__ */ jsx("div", { style: { background: "var(--surface-1)", height: "220px", borderRadius: "12px 12px 0 0", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-2)", position: "relative", overflow: "hidden" }, children: client.image ? /* @__PURE__ */ jsx(
              "img",
              {
                src: client.image,
                alt: `${client.name} Website Design`,
                style: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
                loading: "lazy"
              }
            ) : /* @__PURE__ */ jsx("span", { style: { fontSize: "1.2rem", opacity: 0.5 }, children: client.name }) }),
            /* @__PURE__ */ jsxs("div", { style: { flexGrow: 1, padding: "1.8rem", background: "var(--secondary-dark)", borderRadius: "0 0 12px 12px", border: "1px solid var(--border-subtle)", borderTop: "none", display: "flex", flexDirection: "column" }, children: [
              /* @__PURE__ */ jsx("h3", { style: { color: client.accent, marginBottom: "0.75rem", fontSize: "1.4rem" }, children: client.name }),
              /* @__PURE__ */ jsx("p", { style: { fontSize: "1rem", color: "var(--text-2)", marginBottom: "1.5rem", fontFamily: "'Poppins', sans-serif", flexGrow: 1 }, children: client.description }),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: client.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "portfolio-outbound-link",
                  onClick: () => trackInteraction("view_live_portfolio", client.name),
                  children: [
                    "Visit Live Site",
                    /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                      /* @__PURE__ */ jsx("line", { x1: "7", y1: "17", x2: "17", y2: "7" }),
                      /* @__PURE__ */ jsx("polyline", { points: "7 7 17 7 17 17" })
                    ] })
                  ]
                }
              )
            ] })
          ] }) }, index)) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { id: "audit", className: "audit-cta-section", children: /* @__PURE__ */ jsx("div", { className: "container", style: { maxWidth: "800px", margin: "0 auto" }, children: /* @__PURE__ */ jsx(Fade, { bottom: true, duration: 800, children: /* @__PURE__ */ jsxs("div", { className: "audit-box aurora-bg", children: [
          /* @__PURE__ */ jsx("h2", { children: "Find out why your website isn't getting leads." }),
          /* @__PURE__ */ jsx("p", { style: { color: "var(--text-2)", marginBottom: "2rem" }, children: "Stop guessing. Drop your website address below, and we'll send you a free, easy-to-understand review showing exactly how to get more local customers." }),
          /* @__PURE__ */ jsx("div", { className: "form-wrapper", children: /* @__PURE__ */ jsx(ContactForm, {}) })
        ] }) }) }) })
      ] })
    ] })
  ] });
}
export {
  Home as default
};
