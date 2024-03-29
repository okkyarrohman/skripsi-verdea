<?php

namespace Database\Factories;

use App\Models\Soal;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Opsi>
 */
class OpsiFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'soal_id' => function () {
                return Soal::inRandomOrder()->limit(2)->pluck('id')->first();
            },
            'opsi' => $this->faker->sentence(),
            'point' => $this->faker->numberBetween(0, 20),
        ];
    }
}
