<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $fillable = [
        'name',
        'title',
        'bio',
        'photo',
        'linkedin',
        'youtube',
        'instagram',
        'website1',
        'website2',
        'github'
    ];
}
