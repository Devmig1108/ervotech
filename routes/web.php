<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Admin\AdminBlogController;
use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// ✅ Public Pages
Route::get('/', fn() => Inertia::render('Home'))->name('home');
Route::get('/about', fn() => Inertia::render('About'))->name('about');
Route::get('/case-studies', fn() => Inertia::render('Case'))->name('casestudies');
Route::get('/contact', fn() => Inertia::render('Contact'))->name('contact');
Route::get('/services', fn() => Inertia::render('Services'))->name('services');
Route::get('/sitemap', fn() => Inertia::render('Sitemap'))->name('sitemap');
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{blogPost:slug}', [BlogController::class, 'show'])->name('blog.show');

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');
Route::get('/case-studies', function () {
    return Inertia::render('Case');
})->name('casestudies');
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');
Route::get('/services', function () {
    return Inertia::render('Services');
})->name('services');
Route::get('/web-design-el-paso', function () {
    return Inertia::render('WebDevelopmentElPaso');
})->name('services');
Route::get('/sitemap', function () {
    return Inertia::render('Sitemap');
})->name('sitemap');
// Route::get('/faq', function () {
//     return Inertia::render('FAQ');
// })->name('faq');

// ✅ Authentication & Dashboard
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');
});

// ✅ Blog Routes (Public)
// Route::prefix('blog')->group(function () {
//     Route::get('/', [BlogController::class, 'index'])->name('blog.index');
//     Route::get('/{post:slug}', [BlogController::class, 'show'])->name('blog.show');
// });

// ✅ Profile Routes (for authenticated users)
Route::middleware(['auth'])->prefix('profile')->group(function () {
    Route::get('/', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// ✅ Admin Routes
Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', [AdminBlogController::class, 'index'])->name('admin.dashboard');
    Route::get('/posts', [AdminBlogController::class, 'index'])->name('admin.posts.index'); // ✅ List all posts
    Route::get('/posts/create', [AdminBlogController::class, 'create'])->name('admin.posts.create'); // ✅ Create new post
    Route::post('/posts', [AdminBlogController::class, 'store'])->name('admin.posts.store'); // ✅ Store post
    Route::get('/posts/{blogPost:slug}/edit', [AdminBlogController::class, 'edit'])->name('admin.posts.edit'); // ✅ Edit post
    Route::post('/posts/{blogPost:slug}', [AdminBlogController::class, 'update'])->name('admin.posts.update'); // ✅ Update post
    Route::delete('/posts/{blogPost:slug}', [AdminBlogController::class, 'destroy'])->name('admin.posts.destroy'); // ✅ Delete post
    Route::post('/posts/upload-image', [AdminBlogController::class, 'uploadImage'])->name('admin.posts.upload-image');

});

// ✅ Contact Form Submission
Route::post('/contact', [ContactController::class, 'submit'])->name('contact.submit');

require __DIR__ . '/auth.php';
