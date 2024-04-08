<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Tugas;
use App\Models\TugasUser;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class TugasGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tugases = Tugas::all();

        return Inertia::render('Guru/Tugas/Tugas', [
            'tugases' => $tugases
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Guru/Tugas/TambahTugas');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Tugas::create([
            'nama' => $request->input('nama'),
            'tenggat' => $request->input('tenggat'),
            'soal1' => $request->input('soal1'),
            'soal2' => $request->input('soal2'),
            'soal3' => $request->input('soal3'),
            'soal4' => $request->input('soal4'),
            'soal5' => $request->input('soal5'),
            'soal6' => $request->input('soal6'),
        ]);

        return redirect()->route('tugas-guru.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $tugasUser = TugasUser::where('tugas_id', $id)->with('tugas')->get();

        return Inertia::render('Guru/Tugas/HasilTugas', [
            'tugasUser' => $tugasUser,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $tugases = Tugas::where('id', $id)->first();

        return Inertia::render('Guru/Tugas/EditTugas', [
            'tugases' => $tugases,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $tugas = Tugas::find($request->id);
        $tugas->nama = $request->nama;
        $tugas->tenggat = $request->tenggat;
        $tugas->soal1 = $request->soal1;
        $tugas->soal2 = $request->soal2;
        $tugas->soal3 = $request->soal3;
        $tugas->soal4 = $request->soal4;
        $tugas->soal5 = $request->soal5;
        $tugas->soal6 = $request->soal6;
        $tugas->save();

        return redirect()->route('tugas-guru.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $tugas = Tugas::find($id);
        $tugas->delete();

        return redirect()->route('tugas-guru.index');
    }


    public function updateNilai(Request $request)
    {
        $tugasUser = TugasUser::find($request->id);
        $tugasUser->nilai = $request->nilai;
        $tugasUser->feedback = $request->feedback;
        $tugasUser->save();

        return redirect()->route('tugas-guru.index');
    }
}
