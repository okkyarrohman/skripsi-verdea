<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Referensi;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ReferensiGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $referensis = Referensi::all();

        return Inertia::render('', [
            'referensis' => $referensis
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
        // Request column input type file
        if ($request->hasFile('pdf')) {
            $pdf = $request->file('pdf');
            $extension = $pdf->getClientOriginalName();
            $pdfName = date('YmdHis') . "." . $extension;
            $pdf->move(storage_path('app/public/referensi/pdf/'), $pdfName);
        }

        Referensi::create([
            'judul' => $request->input('judul'),
            'deskripsi' => $request->input('deskripsi'),
            'pdf' => $pdfName
        ]);

        return redirect()->route('referensi-guru.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $referensis = Referensi::where('id', $id)->first();

        return Inertia::render('', [
            'referensis' => $referensis
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $referensis = Referensi::where('id', $id)->first();

        return Inertia::render('', [
            'referensis' => $referensis
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $referensi = Referensi::find($request->id);
        $referensi->judul = $request->judul;
        $referensi->deskripsi = $request->deskripsi;
        // Request column input type file
        if ($request->hasFile('pdf')) {
            $pdf = $request->file('pdf');
            $extension = $pdf->getClientOriginalName();
            $pdfName = date('YmdHis') . "." . $extension;
            $pdf->move(storage_path('app/public/referensi/pdf/'), $pdfName);
            $referensi->pdf = $pdfName;
        }
        $referensi->save();

        return redirect()->route('referensi-guru.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $referensi = Referensi::find($id);

        if (Storage::exists('public/referensi/pdf/' . $referensi->pdf)) {
            Storage::delete('public/referensi/pdf/' . $referensi->pdf);
        }
        $referensi->delete();

        return redirect()->route('referensi-guru.index');
    }
}
