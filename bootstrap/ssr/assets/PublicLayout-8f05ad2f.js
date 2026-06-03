import { j as jsxs, a as jsx, F as Fragment } from "../ssr.js";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade.js";
import { ParallaxProvider } from "react-scroll-parallax";
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { children: [
    /* @__PURE__ */ jsxs("div", { className: "container footer-container", children: [
      /* @__PURE__ */ jsxs("div", { className: "footer-links", children: [
        /* @__PURE__ */ jsx("h4", { children: "Quick Links" }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "about", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "services", children: "Services" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "contact", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-contact", children: [
        /* @__PURE__ */ jsx("h4", { children: "Contact Us" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Email: ",
          /* @__PURE__ */ jsx("a", { href: "mailto:contact@ervotechep.com", children: "contact@ervotechep.com" })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Phone: ",
          /* @__PURE__ */ jsx("a", { href: "tel:+9153410376", children: "+1 (915) 341-0376" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-cta", children: [
        /* @__PURE__ */ jsxs(Link, { href: "/", children: [
          /* @__PURE__ */ jsx("img", { className: "cta-logo light-logo", src: "/images/ervotech-logo.png", alt: "Logo" }),
          /* @__PURE__ */ jsx("img", { className: "cta-logo dark-logo", src: "/images/ervotech-logo-dark.png", alt: "Logo" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Ready to take your digital presence to the next level? Contact us today and let's make it happen!" }),
        /* @__PURE__ */ jsx("a", { href: "/contact", className: "cta-button", children: "Get in Touch" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "footer-bottom", children: /* @__PURE__ */ jsx("p", { children: "© 2026 Ervotech. All Rights Reserved." }) })
  ] });
}
function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "dark" ? "light" : "dark");
  };
  return /* @__PURE__ */ jsx(Fade, { children: /* @__PURE__ */ jsx(
    "button",
    {
      onClick: toggleTheme,
      className: "theme-toggle-btn",
      "aria-label": "Toggle Dark/Light Theme",
      children: theme === "dark" ? "🌞" : "🌜"
    }
  ) });
}
function Nav() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuActive((prevState) => !prevState);
  };
  return /* @__PURE__ */ jsx("header", { className: "navbar", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "logo", children: /* @__PURE__ */ jsxs(Link, { href: "/", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "light-logo",
          src: "/images/ervotech-logo.png",
          alt: "Logo"
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "dark-logo",
          src: "/images/ervotech-logo-dark.png",
          alt: "Logo"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { className: `nav-links ${isMenuActive ? "active" : ""}`, children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Home" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/about", children: "About" }) }),
      /* @__PURE__ */ jsxs(
        "li",
        {
          className: "dropdown",
          onMouseEnter: () => setIsServicesDropdownOpen(true),
          onMouseLeave: () => setIsServicesDropdownOpen(false),
          children: [
            /* @__PURE__ */ jsx("span", { className: "dropdown-toggle", children: "Our Services ▾" }),
            /* @__PURE__ */ jsxs("ul", { className: `dropdown-menu ${isServicesDropdownOpen ? "open" : ""}`, children: [
              /* @__PURE__ */ jsx(Link, { href: "/services", children: /* @__PURE__ */ jsx("li", { children: "All Services" }) }),
              /* @__PURE__ */ jsx(Link, { href: "/web-consulting-el-paso", children: /* @__PURE__ */ jsx("li", { children: "Consulting" }) }),
              /* @__PURE__ */ jsx(Link, { href: "/web-design-el-paso", children: /* @__PURE__ */ jsx("li", { children: "Web Design in El Paso" }) }),
              /* @__PURE__ */ jsx(Link, { href: "/portfolio", children: /* @__PURE__ */ jsx("li", { children: "Our Work" }) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/blog", children: "Blog" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/contact", children: "Contact" }) }),
      /* @__PURE__ */ jsx(ThemeToggle, {})
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "nav-actions", children: [
      /* @__PURE__ */ jsxs("a", { href: "tel:+9153410376", className: "nav-btn call-btn", children: [
        /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faPhone }),
        " (915)341-0376"
      ] }),
      /* @__PURE__ */ jsxs("a", { href: "#contact", className: "nav-btn quote-btn", children: [
        /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faEnvelope }),
        " Get A Quote"
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "menu-toggle",
        onClick: handleMenuToggle,
        "aria-label": "Toggle Navigation",
        children: "☰"
      }
    )
  ] }) });
}
function Public({ children }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.dataset.theme = savedTheme;
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(ParallaxProvider, { children: /* @__PURE__ */ jsx("div", { className: "sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg", children }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Public as P
};
