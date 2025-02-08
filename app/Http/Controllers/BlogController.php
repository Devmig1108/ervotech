<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = BlogPost::latest()->get();
        return Inertia::render('BlogIndex', ['blogs' => $blogs]);
    }

    public function show(BlogPost $blogPost)
    {
        return Inertia::render('BlogShow', ['blog' => $blogPost]);
    }
}
