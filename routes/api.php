<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\WorkExperienceController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProfileController;


use App\Models\Profile;
use App\Models\Skill;
use App\Models\WorkExperience;
use App\Models\Project;

Route::get('/public/profile', function () {
    return Profile::first();
});

Route::get('/public/skills', function () {
    return Skill::all();
});

Route::get('/public/work-experiences', function () {
    return WorkExperience::all();
});

Route::get('/public/projects', function () {
    return Project::all();
});

Route::post('/login', [AuthController::class, 'login']);

Route::get('/skills', [SkillController::class, 'index']);
Route::get('/work-experiences', [WorkExperienceController::class, 'index']);
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/profile', [ProfileController::class, 'show']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::apiResource('skills', SkillController::class)->except(['index']);
    Route::apiResource('work-experiences', WorkExperienceController::class)->except(['index']);
    Route::apiResource('projects', ProjectController::class)->except(['index']);

    Route::put('/profile', [ProfileController::class, 'update']);
});
