<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hasil extends Model
{
    use HasFactory;

    protected $table = 'hasils';

    protected $fillable = [
        'kategori_kuis_id',
        'user_id',
        'total_points',
    ];

    public function kategoriKuis()
    {
        return $this->belongsTo(KategoriKuis::class, 'kategori_kuis_id');
    }

    public function user()
    {
        return $this->belongsToMany(User::class, 'user_id');
    }

    public function soal()
    {
        return $this->belongsToMany(Soal::class)->withPivot('opsi_id');
    }
}
