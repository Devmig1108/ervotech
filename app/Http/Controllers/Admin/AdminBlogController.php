<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use Illuminate\Auth\Events\Validated;
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

        return redirect()->route('admin.posts.index')->with('success', 'Post created successfully.');
    }


    public function update(Request $request, BlogPost $blogPost)
    {
        $validated = $request->validate([
            'title'   => 'required|string|max:255',
            'slug'    => 'required|string|unique:blog_posts,slug,' . $blogPost->id,
            'content' => 'required',
            'image'   => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // If a new image is uploaded, delete the old one
        if ($request->hasFile('image')) {
            if ($blogPost->image) {
                Storage::disk('public')->delete($blogPost->image);
            }
            $validated['image'] = $request->file('image')->store('blog_images', 'public');
        } else {
            $validated['image'] = $blogPost->image; // Keep old image
        }

        $blogPost->update($validated);

        return back()->with('success', 'Post updated successfully.');
    }


    public function uploadImage(Request $request)
    {
        $request->validate([
            'file' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        try {
            $path = $request->file('file')->store('blog_images', 'public');
            return response()->json(['location' => asset("storage/$path")]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Upload failed.'], 500);
        }
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
