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

        return Inertia::render('', [
            'tugases' => $tugases
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Tugas::create([
            'nama' => $request->input('nama'),
            'deskripsi' => $request->input('deskripsi'),
            'tenggat' => $request->input('tenggat'),
        ]);

        return redirect()->route('tugas-guru.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $tugasUser = TugasUser::where('tugas_id', $id)->with('tugas')->get();

        return Inertia::render('', [
            'tugasUser' => $tugasUser,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $tugases = Tugas::where('id', $id)->first();

        return Inertia::render('', [
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
        $tugas->deskripsi = $request->deskripsi;
        $tugas->tenggat = $request->tenggat;
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
