<?php

namespace Database\Factories;

use App\Models\Tugas;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TugasUser>
 */
class TugasUserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'tugas_id' => function () {
                return Tugas::inRandomOrder()->first();
            },
            'user_id' => function () {
                return User::inRandomOrder()->first();
            },
            'tugas1' => $this->faker->slug(),
            'waktu_submit1' => Carbon::now()->format('Y-m-d H:i:s'),
            'tugas2' => $this->faker->slug(),
            'waktu_submit2'  => Carbon::now()->format('Y-m-d H:i:s'),
            'tugas3' => $this->faker->slug(),
            'waktu_submit3'  => Carbon::now()->format('Y-m-d H:i:s'),
            'tugas4' => $this->faker->slug(),
            'waktu_submit4'  => Carbon::now()->format('Y-m-d H:i:s'),
            'tugas5' => $this->faker->slug(),
            'waktu_submit5'  => Carbon::now()->format('Y-m-d H:i:s'),
            'tugas6' => $this->faker->slug(),
            'waktu_submit6'  => Carbon::now()->format('Y-m-d H:i:s'),
            'status' => $this->faker->randomElement(['Step1 Diterima', 'Step2 Diterima', 'Step3 Diterima', 'Step4 Diterima', 'Step5 Diterima', 'Step6 Diterima']),
            'nilai' => $this->faker->numberBetween(70, 100),
            'feedback' => $this->faker->paragraph()
        ];
    }
}
