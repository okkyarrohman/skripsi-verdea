<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tugas extends Model
{
    use HasFactory;

    protected $table = 'tugas';

    protected $fillable = [
        'nama',
        'tenggat',
        'soal1',
        'soal2',
        'soal3',
        'soal4',
        'soal5',
        'soal6',
    ];

    public function tugasUser()
    {
        return $this->hasMany(TugasUser::class);
    }
}
