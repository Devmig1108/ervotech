import { j as jsxs, a as jsx } from "../ssr.js";
import { usePage, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
/* empty css                */import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function Index() {
  var _a;
  const { posts } = usePage().props;
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return /* @__PURE__ */ jsxs("div", { className: "admin-dashboard", children: [
    /* @__PURE__ */ jsxs("aside", { className: "sidebar", children: [
      /* @__PURE__ */ jsx("div", { className: "logo", children: /* @__PURE__ */ jsx("h1", { children: "ervotech blog" }) }),
      /* @__PURE__ */ jsxs("nav", { className: "admin-nav", children: [
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
        ] }),
        /* @__PURE__ */ jsxs(Link, { href: "/admin/category", children: [
          /* @__PURE__ */ jsx("i", { className: "icon-category" }),
          " Category"
        ] }),
        /* @__PURE__ */ jsxs(Link, { href: "/admin/analytics", children: [
          /* @__PURE__ */ jsx("i", { className: "icon-analytics" }),
          " Analytics"
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
        /* @__PURE__ */ jsxs("div", { className: "filters", children: [
          /* @__PURE__ */ jsxs("select", { children: [
            /* @__PURE__ */ jsx("option", { value: "popular", children: "Sort: Popular" }),
            /* @__PURE__ */ jsx("option", { value: "newest", children: "Newest" })
          ] }),
          /* @__PURE__ */ jsxs("select", { children: [
            /* @__PURE__ */ jsx("option", { value: "courses", children: "Courses" }),
            /* @__PURE__ */ jsx("option", { value: "blogs", children: "Blogs" })
          ] }),
          /* @__PURE__ */ jsxs("select", { children: [
            /* @__PURE__ */ jsx("option", { value: "react", children: "Category: React" }),
            /* @__PURE__ */ jsx("option", { value: "js", children: "Category: JavaScript" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "balance", children: [
            /* @__PURE__ */ jsx("span", { className: "icon-balance" }),
            " Balance: $55144"
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: toggleDarkMode,
              className: "dark-mode-toggle",
              children: darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "card-grid", children: (_a = posts == null ? void 0 : posts.data) == null ? void 0 : _a.map((post) => /* @__PURE__ */ jsxs("div", { className: "card", children: [
        post.image && /* @__PURE__ */ jsx(
          "img",
          {
            src: `/storage/${post.image}`,
            alt: post.title,
            className: "card-img"
          }
        ),
        /* @__PURE__ */ jsx("h3", { children: post.title }),
        /* @__PURE__ */ jsxs("p", { children: [
          post.content.substring(0, 100),
          "..."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card-footer", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "By: ",
            post.author || "Unknown Author"
          ] }),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: `/admin/posts/${post.slug}/edit`,
              className: "btn-edit",
              children: "Edit"
            }
          )
        ] })
      ] }, post.id)) })
    ] })
  ] });
}
export {
  Index as default
};
