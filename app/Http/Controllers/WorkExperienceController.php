<?php

namespace App\Http\Controllers;

use App\Models\WorkExperience;
use Illuminate\Http\Request;

class WorkExperienceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return WorkExperience::latest()->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'company_name' => 'required',
            'position' => 'required',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date',
        ]);

        return WorkExperience::create($data);
    }

    public function show(WorkExperience $workExperience)
    {
        return $workExperience;
    }

    public function update(Request $request, WorkExperience $workExperience)
    {
        $data = $request->validate([
            'company_name' => 'required',
            'position' => 'required',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date',
        ]);

        $workExperience->update($data);
        return $workExperience;
    }

    public function destroy(WorkExperience $workExperience)
    {
        $workExperience->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
