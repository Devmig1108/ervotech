<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'Miguel',
            'email' => 'ervotech.ep@gmail.com',
            'password' => Hash::make('ERVOpassword!'), // Hash the password
            'email_verified_at' => now(),
            'created_at' => now(),
            'updated_at' => now(),
            'role' => 'admin'
        ]);
    }
}
