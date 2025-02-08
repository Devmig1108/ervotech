import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PublicLayout from '@/Layouts/PublicLayout';

export default function BlogIndex() {
    const { blogs } = usePage().props;

    return (
        <HelmetProvider>
            <Helmet>
                <link rel="canonical" href="https://www.ervotechep.com/blog/" />
                <meta property="og:title" content="Ervotech - Web Consulting and Development" />
                <title>Ervotech - Web Consulting and Development</title>
            </Helmet>
            <PublicLayout
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            >
        <div className="blog-index">
            <div className="container">
                <h1>Latest Blogs</h1>
                <div className="blog-list">
                    {blogs?.map((blog) => (
                        <div className="blog-card" key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p>{blog.content.slice(0, 150) + "..."}</p>
                            <Link href={`/blog/${blog.slug}`} className="btn-read-more">
                                Read More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </PublicLayout>
        </HelmetProvider>
    );
}
