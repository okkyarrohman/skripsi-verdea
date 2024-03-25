<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Materi;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class MateriGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $materis = Materi::all();

        return Inertia::render('', [
            'materis' => $materis
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render();
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
            $pdf->move(storage_path('app/public/materi/pdf/'), $pdfName);
        }

        Materi::create([
            'judul' => $request->input('judul'),
            'deskripsi' => $request->input('deskripsi'),
            'pdf' => $pdfName
        ]);

        return redirect()->route('materi-guru.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $materis = Materi::where('id', $id)->first();

        return Inertia::render('', [
            'materis' => $materis
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $materis = Materi::where('id', $id)->first();

        return Inertia::render('', [
            'materis' => $materis
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $materi = Materi::find($request->id);
        $materi->judul = $request->judul;
        $materi->deskripsi = $request->deskripsi;

        // Request column input type file
        if ($request->hasFile('pdf')) {
            $pdf = $request->file('pdf');
            $extension = $pdf->getClientOriginalName();
            $pdfName = date('YmdHis') . "." . $extension;
            $pdf->move(storage_path('app/public/materi/pdf/'), $pdfName);
            $materi->pdf = $pdfName;
        }

        return redirect()->route('materi-guru.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $materi = Materi::find($id);

        if (Storage::exists('public/materi/pdf/' . $materi->pdf)) {
            Storage::delete('public/materi/pdf/' . $materi->pdf);
        }
        $materi->delete();
        return redirect()->route('materi-guru.index');
    }
}
