<?php

namespace App\Http\Controllers;

use App\Models\Absen;
use App\Models\AbsenUser;
use App\Models\Materi;
use App\Models\Tugas;
use App\Models\TugasUser;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{

    public function guru()
    {
        $dataSiswa = User::role('siswa')->get();

        $absens = Absen::latest()->take(3)->get();
        $hadirAbsen = AbsenUser::where([
            'absen_id' => $absens->pluck('id')->toArray(),
            'status' => 'Hadir'
        ])->with('absen')->count();

        $totalSiswa = $dataSiswa->pluck('id')->count(); // Menghitung Jumlah siswa
        $belumAbsen = $totalSiswa - $hadirAbsen; // Menhitung Absen siswa yang belum hadir

        $tugases = Tugas::latest()->get(); // Mengambil Tugas Terakhir dari column created_at
        $tugasesId = $tugases->pluck('id')->toArray();
        $totalAssign = TugasUser::where('tugas_id', $tugasesId)->with('tugas')->count(); // Mendapatkan Nilai berapa banyak siswa yang mengumpulkan tugas terbaru
        $progressMentah =  100 / $totalAssign; // memasukkan nilai dalam progress bar
        $outputProgressbar = round($progressMentah, 2);


        return Inertia::render('Guru/Dashboard/Beranda', [
            'absens' => $absens,
            'hadirAbsen' => $hadirAbsen,
            'belumAbsen' => $belumAbsen,
            'tugases' => $tugases,
            'dataSiswa' => $dataSiswa,
            'outputProgressbar' => $outputProgressbar
        ]);
    }

    public function siswa()
    {
        $materis = Materi::latest()->take(3)->get();
        $absensTerakhir = Absen::latest()->get();
        $absenLampau = Absen::latest()->take(3)->get();

        return Inertia::render('Siswa/Dashboard/Beranda', [
            'materis' => $materis,
            'absensTerakhir' => $absensTerakhir,
            'absenLampau' => $absenLampau
        ]);
    }

    public function hadirAbsen(Request $request)
    {
        AbsenUser::create([
            'user_id' => auth()->user()->id,
            'absen_id' => $request->input('absen_id'),
            'waktu' => Carbon::now()->format('Y-m-d H:i:s'),
            'status' => "Hadir"
        ]);

        return redirect()->route('dashboard.siswa');
    }

    public function absen()
    {
        $absens = AbsenUser::where([
            'user_id' => auth()->user()->id
        ])
            ->with('absen')
            ->get();

        return Inertia::render('', [
            'absens' => $absens
        ]);
    }
}
