<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Absen;
use App\Models\AbsenUser;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AbsenGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Ambil semua data absensi
        $absens = Absen::all();

        // Ambil semua data absensi siswa
        $absenUsers = AbsenUser::all();

        // Inisialisasi array untuk menyimpan informasi absensi setiap pertemuan
        $infoPertemuan = [];

        // Loop melalui setiap data absensi
        foreach ($absens as $absen) {
            // Inisialisasi counter untuk setiap status absensi pada setiap pertemuan
            $counterHadir = 0;
            $counterAbsen = 0;
            $counterAlpha = 0;

            // Loop melalui setiap data absensi siswa
            foreach ($absenUsers as $absenUser) {
                // Jika absenUser terkait dengan absen saat ini
                if ($absenUser->absen_id === $absen->id) {
                    // Cek status absensi dan tambahkan ke counter yang sesuai
                    switch ($absenUser->status) {
                        case 'hadir':
                            $counterHadir++;
                            break;
                        case 'absen':
                            $counterAbsen++;
                            break;
                        case 'alpha':
                            $counterAlpha++;
                            break;
                            // Jika ada status lain, biarkan saja atau lakukan penanganan tambahan sesuai kebutuhan
                    }
                }
            }

            // Tambahkan informasi absensi pertemuan saat ini ke dalam array
            $infoPertemuan[] = [
                'pertemuan' => $absen->pertemuan,
                'hadir' => $counterHadir,
                'absen' => $counterAbsen,
                'alpha' => $counterAlpha
            ];
        }

        return Inertia::render('Guru/Dashboard/DetailAbsensi', [
            'absens' => $absens,
            'infoPertemuan' => $infoPertemuan
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Guru/Dashboard/TambahAbsensi');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Absen::create([
            'pertemuan' => $request->input('pertemuan'),
            'tanggal' => $request->input('tanggal'),
            'tenggat' => Carbon::now()->subDays(1),
        ]);

        return redirect()->route('absen-guru.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $absens = AbsenUser::where('absen_id', $id)->with('absen','user')->get();

        return Inertia::render('Guru/Dashboard/DetailAbsensiPerhari', [
            'absens' => $absens
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
