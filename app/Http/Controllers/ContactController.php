<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;
use Illuminate\Support\Facades\RateLimiter;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        $key = 'contact-form:' . $request->ip();

        if (RateLimiter::tooManyAttempts($key, 5)) {
            return back()->with('error', 'Too many submissions. Please try again later.');
        }

        RateLimiter::hit($key, 60); // Limit to 5 requests per minute
        // Validate incoming request
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string|min:10',
        ]);

        // Send email
        Mail::to('contact@ervotechep.com')->send(new ContactFormMail($validated));

        // Return response
        return back()->with('success', 'Your message has been sent successfully!');
    }
}
