<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Profile;
use App\Models\Skill;
use App\Models\WorkExperience;
use App\Models\Project;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => bcrypt('password123'),
        ]);

        Profile::create([
            'name' => 'John Doe',
            'title' => 'Full Stack Developer & UI/UX Designer',
            'bio' => 'Saya adalah developer full stack dengan pengalaman 5+ tahun dalam membangun aplikasi web modern. Spesialisasi saya meliputi React, Laravel, Node.js, dan desain UI/UX yang user-friendly. Saya senang mengubah ide kompleks menjadi solusi digital yang elegan dan efisien.',
            'photo' => null,
            'linkedin' => 'https://linkedin.com/in/johndoe',
            'youtube' => 'https://youtube.com/@johndoe',
            'instagram' => 'https://instagram.com/johndoe',
            'website1' => 'https://johndoe.dev',
            'website2' => 'https://blog.johndoe.dev',
            'github' => 'https://github.com/johndoe',
        ]);

        Skill::create([
            'name' => 'React',
            'description' => 'Framework JavaScript untuk membangun user interface yang interaktif dan responsif.',
            'icon' => 'react',
        ]);

        Skill::create([
            'name' => 'Laravel',
            'description' => 'Framework PHP untuk pengembangan web yang elegan dan ekspresif.',
            'icon' => 'laravel',
        ]);

        Skill::create([
            'name' => 'Node.js',
            'description' => 'Runtime JavaScript untuk server-side development dan API.',
            'icon' => 'nodejs',
        ]);

        Skill::create([
            'name' => 'Tailwind CSS',
            'description' => 'Framework CSS utility-first untuk styling yang cepat dan konsisten.',
            'icon' => 'tailwind',
        ]);

        Skill::create([
            'name' => 'MySQL',
            'description' => 'Database relasional untuk penyimpanan data yang handal.',
            'icon' => 'mysql',
        ]);

        Skill::create([
            'name' => 'Git',
            'description' => 'Version control system untuk kolaborasi dan manajemen kode.',
            'icon' => 'git',
        ]);

        WorkExperience::create([
            'company_name' => 'TechCorp Indonesia',
            'position' => 'Senior Full Stack Developer',
            'start_date' => '2022-01-15',
            'end_date' => null,
        ]);

        WorkExperience::create([
            'company_name' => 'StartupXYZ',
            'position' => 'Frontend Developer',
            'start_date' => '2020-06-01',
            'end_date' => '2021-12-31',
        ]);

        WorkExperience::create([
            'company_name' => 'Digital Agency ABC',
            'position' => 'Junior Web Developer',
            'start_date' => '2019-03-01',
            'end_date' => '2020-05-31',
        ]);

        Project::create([
            'name' => 'E-Commerce Platform',
            'description' => 'Platform e-commerce lengkap dengan fitur keranjang belanja, pembayaran online, dan dashboard admin. Dibangun menggunakan React untuk frontend dan Laravel untuk backend API.',
            'icons' => ['react', 'laravel', 'mysql'],
            'live_link' => 'https://example-ecommerce.com',
        ]);

        Project::create([
            'name' => 'Task Management App',
            'description' => 'Aplikasi manajemen tugas dengan fitur real-time collaboration, drag-and-drop interface, dan integrasi dengan calendar. Menggunakan Node.js untuk backend dan React untuk frontend.',
            'icons' => ['react', 'nodejs', 'mongodb'],
            'live_link' => 'https://example-taskapp.com',
        ]);

        Project::create([
            'name' => 'Portfolio Website',
            'description' => 'Website portfolio personal dengan animasi smooth, dark theme, dan responsive design. Dibangun menggunakan React, Tailwind CSS, dan Framer Motion.',
            'icons' => ['react', 'tailwindcss', 'framer-motion'],
            'live_link' => 'https://example-portfolio.com',
        ]);

        Project::create([
            'name' => 'Weather Dashboard',
            'description' => 'Dashboard cuaca real-time dengan forecast 7 hari, maps integration, dan notifikasi cuaca ekstrem. Menggunakan OpenWeatherMap API dan Chart.js untuk visualisasi.',
            'icons' => ['javascript', 'chartjs', 'api'],
            'live_link' => 'https://example-weather.com',
        ]);
    }
}
