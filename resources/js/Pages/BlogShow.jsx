import React from "react";
import { usePage } from "@inertiajs/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PublicLayout from "@/Layouts/PublicLayout";
import DOMPurify from "dompurify"; // Sanitize HTML content

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
                    content={`Ervotech - ${blog.title}`}
                />
                <title>{blog.title} | Ervotech - Blog</title>
            </Helmet>
            <PublicLayout
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        {blog.title}
                    </h2>
                }
            >
                <div className="blog-show">
                    <div className="container">
                        {blog.image && (
                            <img
                                src={`/storage/${blog.image}`}
                                alt={blog.title}
                                className="blog-image"
                            />
                        )}
                        <h1>{blog.title}</h1>
                        <p>
                            Published on:{" "}
                            {new Date(blog.created_at).toLocaleDateString()}
                        </p>
                        <div
                            className="blog-content"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </div>
                </div>
            </PublicLayout>
        </HelmetProvider>
    );
}
