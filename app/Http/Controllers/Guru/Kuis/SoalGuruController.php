<?php

namespace App\Http\Controllers\Guru\Kuis;

use App\Http\Controllers\Controller;
use App\Models\KategoriKuis;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Soal;
use Illuminate\Support\Facades\Storage;

class SoalGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $soals = Soal::with('kategoriKuis')->get();

        return Inertia::render('Guru/Kuis/Soal/Soal', [
            'soals' => $soals
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $kategoris = KategoriKuis::all();

        return Inertia::render('Guru/Kuis/Soal/TambahSoal', [
            'kategoris' => $kategoris
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $gambarName = null;

        if ($request->hasFile('gambar')) {
            $gambar = $request->file('gambar');
            $extension = $gambar->getClientOriginalName();
            $gambarName = date('YmdHis') . "." . $extension;
            $gambar->move(storage_path('app/public/soal/gambar/'), $gambarName);
        }

        if ($gambarName !== null) {
            Soal::create([
                'kategori_kuis_id' => $request->input('kategori_kuis_id'),
                'soal' => $request->input('soal'),
                'gambar' => $gambarName
            ]);
        } else {
            Soal::create([
                'kategori_kuis_id' => $request->input('kategori_kuis_id'),
                'soal' => $request->input('soal')
            ]);
        }

        return redirect()->route('soal.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $soals = Soal::where('id', $id)->first();

        return Inertia::render('', [
            'soals' => $soals
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $kategoris = KategoriKuis::all();
        $soals = Soal::where('id', $id)->first();

        return Inertia::render('Guru/Kuis/Soal/EditSoal', [
            'soals' => $soals,
            'kategoris' => $kategoris
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $soal = Soal::find($request->id);
        $soal->kategori_kuis_id = $request->kategori_kuis_id;
        $soal->soal  = $request->soal;

        // Request column input type file
        if ($request->hasFile('gambar')) {
            $gambar = $request->file('gambar');
            $extension = $gambar->getClientOriginalName();
            $gambarName = date('YmdHis') . "." . $extension;
            $gambar->move(storage_path('app/public/soal/gambar/'), $gambarName);
            $soal->gambar = $gambarName;
        }
        $soal->save();

        return redirect()->route('soal.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $soal = Soal::find($id);

        if (Storage::exists('public/soal/gambar/' . $soal->gambar)) {
            Storage::delete('public/soal/gambar/' . $soal->gambar);
        }
        $soal->delete();
        return redirect()->route('soal.index');
    }
}
