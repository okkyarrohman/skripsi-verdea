<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\KategoriKuis;
use App\Models\Hasil;
use App\Models\Opsi;
use Inertia\Inertia;

class KuisSiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = KategoriKuis::with(['soal' => function ($query) {
            $query->inRandomOrder()
                ->with(['opsi' => function ($query) {
                    $query->inRandomOrder();
                }]);
        }])
            ->whereHas('soal')
            ->get();


        $hasilKuis = Hasil::with('kategoriKuis')->where([
            'user_id' => auth()->user()->id
        ])->get();

        return Inertia::render('Siswa/Kuis/Kuis', [
            'kategori' => $categories,
            'hasilKuis' => $hasilKuis
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
        // dd($request->all());
        $opsi = Opsi::find(array_values($request->input('soal')));

        $hasilSeluruh = new Hasil();
        $hasilSeluruh->user_id = auth()->user()->id;
        $hasilSeluruh->kategori_kuis_id = $request->kategori_kuis_id;
        $hasilSeluruh->total_points = $opsi->sum('point');
        $hasilSeluruh->save();

        $soal = $opsi->mapWithKeys(function ($option) {
            return [
                $option->soal_id => [
                    'opsi_id' => $option->id,
                    'point' => $option->point
                ],
            ];
        })->toArray();

        $hasilSeluruh->soal()->sync($soal);

        return redirect()->route('kuis.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $categories = KategoriKuis::where('id', $id)->with(['soal' => function ($query) {
            $query->inRandomOrder()
                ->with(['opsi' => function ($query) {
                    $query->inRandomOrder();
                }]);
        }])
            ->whereHas('soal')
            ->get();

        return Inertia::render('Siswa/Kuis/AwalKuis', [
            'kategori' => $categories
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
