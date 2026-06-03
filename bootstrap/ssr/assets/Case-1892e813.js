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
function Case({ auth }) {
  return /* @__PURE__ */ jsxs(
    Public,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Ervotech" }),
        /* @__PURE__ */ jsx("section", { class: "hero case-hero", children: /* @__PURE__ */ jsxs("div", { class: "container", children: [
          /* @__PURE__ */ jsx("h1", { children: "Success Stories" }),
          /* @__PURE__ */ jsx("p", { children: "Explore how we've helped businesses achieve their digital goals." })
        ] }) }),
        /* @__PURE__ */ jsx("section", { class: "case-studies", children: /* @__PURE__ */ jsxs("div", { class: "container", children: [
          /* @__PURE__ */ jsx("h2", { children: "Our Case Studies" }),
          /* @__PURE__ */ jsx("p", { children: "Check back soon for detailed success stories." })
        ] }) })
      ]
    }
  );
}
export {
  Case as default
};
