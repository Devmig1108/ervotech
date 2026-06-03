import { j as jsxs, a as jsx } from "../ssr.js";
import { Link } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function BlogIndex({ posts }) {
  return /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h1", { children: "Blog" }),
    posts.data.length > 0 ? posts.data.map((post) => /* @__PURE__ */ jsxs("div", { className: "post-card", children: [
      /* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsx(Link, { href: `/blog/${post.slug}`, children: post.title }) }),
      /* @__PURE__ */ jsx("p", { children: post.excerpt }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "By:" }),
        " ",
        post.author,
        " | ",
        /* @__PURE__ */ jsx("strong", { children: "Date:" }),
        " ",
        new Date(post.published_at).toLocaleDateString()
      ] })
    ] }, post.id)) : /* @__PURE__ */ jsx("p", { children: "No blog posts available." })
  ] });
}
export {
  BlogIndex as default
};
