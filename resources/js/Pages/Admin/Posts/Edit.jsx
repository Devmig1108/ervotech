import React, { useRef, useEffect, useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Quill's CSS for styling
import "../../../../css/admin.css";

export default function Edit({ blogPost }) {
    const { data, setData, put, errors } = useForm({
        title: blogPost.title,
        slug: blogPost.slug,
        content: blogPost.content,
        image: null, // Allows file upload handling
    });

    const [preview, setPreview] = useState(blogPost.image ? `/storage/${blogPost.image}` : null);
    const editorRef = useRef(null);

    useEffect(() => {
        const quill = new Quill("#editor", {
            theme: "snow",
            placeholder: "Edit your content...",
        });

        quill.root.innerHTML = blogPost.content; // Load existing content

        quill.on("text-change", () => {
            setData((prevData) => ({
                ...prevData,
                content: quill.root.innerHTML, // Preserve all other fields while updating content
            }));
        });

        editorRef.current = quill;
    }, [blogPost.content]);

    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData((prevData) => ({
            ...prevData,
            image: file, // Preserve form data while updating image
        }));

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

        put(`/admin/posts/${blogPost.slug}`, formData);
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
                    <Link href="/admin/posts/create">
                        <i className="icon-new-post"></i> New Post
                    </Link>
                    <Link href="/admin/posts" className="active">
                        <i className="icon-my-posts"></i> My Posts
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <div className="edit-header">
                    <h2>Edit Blog Post</h2>
                    <Link href="/admin/posts" className="btn-back">
                        Back to Posts
                    </Link>
                </div>

                <div className="edit-container">
                    <form onSubmit={handleSubmit} className="edit-form" encType="multipart/form-data">
                        {/* Title Input */}
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={data.title}
                                onChange={handleChange}
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
                                onChange={handleChange}
                                className={errors.slug ? "input-error" : ""}
                            />
                            {errors.slug && <p className="error">{errors.slug}</p>}
                        </div>

                        {/* Image Upload with Preview */}
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
                            <div id="editor" className="editor"></div>
                            {errors.content && <p className="error">{errors.content}</p>}
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
