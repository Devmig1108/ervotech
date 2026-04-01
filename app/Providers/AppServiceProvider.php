<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Mail;
// Update this line specifically:
use ZeptoMailTransactional\Transport\ZeptoMailTransport;
use ZeptoMailTransactional\ApiClient;

class AppServiceProvider extends ServiceProvider
{
    // ...
    public function boot(): void
    {
        Mail::extend('zeptomail', function () {
            // This now correctly references the class above
            return new ZeptoMailTransport(new ApiClient());
        });
    }
}
