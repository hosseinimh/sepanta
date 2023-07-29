<?php

namespace Database\Seeders;

use App\Constants\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create(['username' => 'hosseinimh@gmail.com', 'mobile' => '09155295009', 'email' => 'hosseinimh@gmail.com', 'role' => Role::ADMINISTRATOR, 'is_active' => 1]);
        foreach (range(1, 50) as $index) {
            $role = rand(1, 100) % 2 === 0 ? Role::ADMINISTRATOR : Role::USER;
            User::factory()->create(['role' => $role]);
        }
    }
}
