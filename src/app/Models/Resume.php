<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    use HasFactory;

    protected $fillable = [
        'year',
        'q_no',
        'c_no',
        'unit',
        'last_no',
        'user_id'
    ];
}
