<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Guru\Kuis\HasilGuruController;
use App\Http\Controllers\Guru\Kuis\KategoriGuruController;
use App\Http\Controllers\Guru\Kuis\OpsiGuruController;
use App\Http\Controllers\Guru\Kuis\SoalGuruController;
use App\Http\Controllers\Guru\MateriGuruController;
use App\Http\Controllers\Guru\ReferensiGuruController;
use App\Http\Controllers\Guru\TugasGuruController;
use App\Http\Controllers\Guru\TutorialGuruController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Siswa\KuisSiswaController;
use App\Http\Controllers\Siswa\MateriSiswaController;
use App\Http\Controllers\Siswa\ReferensiSiswaController;
use App\Http\Controllers\Siswa\TugasSiswaController;
use App\Http\Controllers\Siswa\TutorialSiswaController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
    return Inertia::render(
        'Home'
    );
});
Route::get('/registrasi', function () {
    return Inertia::render(
        'Register'
    );
});
Route::get('/masuk', function () {
    return Inertia::render(
        'Login'
    );
});
Route::get('/guru', function () {
    return Inertia::render(
        'Guru/Tugas/EditTugas'
    );
});
Route::get('/siswa', function () {
    return Inertia::render(
        'Siswa/Kuis/AkhirKuis'
    );
});
Route::get('/sis', function () {
    return Inertia::render(
        'Siswa/Profile/Profile'
    );
});

// Route Guru after login
Route::group(['middleware' => 'role:guru'], function () {
    Route::prefix('guru')->group(function () {
        // Route Guru Start Here
        Route::get('/dashboard', [DashboardController::class, 'guru'])->name('dashbboard.guru');
        Route::resources([
            'tugas-guru' => TugasGuruController::class,
            'materi-guru' => MateriGuruController::class,
            'referensi-guru' => ReferensiGuruController::class,
            'tutorial-guru' => TutorialGuruController::class,
        ]);
        Route::post('/nilai-tugas', [TugasGuruController::class, 'updateNilai'])->name('update.nilai');
        Route::prefix('kuis')->group(function () {
            Route::resources([
                'kategori' => KategoriGuruController::class,
                'soal' => SoalGuruController::class,
                'opsi' => OpsiGuruController::class,
                'hasil' => HasilGuruController::class,
            ]);
        });
    });
});

// Route Siswa after login
Route::group(['middleware' => 'role:siswa'], function () {
    Route::prefix('siswa')->group(function () {
        // Route Siswa Start Here
        Route::get('/dashboard', [DashboardController::class, 'siswa'])->name('dashbboard.siswa');
        Route::post('/dashboard/hadirAbsen', [DashboardController::class, 'hadirAbsen'])->name('hadirAbsen.dahsboard');
        Route::post('/absen', [DashboardController::class, 'absen'])->name('absen.dahsboard');

        Route::resources([
            'materi' => MateriSiswaController::class,
            'tugas' => TugasSiswaController::class,
            'kuis' => KuisSiswaController::class,
            'tutorial' => TutorialSiswaController::class,
            'referensi' => ReferensiSiswaController::class,
        ]);
        Route::prefix('profile')->group(function () {
            Route::get('/', [ProfileController::class, 'edit'])->name('profile.edit');
            Route::patch('/', [ProfileController::class, 'update'])->name('profile.update');
            Route::delete('/', [ProfileController::class, 'destroy'])->name('profile.destroy');
        });
    });
});




require __DIR__ . '/auth.php';
