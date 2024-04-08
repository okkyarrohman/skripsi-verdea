<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Absen extends Model
{
    use HasFactory;

    protected $table = 'absens';

    protected $fillable = [
        'pertemuan',
        'tanggal',
        'tenggat',
    ];

    public function absenUser()
    {
        return $this->hasMany(AbsenUser::class);
    }
}
