<?php

namespace App\Http\Controllers\Guru\Kuis;

use App\Http\Controllers\Controller;
use App\Models\Hasil;
use App\Models\KategoriKuis as Kategori;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HasilGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kategoris = Kategori::all();

        return Inertia::render('Guru/Kuis/Hasil/Hasil', [
            'kategoris' => $kategoris
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $hasils = Hasil::where('kategori_kuis_id', $id)->with('kategoriKuis', 'user')->get();


        return Inertia::render('Guru/Kuis/Hasil/DetailHasil', [
            'hasils' => $hasils,
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
