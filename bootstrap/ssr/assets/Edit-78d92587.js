import { j as jsxs, a as jsx } from "../ssr.js";
import { useState, useEffect } from "react";
import { Link, router } from "@inertiajs/react";
import { Editor } from "@tinymce/tinymce-react";
/* empty css                */import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function Edit({ blogPost }) {
  const [form, setForm] = useState({
    title: blogPost.title || "",
    slug: blogPost.slug || "",
    content: blogPost.content || "",
    image: null
  });
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(
    blogPost.image ? `/storage/${blogPost.image}` : null
  );
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    setSuccessMessage("");
  }, []);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleEditorChange = (content) => {
    setForm({ ...form, content });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === "image" && value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, value ?? "");
      }
    });
    router.post(`/admin/posts/${blogPost.slug}`, formData, {
      forceFormData: true,
      preserveScroll: true,
      onSuccess: () => {
        setSuccessMessage("Post published successfully! ✅");
        setTimeout(() => setSuccessMessage(""), 3e3);
      },
      onError: (errors2) => setErrors(errors2)
    });
  };
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
      /* @__PURE__ */ jsxs("div", { className: "edit-header", children: [
        /* @__PURE__ */ jsx("h2", { children: "Edit Blog Post" }),
        /* @__PURE__ */ jsx(Link, { href: "/admin/posts", className: "btn-back", children: "Back to Posts" })
      ] }),
      successMessage && /* @__PURE__ */ jsx("div", { className: "success-banner", children: successMessage }),
      /* @__PURE__ */ jsx("div", { className: "edit-container", children: /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "edit-form",
          encType: "multipart/form-data",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "title", children: "Title" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  id: "title",
                  name: "title",
                  value: form.title,
                  onChange: handleChange,
                  className: errors.title ? "input-error" : ""
                }
              ),
              errors.title && /* @__PURE__ */ jsx("p", { className: "error", children: errors.title })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "slug", children: "Slug" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  id: "slug",
                  name: "slug",
                  value: form.slug,
                  onChange: handleChange,
                  className: errors.slug ? "input-error" : ""
                }
              ),
              errors.slug && /* @__PURE__ */ jsx("p", { className: "error", children: errors.slug })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "image", children: "Featured Image" }),
              preview && /* @__PURE__ */ jsx(
                "img",
                {
                  src: preview,
                  alt: "Preview",
                  className: "preview-img"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "file",
                  id: "image",
                  name: "image",
                  accept: "image/*",
                  onChange: handleImageChange
                }
              ),
              errors.image && /* @__PURE__ */ jsx("p", { className: "error", children: errors.image })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "content", children: "Content" }),
              /* @__PURE__ */ jsx(
                Editor,
                {
                  apiKey: {}.VITE_TINYMCE_API_KEY || "jfqng7zzpawp6enj8vr7smg353mb915mz2h2ep4m64l2t26l",
                  value: form.content,
                  init: {
                    plugins: [
                      // Core editing features
                      "anchor",
                      "autolink",
                      "charmap",
                      "codesample",
                      "emoticons",
                      "image",
                      "link",
                      "lists",
                      "media",
                      "searchreplace",
                      "table",
                      "visualblocks",
                      "wordcount",
                      // Your account includes a free trial of TinyMCE premium features
                      // Try the most popular premium features until Mar 25, 2025:
                      "checklist",
                      "mediaembed",
                      "casechange",
                      "export",
                      "formatpainter",
                      "pageembed",
                      "a11ychecker",
                      "tinymcespellchecker",
                      "permanentpen",
                      "powerpaste",
                      "advtable",
                      "advcode",
                      "editimage",
                      "advtemplate",
                      "ai",
                      "mentions",
                      "tinycomments",
                      "tableofcontents",
                      "footnotes",
                      "mergetags",
                      "autocorrect",
                      "typography",
                      "inlinecss",
                      "markdown",
                      "importword",
                      "exportword",
                      "exportpdf"
                    ],
                    toolbar: "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                    tinycomments_mode: "embedded",
                    tinycomments_author: "Author name",
                    paste_data_images: "true",
                    mergetags_list: [
                      {
                        value: "First.Name",
                        title: "First Name"
                      },
                      { value: "Email", title: "Email" }
                    ],
                    ai_request: (request, respondWith) => respondWith.string(
                      () => Promise.reject(
                        "See docs to implement AI Assistant"
                      )
                    )
                  },
                  onEditorChange: handleEditorChange
                }
              ),
              errors.content && /* @__PURE__ */ jsx("p", { className: "error", children: errors.content })
            ] }),
            /* @__PURE__ */ jsx("button", { type: "submit", className: "btn-save", children: "Save Changes" })
          ]
        }
      ) })
    ] })
  ] });
}
export {
  Edit as default
};
