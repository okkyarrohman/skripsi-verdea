<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Absen;
use App\Models\Hasil;
use App\Models\KategoriKuis;
use App\Models\Materi;
use App\Models\Opsi;
use App\Models\Referensi;
use App\Models\Soal;
use App\Models\Tugas;
use App\Models\Tutorial;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(RoleSeeder::class);
        $this->call(UserSeeder::class);

        Absen::factory(5)->create();
        Materi::factory(3)->create();
        Tugas::factory(3)->create();
        Referensi::factory(5)->create();
        Tutorial::factory(5)->create();
        KategoriKuis::factory(2)->create();
        Soal::factory(10)->create();
        Opsi::factory(50)->create();
        Hasil::factory(10)->create();
    }
}
