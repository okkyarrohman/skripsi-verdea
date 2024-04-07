<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tugas>
 */
class TugasFactory extends Factory
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
            'soal1' => $this->faker->paragraph(),
            'soal2' => $this->faker->paragraph(),
            'soal3' => $this->faker->paragraph(),
            'soal4' => $this->faker->paragraph(),
            'soal5' => $this->faker->paragraph(),
            'soal6' => $this->faker->paragraph(),
        ];
    }
}
