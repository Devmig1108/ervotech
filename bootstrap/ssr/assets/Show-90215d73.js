import { j as jsxs, a as jsx } from "../ssr.js";
import { Link } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function BlogShow({ post }) {
  return /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h1", { children: post.title }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("strong", { children: "By:" }),
      " ",
      post.author,
      " | ",
      /* @__PURE__ */ jsx("strong", { children: "Date:" }),
      " ",
      new Date(post.published_at).toLocaleDateString()
    ] }),
    post.image && /* @__PURE__ */ jsx("img", { src: post.image, alt: post.title }),
    /* @__PURE__ */ jsx("p", { children: post.content }),
    /* @__PURE__ */ jsx(Link, { href: "/blog", children: "Back to Blog" })
  ] });
}
export {
  BlogShow as default
};
