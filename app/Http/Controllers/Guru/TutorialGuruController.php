<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Tutorial;
use Illuminate\Http\Request;
use Inertia\Inertia;


class TutorialGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tutorials = Tutorial::all();

        return Inertia::render('Guru/Tutorial/Tutorial', [
            'tutorials' => $tutorials
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Guru/Tutorial/TambahTutorial');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Tutorial::create([
            'judul' => $request->input('judul'),
            'deskripsi' => $request->input('deskripsi'),
            'link' => $request->input('link'),
        ]);

        return redirect()->route('tutorial-guru.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $tutorials = Tutorial::where('id', $id)->first();

        return Inertia::render('Guru/Tutorial/DetailTutorial', [
            'tutorials' => $tutorials
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $tutorials = Tutorial::where('id', $id)->first();

        return Inertia::render('Guru/Tutorial/EditTutorial', [
            'tutorials' => $tutorials
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $tutorial = Tutorial::find($request->id);
        $tutorial->judul = $request->judul;
        $tutorial->deskripsi = $request->deskripsi;
        $tutorial->link = $request->link;
        $tutorial->save();

        return redirect()->route('tutorial-guru.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $tutorial = Tutorial::find($id);
        $tutorial->delete();

        return redirect()->route('tutorial-guru.index');
    }
}
