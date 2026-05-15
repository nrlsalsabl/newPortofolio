import CrudSection from '../components/CrudSection';

export default function Dashboard() {
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-midnight text-slate-100 py-14 px-4">
      <div className="mx-auto max-w-5xl space-y-8 rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-glow">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sky-400 uppercase tracking-[0.35em] text-sm">Admin Dashboard</p>
            <h1 className="text-4xl font-semibold text-white">Kelola Portfolio</h1>
            <p className="text-slate-400 mt-2">Tambah, edit, dan hapus data skill, pengalaman, atau proyek dengan mudah.</p>
          </div>
          <button
            onClick={logout}
            className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            Logout
          </button>
        </div>

        <CrudSection
          title="Skills"
          endpoint="skills"
          fields={[
            { name: 'name', label: 'Nama Skill' },
            { name: 'description', label: 'Deskripsi' },
            { name: 'icon', label: 'Icon' },
          ]}
        />

        <CrudSection
          title="Work Experience"
          endpoint="work-experiences"
          fields={[
            { name: 'company_name', label: 'Nama Perusahaan' },
            { name: 'position', label: 'Jabatan' },
            { name: 'start_date', label: 'Mulai', type: 'date' },
            { name: 'end_date', label: 'Selesai', type: 'date' },
          ]}
        />

        <CrudSection
          title="Projects"
          endpoint="projects"
          fields={[
            { name: 'name', label: 'Nama Project' },
            { name: 'icons', label: 'Icons (pisahkan koma)' },
            { name: 'description', label: 'Deskripsi' },
            { name: 'live_link', label: 'Live Link' },
          ]}
        />
      </div>
    </div>
  );
}