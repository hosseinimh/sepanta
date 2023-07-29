<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'username' => fake()->unique()->safeEmail(),
            'password' => '123456789a',
            'name' => fake()->firstName(),
            'family' => fake()->lastName(),
            'mobile' => '0' . fake()->numberBetween(1111111111, 9999999999),
            'email' => fake()->email(),
            'is_active' => rand(0, 1),
        ];
    }
}
