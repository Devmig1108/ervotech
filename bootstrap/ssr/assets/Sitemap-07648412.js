import { j as jsxs, a as jsx } from "../ssr.js";
import { P as Public } from "./PublicLayout-8f05ad2f.js";
import { Head } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "react-reveal/Fade.js";
import "react-scroll-parallax";
function Sitemap({ auth }) {
  return /* @__PURE__ */ jsxs(
    Public,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Site Map" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Site Map" }),
        /* @__PURE__ */ jsx("section", { className: "sitemap-hero", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsx("h1", { children: "Site Map" }),
          /* @__PURE__ */ jsx("p", { children: "Explore all the key sections of our website from one convenient place." })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "sitemap-links", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsx("h2", { children: "Main Sections" }),
          /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/about", children: "About Us" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/services", children: "Services" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/contact", children: "Contact Us" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/web-design-el-paso", children: "Web Design El Paso" }) })
          ] }),
          /* @__PURE__ */ jsx("h2", { children: "Services" }),
          /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/services#website-migration", children: "Website Migration" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/services#web-design", children: "Web Design & Development" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/services#software-development", children: "Software Development" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/services#content-strategy", children: "Content Strategy" }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "sitemap-cta", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsx("h2", { children: "Need Help Navigating?" }),
          /* @__PURE__ */ jsx("p", { children: "If you're having trouble finding what you're looking for, feel free to reach out to us." }),
          /* @__PURE__ */ jsx("a", { href: "/contact", className: "primary-btn", children: "Contact Us" })
        ] }) })
      ]
    }
  );
}
export {
  Sitemap as default
};
