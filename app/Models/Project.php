<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'name',
        'icons',
        'description',
        'live_link'
    ];

    protected $casts = [
        'icons' => 'array',
    ];
}
