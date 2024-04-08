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
        $absens = Absen::all();

        return Inertia::render('Guru/Dashboard/DetailAbsensi', [
            'absens' => $absens
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
        $absens = AbsenUser::where('absen_id', $id)->with('absen')->get();

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
