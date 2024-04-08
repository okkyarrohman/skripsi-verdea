<?php

namespace Database\Factories;

use App\Models\Absen;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AbsenUser>
 */
class AbsenUserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'absen_id' => function () {
                return Absen::inRandomOrder()->first();
            },
            'user_id' => function () {
                return User::inRandomOrder()->first();
            },
            'waktu' => Carbon::now()->format('Y-m-d H:i:s'),
            'status' => $this->faker->randomElement(['Hadir', 'Belum Absen']),
        ];
    }
}
