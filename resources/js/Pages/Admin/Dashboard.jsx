import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import '../../../css/admin.css';

export default function AdminDashboard() {
    const { posts } = usePage().props;

    return (
        <div className="admin-dashboard">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="logo">
                    <h1>Ervotech</h1>
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
                </nav>
                <div className="support">
                    <i className="icon-support"></i> Support
                </div>
            </div>

            {/* Main Content */}
            <main className="main-content">
                {/* Top Navigation */}
                <div className="top-nav">
                    <h2>Today Trending</h2>
                    <div className="actions">
                        <div className="balance">
                            <span className="icon-balance"></span> Balance: $55144
                        </div>
                        <div className="filters">
                            <select>
                                <option value="popular">Sort: Popular</option>
                                <option value="newest">Newest</option>
                            </select>
                            <select>
                                <option value="react">Category: React</option>
                                <option value="js">Category: JavaScript</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Blog Posts Grid */}
                <div className="card-grid">
                    {posts && posts.map((post) => (
                        <div className="blog-card" key={post.id}>
                            <img src={post.image} alt={post.title} className="card-img" />
                            <h3>{post.title}</h3>
                            <p>{post.excerpt || 'No description provided.'}</p>
                            <div className="card-footer">
                                <span>By: {post.author}</span>
                                <Link href={`/admin/posts/${post.slug}/edit`} className="btn-edit">Edit</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
