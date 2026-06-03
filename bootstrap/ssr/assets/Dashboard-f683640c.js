import { j as jsxs, a as jsx } from "../ssr.js";
import "react";
import { usePage, Link } from "@inertiajs/react";
/* empty css                */import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function AdminDashboard() {
  const { posts } = usePage().props;
  return /* @__PURE__ */ jsxs("div", { className: "admin-dashboard", children: [
    /* @__PURE__ */ jsxs("div", { className: "sidebar", children: [
      /* @__PURE__ */ jsx("div", { className: "logo", children: /* @__PURE__ */ jsx("h1", { children: "Ervotech" }) }),
      /* @__PURE__ */ jsxs("nav", { children: [
        /* @__PURE__ */ jsxs(Link, { href: "/admin/dashboard", className: "active", children: [
          /* @__PURE__ */ jsx("i", { className: "icon-dashboard" }),
          " Dashboard"
        ] }),
        /* @__PURE__ */ jsxs(Link, { href: "/admin/posts/create", children: [
          /* @__PURE__ */ jsx("i", { className: "icon-new-post" }),
          " New Post"
        ] }),
        /* @__PURE__ */ jsxs(Link, { href: "/admin/posts", children: [
          /* @__PURE__ */ jsx("i", { className: "icon-my-posts" }),
          " My Posts"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "support", children: [
        /* @__PURE__ */ jsx("i", { className: "icon-support" }),
        " Support"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "main-content", children: [
      /* @__PURE__ */ jsxs("div", { className: "top-nav", children: [
        /* @__PURE__ */ jsx("h2", { children: "Today Trending" }),
        /* @__PURE__ */ jsxs("div", { className: "actions", children: [
          /* @__PURE__ */ jsxs("div", { className: "balance", children: [
            /* @__PURE__ */ jsx("span", { className: "icon-balance" }),
            " Balance: $55144"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "filters", children: [
            /* @__PURE__ */ jsxs("select", { children: [
              /* @__PURE__ */ jsx("option", { value: "popular", children: "Sort: Popular" }),
              /* @__PURE__ */ jsx("option", { value: "newest", children: "Newest" })
            ] }),
            /* @__PURE__ */ jsxs("select", { children: [
              /* @__PURE__ */ jsx("option", { value: "react", children: "Category: React" }),
              /* @__PURE__ */ jsx("option", { value: "js", children: "Category: JavaScript" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "card-grid", children: posts && posts.map((post) => /* @__PURE__ */ jsxs("div", { className: "blog-card", children: [
        /* @__PURE__ */ jsx("img", { src: post.image, alt: post.title, className: "card-img" }),
        /* @__PURE__ */ jsx("h3", { children: post.title }),
        /* @__PURE__ */ jsx("p", { children: post.excerpt || "No description provided." }),
        /* @__PURE__ */ jsxs("div", { className: "card-footer", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "By: ",
            post.author
          ] }),
          /* @__PURE__ */ jsx(Link, { href: `/admin/posts/${post.slug}/edit`, className: "btn-edit", children: "Edit" })
        ] })
      ] }, post.id)) })
    ] })
  ] });
}
export {
  AdminDashboard as default
};
