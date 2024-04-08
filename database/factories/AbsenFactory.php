<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Absen>
 */
class AbsenFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'pertemuan' => $this->faker->numberBetween(1, 5),
            'tenggat' => Carbon::now()->addDay(),
            'tanggal' => Carbon::now()->format('d/m/Y H:i:s'),
        ];
    }
}
