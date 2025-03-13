import React, { useState, useEffect } from "react";
import { Link, router } from "@inertiajs/react";
import { Editor } from "@tinymce/tinymce-react";
import "../../../../css/admin.css";

export default function Edit({ blogPost }) {
    const [form, setForm] = useState({
        title: blogPost.title || "",
        slug: blogPost.slug || "",
        content: blogPost.content || "",
        image: null,
    });

    const [errors, setErrors] = useState({});
    const [preview, setPreview] = useState(
        blogPost.image ? `/storage/${blogPost.image}` : null
    );
    const [successMessage, setSuccessMessage] = useState(""); // ✅ Success message state

    useEffect(() => {
        setSuccessMessage(""); // Reset success message when component loads
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

            // Preview the selected image
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
                setTimeout(() => setSuccessMessage(""), 3000); // Hide after 3 sec // Clear form
            },
            onError: (errors) => setErrors(errors),
        });
    };

    return (
        <div className="admin-dashboard">
            <aside className="sidebar">
                <div className="logo">
                    <h1>ervotech blog</h1>
                </div>
                <nav>
                    <Link href="/admin/dashboard">Dashboard</Link>
                    <Link href="/admin/posts/create">New Post</Link>
                    <Link href="/admin/posts" className="active">
                        My Posts
                    </Link>
                </nav>
            </aside>

            <main className="main-content">
                <div className="edit-header">
                    <h2>Edit Blog Post</h2>
                    <Link href="/admin/posts" className="btn-back">
                        Back to Posts
                    </Link>
                </div>

                {/* ✅ Success Banner */}
                {successMessage && (
                    <div className="success-banner">{successMessage}</div>
                )}

                <div className="edit-container">
                    <form
                        onSubmit={handleSubmit}
                        className="edit-form"
                        encType="multipart/form-data"
                    >
                        {/* Title Input */}
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                className={errors.title ? "input-error" : ""}
                            />
                            {errors.title && (
                                <p className="error">{errors.title}</p>
                            )}
                        </div>

                        {/* Slug Input */}
                        <div className="form-group">
                            <label htmlFor="slug">Slug</label>
                            <input
                                type="text"
                                id="slug"
                                name="slug"
                                value={form.slug}
                                onChange={handleChange}
                                className={errors.slug ? "input-error" : ""}
                            />
                            {errors.slug && (
                                <p className="error">{errors.slug}</p>
                            )}
                        </div>

                        {/* Image Upload */}
                        <div className="form-group">
                            <label htmlFor="image">Featured Image</label>
                            {preview && (
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="preview-img"
                                />
                            )}
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            {errors.image && (
                                <p className="error">{errors.image}</p>
                            )}
                        </div>

                        {/* TinyMCE Editor */}
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <Editor
                                apiKey={import.meta.env.VITE_TINYMCE_API_KEY || "jfqng7zzpawp6enj8vr7smg353mb915mz2h2ep4m64l2t26l"}
                                value={form.content}
                                init={{
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
                                        "exportpdf",
                                    ],
                                    toolbar:
                                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                                    tinycomments_mode: "embedded",
                                    tinycomments_author: "Author name",
                                    paste_data_images: "true",
                                    mergetags_list: [
                                        {
                                            value: "First.Name",
                                            title: "First Name",
                                        },
                                        { value: "Email", title: "Email" },
                                    ],
                                    ai_request: (request, respondWith) =>
                                        respondWith.string(() =>
                                            Promise.reject(
                                                "See docs to implement AI Assistant"
                                            )
                                        ),
                                }}
                                onEditorChange={handleEditorChange}
                            />

                            {errors.content && (
                                <p className="error">{errors.content}</p>
                            )}
                        </div>

                        <button type="submit" className="btn-save">
                            Save Changes
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}
