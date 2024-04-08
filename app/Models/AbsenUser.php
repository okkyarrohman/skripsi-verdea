<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AbsenUser extends Model
{
    use HasFactory;

    protected $table = 'absen_users';

    protected $fillable = [
        'absen_id',
        'user_id',
        'waktu',
        'status',
    ];

    public function absen()
    {
        return $this->belongsTo(Absen::class, 'absen_id');
    }

    public function user()
    {
        return $this->belongsToMany(User::class, 'user_id');
    }
}
