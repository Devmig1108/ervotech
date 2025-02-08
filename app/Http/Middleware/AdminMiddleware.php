<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!auth()->check()) {
            return redirect('/login'); // Redirect to login if not authenticated
        }

        if (auth()->user()->role !== 'admin') {
            abort(403, 'Unauthorized'); // Ensure 'role' column exists
        }

        return $next($request);
    }
}
