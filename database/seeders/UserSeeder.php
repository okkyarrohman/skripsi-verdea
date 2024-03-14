<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $siswa = User::create([
            'name' => 'siswa',
            'email' => 'siswa@eduhouse.com',
            'password' => bcrypt('siswa123'),
        ]);
        $siswa->assignRole('siswa');

        $guru = User::create([
            'name' => 'guru',
            'email' => 'guru@eduhouse.com',
            'password' => bcrypt('guru123'),
        ]);
        $guru->assignRole('guru');
    }
}
