<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique(); // URL-friendly title
            $table->text('excerpt')->nullable(); // Short description
            $table->longText('content'); // Full blog content
            $table->string('image')->nullable(); // Feature image path
            $table->string('author')->nullable(); // Author name
            $table->timestamp('published_at')->nullable(); // Publish date
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('posts');
    }
};

