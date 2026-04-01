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

        if (RateLimiter::tooManyAttempts($key, 5)) {
            return response()->json(['error' => 'Too many attempts.'], 429);
        }

        // 1. Backend Honeypot Check
        if ($request->filled('zip_code')) {
            return response()->json(['message' => 'Spam detected'], 422);
        }

        RateLimiter::hit($key, 60);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string|min:10',
        ]);

        // 2. Send email using the Mailable
        Mail::to('contact@ervotechep.com')->send(new ContactFormMail($validated));

        return response()->json(['success' => 'Message sent!'], 200);
    }
}