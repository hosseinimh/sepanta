<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tank extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'tbl_tanks';
    protected $fillable = [
        'name',
        'family',
        'national_no',
        'mobile',
        'ir_no',
        'transit_no',
    ];
}
