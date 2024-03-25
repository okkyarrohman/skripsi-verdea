<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\KategoriKuis>
 */
class KategoriKuisFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama' => $this->faker->sentence(),
            'tenggat' => $this->faker->dateTime(now()),
            'durasi' => $this->faker->numberBetween(45, 60)
        ];
    }
}
