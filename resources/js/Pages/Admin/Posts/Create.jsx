import React, { useState } from "react";
import { Link, router } from "@inertiajs/react";
import { Editor } from "@tinymce/tinymce-react";
import "../../../../css/admin.css";

export default function Create() {
    const [form, setForm] = useState({
        title: "",
        slug: "",
        content: "",
        image: null,
    });

    const [errors, setErrors] = useState({});
    const [preview, setPreview] = useState(null);
    const [successMessage, setSuccessMessage] = useState(""); // ✅ Success banner state

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

        router.post("/admin/posts", formData, {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                setSuccessMessage("Post published successfully! ✅");
                setTimeout(() => setSuccessMessage(""), 3000); // Hide after 3 sec
                setForm({ title: "", slug: "", content: "", image: null }); // Clear form
                setPreview(null);
            },
            onError: (errors) => setErrors(errors),
        });
    };

    return (
        <div className="admin-dashboard">
            <aside className="sidebar">
                <div className="logo">
                    <h1>Ervotech Blog</h1>
                </div>
                <nav>
                    <Link href="/admin/dashboard">Dashboard</Link>
                    <Link href="/admin/posts/create" className="active">
                        New Post
                    </Link>
                    <Link href="/admin/posts">My Posts</Link>
                </nav>
            </aside>

            <main className="main-content">
                <div className="edit-header">
                    <h2>Create New Post</h2>
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
                                apiKey="your-tinymce-api-key"
                                value={form.content}
                                init={{
                                    height: 300,
                                    menubar: false,
                                    plugins: "paste",
                                    toolbar:
                                        "undo redo | bold italic | bullist numlist | link",
                                    paste_data_images: true, // ✅ Allows pasted/dropped images
                                    images_upload_handler: (
                                        blobInfo,
                                        success,
                                        failure
                                    ) => {
                                        const formData = new FormData();
                                        formData.append(
                                            "file",
                                            blobInfo.blob(),
                                            blobInfo.filename()
                                        );

                                        fetch("/admin/posts/upload-image", {
                                            method: "POST",
                                            body: formData,
                                            headers: {
                                                "X-CSRF-TOKEN": document
                                                    .querySelector(
                                                        'meta[name="csrf-token"]'
                                                    )
                                                    ?.getAttribute("content"),
                                            },
                                        })
                                            .then((response) => response.json())
                                            .then((data) =>
                                                success(data.location)
                                            )
                                            .catch(() =>
                                                failure("Image upload failed.")
                                            );
                                    },
                                }}
                                onEditorChange={handleEditorChange}
                            />

                            {errors.content && (
                                <p className="error">{errors.content}</p>
                            )}
                        </div>

                        <button type="submit" className="btn-save">
                            Publish Post
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}
