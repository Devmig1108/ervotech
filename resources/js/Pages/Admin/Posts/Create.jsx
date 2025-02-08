import React, { useState, useEffect, useRef } from "react";
import { Link, useForm } from "@inertiajs/react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Quill's CSS for styling
import "../../../../css/admin.css";

export default function Create() {
    const { data, setData, post, errors } = useForm({
        title: "",
        slug: "",
        content: "",
        image: null,
    });

    const [preview, setPreview] = useState(null);
    const editorRef = useRef(null);

    useEffect(() => {
        const quill = new Quill("#editor", {
            theme: "snow",
            placeholder: "Write your content here...",
        });

        quill.on("text-change", () => {
            setData("content", quill.root.innerHTML); // Store HTML content
        });

        editorRef.current = quill;
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData("image", file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("slug", data.slug);
        formData.append("content", data.content);
        if (data.image) {
            formData.append("image", data.image);
        }

        post("/admin/posts", formData);
    };

    return (
        <div className="admin-dashboard">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="logo">
                    <h1>ervotech blog</h1>
                </div>
                <nav>
                    <Link href="/admin/dashboard">
                        <i className="icon-dashboard"></i> Dashboard
                    </Link>
                    <Link href="/admin/posts/create" className="active">
                        <i className="icon-new-post"></i> New Post
                    </Link>
                    <Link href="/admin/posts">
                        <i className="icon-my-posts"></i> My Posts
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <div className="edit-header">
                    <h2>Create New Post</h2>
                    <Link href="/admin/posts" className="btn-back">
                        Back to Posts
                    </Link>
                </div>

                <form onSubmit={handleSubmit} className="edit-form" encType="multipart/form-data">
                    {/* Title Input */}
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className={errors.title ? "input-error" : ""}
                        />
                        {errors.title && <p className="error">{errors.title}</p>}
                    </div>

                    {/* Slug Input */}
                    <div className="form-group">
                        <label htmlFor="slug">Slug</label>
                        <input
                            type="text"
                            id="slug"
                            name="slug"
                            value={data.slug}
                            onChange={(e) => setData("slug", e.target.value)}
                            className={errors.slug ? "input-error" : ""}
                        />
                        {errors.slug && <p className="error">{errors.slug}</p>}
                    </div>

                    {/* Image Upload */}
                    <div className="form-group">
                        <label htmlFor="image">Featured Image</label>
                        {preview && <img src={preview} alt="Preview" className="preview-img" />}
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        {errors.image && <p className="error">{errors.image}</p>}
                    </div>

                    {/* WYSIWYG Editor */}
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <div id="editor"></div> {/* Quill Editor */}
                        {errors.content && <p className="error">{errors.content}</p>}
                    </div>

                    <button type="submit" className="btn-save">
                        Publish Post
                    </button>
                </form>
            </main>
        </div>
    );
}
