<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\RateLimiter;
use App\Mail\ContactFormMail;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        $key = 'contact-form:' . $request->ip();

        // Rate limiting is already a great first line of defense
        if (RateLimiter::tooManyAttempts($key, 5)) {
            return response()->json(['error' => 'Too many attempts.'], 429);
        }

        // 1. Backend Honeypot Check
        // If zip_code is filled, we act like it succeeded but do NOTHING.
        if ($request->filled('zip_code')) {
            return response()->json([
                'success' => 'Message sent!',
                'note' => 'Spam filtered' // Optional: for your own internal logging
            ], 200);
        }

        RateLimiter::hit($key, 60);

        // 2. Validate the REAL data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string|min:10',
        ]);

        // 3. Send email using the Mailable
        // This only happens if the code didn't exit during the honeypot check
        Mail::to('contact@ervotechep.com')->send(new ContactFormMail($validated));

        return response()->json(['success' => 'Message sent!'], 200);
    }
}
