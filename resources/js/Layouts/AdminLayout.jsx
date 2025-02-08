import { Link } from "@inertiajs/react";

export default function AdminLayout({ children }) {
    return (
        <div className="admin-layout">
            {/* Sidebar */}
            <aside className="admin-sidebar">
                <h2>Admin Panel</h2>
                <ul>
                    <li><Link href="/admin/dashboard">Dashboard</Link></li>
                    <li><Link href="/admin/posts">Manage Posts</Link></li>
                    <li><Link href="/">Back to Site</Link></li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="admin-content">
                {children}
            </main>
        </div>
    );
}
