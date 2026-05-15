<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Project::latest()->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'icons' => 'nullable|array',
            'description' => 'required',
            'live_link' => 'nullable|url',
        ]);

        return Project::create($data);
    }

    public function show(Project $project)
    {
        return $project;
    }

    public function update(Request $request, Project $project)
    {
        $data = $request->validate([
            'name' => 'required',
            'icons' => 'nullable|array',
            'description' => 'required',
            'live_link' => 'nullable|url',
        ]);

        $project->update($data);
        return $project;
    }

    public function destroy(Project $project)
    {
        $project->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
