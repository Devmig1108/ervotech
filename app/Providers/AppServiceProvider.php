<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Mail;
use ZeptoMailTransactional\ApiClient;
use ZeptoMailTransactional\ZeptoMailTransport;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */


    public function boot(): void
    {
        Mail::extend('zeptomail', function () {
            return new ZeptoMailTransport(new ApiClient());
        });
    }
}
