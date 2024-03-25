<?php

namespace App\Http\Controllers\Guru\Kuis;

use App\Http\Controllers\Controller;
use App\Models\KategoriKuis as Kategori;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KategoriGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kategoris = Kategori::all();

        return Inertia::render('', [
            'kategoris' => $kategoris
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
        Kategori::create([
            'nama' => $request->input('nama'),
            'tenggat' => $request->input('tenggat'),
            'durasi' => $request->input('durasi'),
        ]);

        return redirect()->route('kategori.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $kategoris = Kategori::where('id', $id)->first();

        return Inertia::render('', [
            'kategoris' => $kategoris
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $kategoris = Kategori::where('id', $id)->first();

        return Inertia::render('', [
            'kategoris' => $kategoris
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $kategori = Kategori::find($request->id);
        $kategori->nama = $request->nama;
        $kategori->tenggat = $request->tenggat;
        $kategori->durasi = $request->durasi;
        $kategori->save();

        return redirect()->route('kategori.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $kategori = Kategori::find($id);
        $kategori->delete();

        return redirect()->route('kategori.index');
    }
}
