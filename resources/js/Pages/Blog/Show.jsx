import { Link } from "@inertiajs/react";

export default function BlogShow({ post }) {
    return (
        <div className="container">
            <h1>{post.title}</h1>
            <p><strong>By:</strong> {post.author} | <strong>Date:</strong> {new Date(post.published_at).toLocaleDateString()}</p>
            {post.image && <img src={post.image} alt={post.title} />}
            <p>{post.content}</p>
            <Link href="/blog">Back to Blog</Link>
        </div>
    );
}
