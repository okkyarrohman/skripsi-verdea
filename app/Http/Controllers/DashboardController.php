<?php

namespace App\Http\Controllers;

use App\Models\Absen;
use App\Models\AbsenUser;
use App\Models\Materi;
use App\Models\Tugas;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{

    public function guru()
    {
        $absens = Absen::latest()->take(3)->get();
        $tugases = Tugas::latest()->get();
        $dataSiswa = User::role('siswa')->get();

        return Inertia::render('Guru/Dashboard/Beranda', [
            'absens' => $absens,
            'tugases' => $tugases,
            'dataSiswa' => $dataSiswa,
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
            'waktu' => Carbon::now()->format('Y-m-d (H:i:s)'),
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
