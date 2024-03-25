<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\Tugas;
use App\Models\TugasUser;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TugasSiswaController extends Controller
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
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Request column input type file
        if ($request->hasFile('fileTugas')) {
            $fileTugas = $request->file('fileTugas');
            $extension = $fileTugas->getClientOriginalName();
            $fileTugasName = date('YmdHis') . "." . $extension;
            $fileTugas->move(storage_path('app/public/tugas/fileTugas/'), $fileTugasName);
        }

        TugasUser::create([
            'tugas_id' => $request->input('tugas_id'),
            'user_id' => auth()->user()->id,
            'fileTugas' => $fileTugasName,
            'waktu_submit' => now()->format('Y-m-d H:i:s'),
        ]);

        return redirect()->route('tugas.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $tugasUser = TugasUser::where('tugas_id', $id)->with('tugas')->get();

        return Inertia::render('', [
            'tugasUser' => $tugasUser
        ]);
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
