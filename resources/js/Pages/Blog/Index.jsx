import { Link } from "@inertiajs/react";

export default function BlogIndex({ posts }) {
    return (
        <div className="container">
            <h1>Blog</h1>
            {posts.data.length > 0 ? (
                posts.data.map((post) => (
                    <div key={post.id} className="post-card">
                        <h2>
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <p>{post.excerpt}</p>
                        <p><strong>By:</strong> {post.author} | <strong>Date:</strong> {new Date(post.published_at).toLocaleDateString()}</p>
                    </div>
                ))
            ) : (
                <p>No blog posts available.</p>
            )}
        </div>
    );
}
