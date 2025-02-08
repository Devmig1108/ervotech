<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class AdminBlogController extends Controller
{
    public function index()
    {
        $posts = BlogPost::latest()->paginate(10);
        return Inertia::render('Admin/Posts/Index', ['posts' => $posts]); // ✅ Ensure Inertia component exists
    }

    public function create()
    {
        return Inertia::render('Admin/Posts/Create'); // ✅ Ensure this component exists in `/resources/js/Pages/Admin/Posts/Create.jsx`
    }

    public function edit(BlogPost $blogPost)
    {
        return Inertia::render('Admin/Posts/Edit', ['blogPost' => $blogPost]); // ✅ Ensure `/Edit.jsx` exists
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'   => 'required|string|max:255',
            'slug'    => 'required|string|unique:blog_posts',
            'content' => 'required',
            'image'   => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Handle Image Upload
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('blog_images', 'public');
        }

        BlogPost::create($validated);

        return redirect()->route('admin.dashboard')->with('success', 'Post created successfully.');
    }

    public function update(Request $request, BlogPost $blogPost)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|unique:blog_posts,slug,' . $blogPost->id,
            'content' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->hasFile('image')) {
            if ($blogPost->image) {
                \Storage::disk('public')->delete($blogPost->image); // Delete old image
            }
            $imagePath = $request->file('image')->store('blog_images', 'public');
            $blogPost->image = $imagePath;
        }

        $blogPost->update([
            'title' => $validated['title'],
            'slug' => $validated['slug'],
            'content' => $validated['content'],
            'image' => $blogPost->image ?? $blogPost->getOriginal('image'), // Keep old image if not updated
        ]);

        return back()->with('success', 'Post updated successfully.');
    }



    public function destroy(BlogPost $blogPost)
    {
        // Delete associated image if it exists
        if ($blogPost->image) {
            Storage::disk('public')->delete($blogPost->image);
        }

        $blogPost->delete();

        return redirect()->route('admin.dashboard')->with('success', 'Post deleted successfully.');
    }
}
