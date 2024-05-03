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
        // Request column input type file
        if ($request->hasFile('tugas1')) {
            $tugas1 = $request->file('tugas1');
            $extension = $tugas1->getClientOriginalName();
            $tugas1Name = date('Ymd') . "." . $extension;
            $tugas1->move(storage_path('app/public/tugas/tugas1/'), $tugas1Name);
        }
        // Request column input type file
        if ($request->hasFile('tugas2')) {
            $tugas2 = $request->file('tugas2');
            $extension = $tugas2->getClientOriginalName();
            $tugas2Name = date('Ymd') . "." . $extension;
            $tugas2->move(storage_path('app/public/tugas/tugas2/'), $tugas2Name);
        }
        // Request column input type file
        if ($request->hasFile('tugas3')) {
            $tugas3 = $request->file('tugas3');
            $extension = $tugas3->getClientOriginalName();
            $tugas3Name = date('Ymd') . "." . $extension;
            $tugas3->move(storage_path('app/public/tugas/tugas3/'), $tugas3Name);
        }

        // Request column input type file
        if ($request->hasFile('tugas4')) {
            $tugas4 = $request->file('tugas4');
            $extension = $tugas4->getClientOriginalName();
            $tugas4Name = date('Ymd') . "." . $extension;
            $tugas4->move(storage_path('app/public/tugas/tugas4/'), $tugas4Name);
        }

        // Request column input type file
        if ($request->hasFile('tugas5')) {
            $tugas5 = $request->file('tugas5');
            $extension = $tugas5->getClientOriginalName();
            $tugas5Name = date('Ymd') . "." . $extension;
            $tugas5->move(storage_path('app/public/tugas/tugas5/'), $tugas5Name);
        }

        // Request column input type file
        if ($request->hasFile('tugas6')) {
            $tugas6 = $request->file('tugas6');
            $extension = $tugas6->getClientOriginalName();
            $tugas6Name = date('Ymd') . "." . $extension;
            $tugas6->move(storage_path('app/public/tugas/tugas6/'), $tugas6Name);
        }

        TugasUser::create([
            'tugas_id' => $request->input('tugas_id'),
            'user_id' => auth()->user()->id,
            'tugas1' => $tugas1Name,
            'tugas2' => $tugas2Name,
            'tugas3' => $tugas3Name,
            'tugas4' => $tugas4Name,
            'tugas5' => $tugas5Name,
            'tugas6' => $tugas6Name,
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

        return Inertia::render('Siswa/Tugas/DetailTugas', [
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
