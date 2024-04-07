<?php

namespace Database\Factories;

use App\Models\KategoriKuis;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Hasil>
 */
class HasilFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'kategori_kuis_id' => function () {
                return KategoriKuis::inRandomOrder()->first();
            },
            'user_id' => function () {
                return User::inRandomOrder()->first();
            },
            'total_points' => $this->faker->numberBetween(25, 100),
        ];
    }
}
