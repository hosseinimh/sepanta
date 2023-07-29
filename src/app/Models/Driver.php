<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Driver extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'tbl_drivers';
    protected $fillable = [
        'name',
        'family',
        'national_no',
        'mobile',
        'license_no',
        'card_no',
    ];
}
