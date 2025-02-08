import { Link, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import "../../../../css/admin.css";

export default function Index() {
    const { posts } = usePage().props;
    const [darkMode, setDarkMode] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    // Add/remove the dark-mode class to/from the body
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    return (
        <div className="admin-dashboard">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="logo">
                    <h1>ervotech blog</h1>
                </div>
                <nav>
                    <Link href="/admin/dashboard" className="active">
                        <i className="icon-dashboard"></i> Dashboard
                    </Link>
                    <Link href="/admin/posts/create">
                        <i className="icon-new-post"></i> New Post
                    </Link>
                    <Link href="/admin/posts">
                        <i className="icon-my-posts"></i> My Posts
                    </Link>
                    <Link href="/admin/category">
                        <i className="icon-category"></i> Category
                    </Link>
                    <Link href="/admin/analytics">
                        <i className="icon-analytics"></i> Analytics
                    </Link>
                </nav>
                <div className="support">
                    <i className="icon-support"></i> Support
                </div>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                {/* Top Navigation */}
                <div className="top-nav">
                    <h2>Today Trending</h2>
                    <div className="filters">
                        <select>
                            <option value="popular">Sort: Popular</option>
                            <option value="newest">Newest</option>
                        </select>
                        <select>
                            <option value="courses">Courses</option>
                            <option value="blogs">Blogs</option>
                        </select>
                        <select>
                            <option value="react">Category: React</option>
                            <option value="js">Category: JavaScript</option>
                        </select>
                        <div className="balance">
                            <span className="icon-balance"></span> Balance:
                            $55144
                        </div>
                        <button
                            onClick={toggleDarkMode}
                            className="dark-mode-toggle"
                        >
                            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                        </button>
                    </div>
                </div>

                {/* Blog Posts Grid */}
                <div className="card-grid">
                    {posts?.data?.map((post) => (
                        <div className="card" key={post.id}>
                            {post.image && (
                                <img
                                    src={`/storage/${post.image}`}
                                    alt={post.title}
                                    className="card-img"
                                />
                            )}
                            <h3>{post.title}</h3>
                            <p>{post.content.substring(0, 100)}...</p>
                            <div className="card-footer">
                                <span>
                                    By: {post.author || "Unknown Author"}
                                </span>
                                <Link
                                    href={`/admin/posts/${post.slug}/edit`}
                                    className="btn-edit"
                                >
                                    Edit
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
