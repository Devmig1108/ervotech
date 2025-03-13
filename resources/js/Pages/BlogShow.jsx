import React from "react";
import { usePage } from "@inertiajs/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PublicLayout from "@/Layouts/PublicLayout";
import DOMPurify from "dompurify";

export default function BlogShow() {
    const { blog } = usePage().props;

    return (
        <HelmetProvider>
            <Helmet>
                <link
                    rel="canonical"
                    href={`https://www.ervotechep.com/blog/${blog.slug}`}
                />
                <meta
                    property="og:title"
                    content={`${blog.title} | Ervotech`}
                />
                <meta
                    property="og:description"
                    content={
                        blog.excerpt ||
                        "Read more about this topic on our blog."
                    }
                />
                <meta
                    property="og:image"
                    content={
                        blog.image
                            ? `https://www.ervotechep.com/storage/${blog.image}`
                            : "https://www.ervotechep.com/default-thumbnail.jpg"
                    }
                />
                <title>{blog.title} | Ervotech - Blog</title>
            </Helmet>
            <PublicLayout>
                <div className="blog-container">
                    <h1 className="blog-title">{blog.title}</h1>
                    <p className="blog-meta">
                        {new Date(blog.created_at).toLocaleDateString()} • By{" "}
                        {blog.author}
                    </p>
                    {blog.image && (
                        <img
                            src={`/storage/${blog.image}`}
                            alt={blog.title}
                            className="blog-image"
                        />
                    )}
                    <div
                        className="blog-content"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(blog.content),
                        }}
                    />
                </div>
            </PublicLayout>
        </HelmetProvider>
    );
}
