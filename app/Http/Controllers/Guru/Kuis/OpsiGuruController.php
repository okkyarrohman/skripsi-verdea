<?php

namespace App\Http\Controllers\Guru\Kuis;

use App\Http\Controllers\Controller;
use App\Models\Opsi;
use App\Models\Soal;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OpsiGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $opsis = Opsi::all();

        return Inertia::render('', [
            'opsis' => $opsis
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return Inertia::render('', [
            'soals' => Soal::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Opsi::create([
            'soal_id' => $request->input('soal_id'),
            'opsi' => $request->input('opsi'),
            'point' => $request->input('point'),
        ]);

        return redirect()->route('opsi.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $opsis = Opsi::where('id', $id)->first();

        return Inertia::render('', [
            'opsis' => $opsis
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $opsis = Opsi::where('id', $id)->first();

        return Inertia::render('', [
            'opsis' => $opsis,
            'soals' => Soal::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $opsi = Opsi::find($request->id);
        $opsi->soal_id = $request->soal_id;
        $opsi->opsi = $request->opsi;
        $opsi->point = $request->point;
        $opsi->save();

        return redirect()->route('opsi.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $opsi = Opsi::find($id);
        $opsi->delete();

        return redirect()->route('opsi.index');
    }
}
