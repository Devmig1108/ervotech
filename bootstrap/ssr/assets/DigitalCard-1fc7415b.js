import { j as jsxs, a as jsx } from "../ssr.js";
import "react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
const DigitalCard$1 = "";
const DigitalCard = () => {
  const trackInteraction = (eventName, label) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, {
        "event_category": "Digital Card Engagement",
        "event_label": label
      });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "modern-page-wrapper", children: [
    /* @__PURE__ */ jsxs("div", { className: "ambient-background", children: [
      /* @__PURE__ */ jsx("div", { className: "ambient-glow cyan-glow" }),
      /* @__PURE__ */ jsx("div", { className: "ambient-glow blue-glow" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bento-card", children: [
      /* @__PURE__ */ jsxs("div", { className: "bento-module header-module", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/Logo2.png",
            alt: "Ervotech",
            className: "brand-logo"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "profile-text", children: [
          /* @__PURE__ */ jsx("h1", { className: "name", children: "Miguel Flores" }),
          /* @__PURE__ */ jsx("p", { className: "title", children: "Owner Technical Director" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bento-module cta-module", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/download-vcard",
          download: "Miguel_Flores_Ervotech.vcf",
          className: "download-btn",
          onClick: () => trackInteraction("download_vcard", "Save to Contacts CTA"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "btn-content", children: [
              /* @__PURE__ */ jsx("span", { children: "Save to Contacts" }),
              /* @__PURE__ */ jsx("span", { className: "download-icon", children: "↓" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "animated-border" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "contact-grid", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "tel:9153410376",
            className: "bento-module contact-item",
            onClick: () => trackInteraction("click_phone", "Direct Line"),
            children: [
              /* @__PURE__ */ jsx("div", { className: "item-icon phone-icon" }),
              /* @__PURE__ */ jsxs("div", { className: "item-details", children: [
                /* @__PURE__ */ jsx("span", { className: "item-label", children: "Direct Line" }),
                /* @__PURE__ */ jsx("span", { className: "item-value", children: "915.341.0376" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "mailto:miguel@ervotechep.com",
            className: "bento-module contact-item",
            onClick: () => trackInteraction("click_email", "Email Address"),
            children: [
              /* @__PURE__ */ jsx("div", { className: "item-icon email-icon" }),
              /* @__PURE__ */ jsxs("div", { className: "item-details", children: [
                /* @__PURE__ */ jsx("span", { className: "item-label", children: "Email" }),
                /* @__PURE__ */ jsx("span", { className: "item-value truncate", children: "miguel@ervotechep.com" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://www.ervotechep.com",
            target: "_blank",
            rel: "noreferrer",
            className: "bento-module contact-item full-width",
            onClick: () => trackInteraction("click_website", "Website Link"),
            children: [
              /* @__PURE__ */ jsx("div", { className: "item-icon web-icon" }),
              /* @__PURE__ */ jsxs("div", { className: "item-details", children: [
                /* @__PURE__ */ jsx("span", { className: "item-label", children: "Website" }),
                /* @__PURE__ */ jsx("span", { className: "item-value", children: "ervotechep.com" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "location-badge", children: "El Paso, TX" })
            ]
          }
        )
      ] })
    ] })
  ] });
};
export {
  DigitalCard as default
};
