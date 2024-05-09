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
        $tugases = Tugas::with('tugasUser')->get();

        return Inertia::render('Siswa/Tugas/Tugas', [
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

        // dd($request->all());
        TugasUser::create([
            'tugas_id' => $request->input('tugas_id'),
            'user_id' => auth()->user()->id,
            'tugas1' => $request->input('tugas1'),
            'tugas2' => $request->input('tugas2'),
            'tugas3' => $request->input('tugas3'),
            'tugas4' => $request->input('tugas4'),
            'tugas5' => $request->input('tugas5'),
            'tugas6' => $request->input('tugas6'),
            'waktu_submit1' => now()->format('Y-m-d H:i:s'),
            'waktu_submit2' => now()->format('Y-m-d H:i:s'),
            'waktu_submit3' => now()->format('Y-m-d H:i:s'),
            'waktu_submit4' => now()->format('Y-m-d H:i:s'),
            'waktu_submit5' => now()->format('Y-m-d H:i:s'),
            'waktu_submit6' => now()->format('Y-m-d H:i:s'),
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
        $tugasUser = TugasUser::where('tugas_id', $id)->with('tugas')->first();
        $tugas = Tugas::findOrFail($id);

        return Inertia::render('Siswa/Tugas/DetailTugas', [
            'tugasUser' => $tugasUser,
            'tugases' => $tugas
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
