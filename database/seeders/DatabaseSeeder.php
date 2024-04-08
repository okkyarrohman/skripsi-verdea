<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Absen;
use App\Models\AbsenUser;
use App\Models\Hasil;
use App\Models\KategoriKuis;
use App\Models\Materi;
use App\Models\Opsi;
use App\Models\Referensi;
use App\Models\Soal;
use App\Models\Tugas;
use App\Models\TugasUser;
use App\Models\Tutorial;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(RoleSeeder::class);
        $this->call(UserSeeder::class);


        User::factory(30)->create();
        Absen::factory(5)->create();
        AbsenUser::factory(30)->create();
        Materi::factory(3)->create();
        Tugas::factory(3)->create();
        Referensi::factory(5)->create();
        Tutorial::factory(5)->create();
        KategoriKuis::factory(2)->create();
        Soal::factory(10)->create();
        Opsi::factory(50)->create();
        Hasil::factory(10)->create();
        TugasUser::factory(30)->create();
    }
}
