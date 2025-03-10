<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/contact', [ContactController::class, 'submit'])->name('contact.submit');

require __DIR__ . '/auth.php';
