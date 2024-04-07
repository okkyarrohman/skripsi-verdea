<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TugasUser extends Model
{
    use HasFactory;

    protected $table = 'tugas_users';

    protected $fillable = [
        'tugas_id',
        'user_id',
        'tugas1',
        'waktu_submit1',
        'tugas2',
        'waktu_submit2',
        'tugas3',
        'waktu_submit3',
        'tugas4',
        'waktu_submit4',
        'tugas5',
        'waktu_submit5',
        'tugas6',
        'waktu_submit6',
        'nilai',
        'feedback'
    ];

    public function tugas()
    {
        return $this->belongsTo(Tugas::class, 'tugas_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
