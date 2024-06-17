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
        // Mengambil data siswa
        $dataSiswa = User::role('siswa')->get();

        // Mengambil 3 data absensi terbaru
        $absens = Absen::latest()->take(3)->get();

        // Inisialisasi array untuk menyimpan informasi absensi setiap pertemuan
        $infoPertemuan = [];

        // Loop melalui setiap data absensi
        foreach ($absens as $absen) {
            // Inisialisasi counter untuk setiap status absensi pada setiap pertemuan
            $counterHadir = AbsenUser::where([
                'absen_id' => $absen->id,
                'status' => 'Hadir'
            ])->count();
            $counterAlpha = AbsenUser::where([
                'absen_id' => $absen->id,
                'status' => 'Alpha'
            ])->count();

            // Tambahkan informasi absensi pertemuan saat ini ke dalam array
            $infoPertemuan[] = [
                'pertemuan' => $absen->pertemuan,
                'hadir' => $counterHadir,
                'tanggal' => $absen->tanggal,
                'alpha' => $counterAlpha
            ];
        }



        // Mengambil data tugas terbaru
        $tugases = Tugas::latest()->get();
        $tugasesId = $tugases->pluck('id')->toArray();


        // Menghitung berapa banyak siswa yang mengumpulkan tugas terbaru
        $totalAssign = TugasUser::whereIn('tugas_id', $tugasesId)->count();
        // Memasukkan nilai dalam progress bar
        if ($totalAssign > 0) {
            $progressMentah = 100 / $totalAssign;
            $outputProgressbar = round($progressMentah, 2);
        } else {
            // Jika tidak ada siswa yang mengumpulkan tugas, maka progress bar diatur menjadi 0
            $outputProgressbar = 0;
        }



        return Inertia::render('Guru/Dashboard/Beranda', [
            'absens' => $absens,
            'infoPertemuan' => $infoPertemuan,
            'tugases' => $tugases,
            'dataSiswa' => $dataSiswa,
            'outputProgressbar' => $outputProgressbar
        ]);
    }


    public function siswa()
    {
        $materis = Materi::latest()->take(3)->get();
        $absensTerakhir = Absen::latest()->take(1)->get();
        $absenLampau = Absen::latest()->take(3)->get();

        $absenUser = AbsenUser::with("absen")->where("user_id", auth()->user()->id)->get();
        return Inertia::render('Siswa/Dashboard/Beranda', [
            'materis' => $materis,
            'absensTerakhir' => $absensTerakhir,
            'absenLampau' => $absenLampau,
            'absenUser' => $absenUser,
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

        return redirect()->route('dashbboard.siswa');
    }

    public function absen()
    {
        $absens = AbsenUser::where([
            'user_id' => auth()->user()->id
        ])
            ->with('absen')
            ->get();

        return Inertia::render('Siswa/Dashboard/DetailAbsensi', [
            'absens' => $absens
        ]);
    }


    public function paduanGuru()
    {
        $filePath = public_path('PanduanGuru.pdf');

        if (file_exists($filePath)) {
            return response()->download($filePath, 'PanduanGuru.pdf', [
                'Content-Type' => 'application/pdf'
            ]);
        } else {
            return response()->json(['message' => 'File not found.'], 404);
        }
    }
}
