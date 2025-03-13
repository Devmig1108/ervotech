import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PublicLayout from "@/Layouts/PublicLayout";
import DOMPurify from "dompurify";


export default function BlogIndex() {
    const { blogs } = usePage().props;

    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/blog/" />
                <meta
                    property="og:title"
                    content="Ervotech - Web Consulting and Development"
                />
                <title>Ervotech - Web Consulting and Development</title>
            </Helmet>
            <PublicLayout>
                <div className="blog-index">
                    <div className="container">
                        <h1 className="blog-heading">Latest Articles</h1>
                        <div className="blog-list">
                            {blogs?.map((blog) => (
                                <div className="blog-card" key={blog.id}>
                                    {/* Featured Image */}
                                    {blog.image && (
                                        <Link href={`/blog/${blog.slug}`}>
                                            <img
                                                src={"/storage/" + blog.image}
                                                alt={blog.title}
                                                className="blog-image"
                                            />
                                        </Link>
                                    )}

                                    <div className="blog-content">
                                        {/* Title */}
                                        <h2 className="blog-title">
                                            <Link href={`/blog/${blog.slug}`}>
                                                {blog.title}
                                            </Link>
                                        </h2>

                                        {/* Author & Date */}
                                        <div className="blog-meta">
                                            {/* <img src={blog.author.avatar} alt={blog.author.name} className="author-avatar" />
                                            <span className="author-name">{blog.author.name}</span> */}
                                            <span className="blog-date">
                                                {new Date(
                                                    blog.created_at
                                                ).toLocaleDateString()}
                                            </span>
                                        </div>

                                        {/* Blog Excerpt */}
                                        <div
                                            className="blog-excerpt"
                                            dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(
                                                    blog.content.slice(0, 150) +
                                                        "..."
                                                ),
                                            }}
                                        />

                                        {/* Read More Link */}
                                        <Link
                                            href={`/blog/${blog.slug}`}
                                            className="btn-read-more"
                                        >
                                            Read Article →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </PublicLayout>
        </HelmetProvider>
    );
}
