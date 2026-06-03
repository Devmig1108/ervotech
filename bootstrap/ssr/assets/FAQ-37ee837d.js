import { j as jsxs, a as jsx } from "../ssr.js";
import { P as Public } from "./PublicLayout-8f05ad2f.js";
import { Head } from "@inertiajs/react";
import "react-reveal/Fade.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "react-scroll-parallax";
function FAQ({ auth }) {
  return /* @__PURE__ */ jsxs(
    Public,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Ervotech" }),
        /* @__PURE__ */ jsx("section", { class: "hero contact-hero", children: /* @__PURE__ */ jsxs("div", { class: "container", children: [
          /* @__PURE__ */ jsx("h1", { children: "Get in Touch" }),
          /* @__PURE__ */ jsx("p", { children: "We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer." })
        ] }) }),
        /* @__PURE__ */ jsx("section", { class: "contact-form-section", children: /* @__PURE__ */ jsxs("div", { class: "container", children: [
          /* @__PURE__ */ jsx("h2", { children: "Send Us a Message" }),
          /* @__PURE__ */ jsxs("form", { class: "contact-form", children: [
            /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Your Name", required: true }),
            /* @__PURE__ */ jsx("input", { type: "email", placeholder: "Your Email", required: true }),
            /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Subject", required: true }),
            /* @__PURE__ */ jsx("textarea", { placeholder: "Your Message", rows: "5", required: true }),
            /* @__PURE__ */ jsx("button", { type: "submit", class: "primary-btn", children: "Send Message" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("section", { class: "contact-details", children: /* @__PURE__ */ jsxs("div", { class: "container", children: [
          /* @__PURE__ */ jsx("h2", { children: "Contact Information" }),
          /* @__PURE__ */ jsxs("div", { class: "contact-info-grid", children: [
            /* @__PURE__ */ jsxs("div", { class: "contact-info-item", children: [
              /* @__PURE__ */ jsx("i", { class: "fas fa-envelope" }),
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Email:" }),
                " ",
                /* @__PURE__ */ jsx("a", { href: "mailto:contact@ervotechep.com", children: "contact@ervotechep.com" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { class: "contact-info-item", children: [
              /* @__PURE__ */ jsx("i", { class: "fas fa-phone" }),
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Phone:" }),
                " ",
                /* @__PURE__ */ jsx("a", { href: "tel:+123456789", children: "+1 (234) 567-89" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { class: "contact-info-item", children: [
              /* @__PURE__ */ jsx("i", { class: "fas fa-map-marker-alt" }),
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Address:" }),
                " 123 Tech Street, Innovation City, CA"
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("section", { class: "contact-cta", children: /* @__PURE__ */ jsxs("div", { class: "container", children: [
          /* @__PURE__ */ jsx("h2", { children: "Looking for a Quick Answer?" }),
          /* @__PURE__ */ jsx("a", { href: "faq.html", class: "secondary-btn", children: "Check Our FAQ" })
        ] }) })
      ]
    }
  );
}
export {
  FAQ as default
};
