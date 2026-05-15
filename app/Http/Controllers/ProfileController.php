<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
     public function show()
    {
        return Profile::first();
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'title' => 'required',
            'bio' => 'nullable',
            'photo' => 'nullable',
        ]);

        $profile = Profile::first();

        if (!$profile) {
            $profile = Profile::create($data);
        } else {
            $profile->update($data);
        }

        return $profile;
    }
}
