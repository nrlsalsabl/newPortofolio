import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Globe, FolderGit, Mail, Menu, X } from 'lucide-react';

const API = 'http://127.0.0.1:8000/api';

export default function Portfolio() {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, skillsRes, expRes, projectRes] = await Promise.all([
          axios.get(`${API}/public/profile`),
          axios.get(`${API}/public/skills`),
          axios.get(`${API}/public/work-experiences`),
          axios.get(`${API}/public/projects`),
        ]);

        setProfile(profileRes.data);
        setSkills(skillsRes.data);
        setExperiences(expRes.data);
        setProjects(projectRes.data);
      } catch (err) {
        console.error(err);
        setError('Tidak dapat memuat data. Pastikan backend Laravel berjalan.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-midnight text-slate-100 overflow-x-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-xl border-b border-slate-800/50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent"
            >
              {profile?.name?.split(' ')[0] || 'Portfolio'}
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-300 hover:text-sky-400 transition-colors">About</a>
              <a href="#skills" className="text-slate-300 hover:text-sky-400 transition-colors">Skills</a>
              <a href="#experience" className="text-slate-300 hover:text-sky-400 transition-colors">Experience</a>
              <a href="#projects" className="text-slate-300 hover:text-sky-400 transition-colors">Projects</a>
              <a href="#contact" className="text-slate-300 hover:text-sky-400 transition-colors">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-sky-400 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4"
            >
              <div className="flex flex-col space-y-4">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-sky-400 transition-colors">About</a>
                <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-sky-400 transition-colors">Skills</a>
                <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-sky-400 transition-colors">Experience</a>
                <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-sky-400 transition-colors">Projects</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-sky-400 transition-colors">Contact</a>
              </div>
            </motion.nav>
          )}
        </div>
      </motion.header>

      <div className="relative z-10">
        {/* Hero Section */}
        <section id="about" className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
          <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_25%)] opacity-80 pointer-events-none" />
          <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-slate-800 bg-slate-950/80 shadow-glow backdrop-blur-xl p-10"
            >
              <div className="flex flex-col items-center gap-6 text-center">
                {profile?.photo ? (
                  <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    src={`http://127.0.0.1:8000/storage/${profile.photo}`}
                    alt={profile.name}
                    className="h-40 w-40 rounded-full border-4 border-sky-400 object-cover shadow-2xl"
                  />
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="h-40 w-40 rounded-full border-4 border-sky-400 bg-slate-900/70 flex items-center justify-center"
                  >
                    <span className="text-4xl font-bold text-sky-400">
                      {profile?.name?.charAt(0) || 'J'}
                    </span>
                  </motion.div>
                )}

                <div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-sky-300 uppercase tracking-[0.4em] text-sm font-semibold mb-4"
                  >
                    Portfolio
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-5xl font-black tracking-tight text-white sm:text-6xl"
                  >
                    {profile?.name || 'Nama Kamu'}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto"
                  >
                    {profile?.title || 'Frontend Developer • UI/UX Enthusiast • Built with React & Laravel'}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-6 text-slate-400 max-w-3xl mx-auto leading-8"
                  >
                    {profile?.bio || 'Selamat datang! Jelajahi proyek, pengalaman, dan kemampuan yang sudah saya kembangkan untuk membawa ide menjadi produk nyata.'}
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 rounded-3xl border border-red-500/30 bg-red-500/10 p-5 text-red-200"
              >
                {error}
              </motion.div>
            )}
          </div>
        </section>

        <section className="relative max-w-6xl mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-8 md:grid-cols-3"
          >
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-glow">
              <p className="text-sky-300 uppercase text-xs tracking-[0.25em] mb-4">Skills</p>
              <h2 className="text-3xl font-semibold text-white mb-3">Keahlian Utama</h2>
              <p className="text-slate-400 leading-7">Berbagai skill development dan desain yang saya gunakan untuk membangun aplikasi modern dan experience yang solid.</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-glow">
              <p className="text-sky-300 uppercase text-xs tracking-[0.25em] mb-4">Experience</p>
              <h2 className="text-3xl font-semibold text-white mb-3">Pengalaman Kerja</h2>
              <p className="text-slate-400 leading-7">Proyek nyata dengan tim ataupun freelance, mulai dari pengembangan web hingga integrasi API dan deployment di production.</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-glow">
              <p className="text-sky-300 uppercase text-xs tracking-[0.25em] mb-4">Projects</p>
              <h2 className="text-3xl font-semibold text-white mb-3">Proyek Terbaru</h2>
              <p className="text-slate-400 leading-7">Aplikasi dan website yang saya bangun dengan fokus pada performa, UX, dan tampilan profesional.</p>
            </div>
          </motion.div>
        </section>

        <section className="relative max-w-6xl mx-auto px-6 pb-24">
          <div className="grid gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-glow"
            >
              <div className="flex items-center justify-between gap-4 mb-8">
                <div>
                  <p className="text-sky-300 uppercase tracking-[0.3em] text-sm">Skills</p>
                  <h2 className="text-3xl font-semibold text-white mt-3">Apa yang saya kuasai</h2>
                </div>
                <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">{skills.length} item</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {skills.length > 0 ? (
                  skills.map((skill) => (
                    <div key={skill.id} className="rounded-3xl border border-slate-800 bg-slate-900 p-5 transition hover:-translate-y-1 hover:border-sky-500/30">
                      <p className="text-sky-300 text-sm uppercase tracking-[0.24em] mb-3">{skill.name}</p>
                      <p className="text-slate-300 leading-7">{skill.description || 'Deskripsi belum tersedia.'}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-400">Data skill belum tersedia atau sedang dimuat.</p>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-glow"
            >
              <div className="flex items-center justify-between gap-4 mb-8">
                <div>
                  <p className="text-sky-300 uppercase tracking-[0.3em] text-sm">Work Experience</p>
                  <h2 className="text-3xl font-semibold text-white mt-3">Pengalaman Kerja</h2>
                </div>
                <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">{experiences.length} entry</span>
              </div>
              <div className="space-y-4">
                {experiences.length > 0 ? (
                  experiences.map((item) => (
                    <div key={item.id} className="rounded-3xl border border-slate-800 bg-slate-900 p-5 transition hover:-translate-y-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl font-semibold text-white">{item.company_name}</h3>
                        <span className="text-slate-400">{item.start_date} - {item.end_date || 'Present'}</span>
                      </div>
                      <p className="text-sky-300 mt-2">{item.position}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-400">Belum ada pengalaman kerja yang terdaftar.</p>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-glow"
            >
              <div className="flex items-center justify-between gap-4 mb-8">
                <div>
                  <p className="text-sky-300 uppercase tracking-[0.3em] text-sm">Projects</p>
                  <h2 className="text-3xl font-semibold text-white mt-3">Beberapa Project</h2>
                </div>
                <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">{projects.length} project</span>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                {projects.length > 0 ? (
                  projects.map((project) => (
                    <div key={project.id} className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition hover:-translate-y-1">
                      {project.image ? (
                        <img src={`http://127.0.0.1:8000/storage/${project.image}`} alt={project.name} className="h-56 w-full object-cover" />
                      ) : (
                        <div className="h-56 w-full bg-slate-800" />
                      )}
                      <div className="p-6">
                        <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                        <p className="text-slate-400 mt-3 leading-7">{project.description || 'Deskripsi proyek belum tersedia.'}</p>
                        {project.live_link && (
                          <a
                            href={project.live_link}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex rounded-2xl bg-sky-500/90 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
                          >
                            Lihat Project
                          </a>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-400">Belum ada project yang ditambahkan.</p>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative max-w-6xl mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-glow"
          >
            <div className="text-center mb-12">
              <p className="text-sky-300 uppercase tracking-[0.3em] text-sm">Get In Touch</p>
              <h2 className="text-3xl font-semibold text-white mt-3">Let's Connect</h2>
              <p className="text-slate-400 mt-2">Find me on social media or send me an email</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {profile?.linkedin && (
                <motion.a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 p-6 rounded-3xl border border-slate-800 bg-slate-900 hover:border-sky-500/50 transition-all group"
                >
                  <div className="p-3 rounded-2xl bg-sky-500/20 group-hover:bg-sky-500/30 transition-colors">
                    <Globe className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">LinkedIn</p>
                    <p className="text-slate-400 text-sm">Professional Network</p>
                  </div>
                </motion.a>
              )}

              {profile?.github && (
                <motion.a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 p-6 rounded-3xl border border-slate-800 bg-slate-900 hover:border-slate-400/50 transition-all group"
                >
                  <div className="p-3 rounded-2xl bg-slate-600/20 group-hover:bg-slate-600/30 transition-colors">
                    <FolderGit className="w-6 h-6 text-slate-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">GitHub</p>
                    <p className="text-slate-400 text-sm">Code Repository</p>
                  </div>
                </motion.a>
              )}

              {profile?.youtube && (
                <motion.a
                  href={profile.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 p-6 rounded-3xl border border-slate-800 bg-slate-900 hover:border-red-500/50 transition-all group"
                >
                  <div className="p-3 rounded-2xl bg-red-500/20 group-hover:bg-red-500/30 transition-colors">
                    <Globe className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">YouTube</p>
                    <p className="text-slate-400 text-sm">Video Content</p>
                  </div>
                </motion.a>
              )}

              {profile?.instagram && (
                <motion.a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 p-6 rounded-3xl border border-slate-800 bg-slate-900 hover:border-pink-500/50 transition-all group"
                >
                  <div className="p-3 rounded-2xl bg-pink-500/20 group-hover:bg-pink-500/30 transition-colors">
                    <Globe className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Instagram</p>
                    <p className="text-slate-400 text-sm">Social Media</p>
                  </div>
                </motion.a>
              )}

              {profile?.website1 && (
                <motion.a
                  href={profile.website1}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 p-6 rounded-3xl border border-slate-800 bg-slate-900 hover:border-green-500/50 transition-all group"
                >
                  <div className="p-3 rounded-2xl bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
                    <Globe className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Website</p>
                    <p className="text-slate-400 text-sm">Personal Site</p>
                  </div>
                </motion.a>
              )}

              {profile?.website2 && (
                <motion.a
                  href={profile.website2}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 p-6 rounded-3xl border border-slate-800 bg-slate-900 hover:border-purple-500/50 transition-all group"
                >
                  <div className="p-3 rounded-2xl bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                    <Globe className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Blog</p>
                    <p className="text-slate-400 text-sm">Writing & Thoughts</p>
                  </div>
                </motion.a>
              )}
            </div>
          </motion.div>
        </section>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-xl"
      >
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent mb-4"
            >
              {profile?.name || 'Portfolio'}
            </motion.div>
            <p className="text-slate-400 mb-6 max-w-md mx-auto">
              Building digital experiences with passion and precision.
            </p>
            <div className="flex justify-center gap-6 mb-8">
              {profile?.linkedin && (
                <motion.a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-2 text-slate-400 hover:text-sky-400 transition-colors"
                >
                  <Globe size={20} />
                </motion.a>
              )}
              {profile?.github && (
                <motion.a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-2 text-slate-400 hover:text-slate-300 transition-colors"
                >
                  <FolderGit size={20} />
                </motion.a>
              )}
              {profile?.youtube && (
                <motion.a
                  href={profile.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-2 text-slate-400 hover:text-red-400 transition-colors"
                >
                  <Globe size={20} />
                </motion.a>
              )}
              {profile?.instagram && (
                <motion.a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-2 text-slate-400 hover:text-pink-400 transition-colors"
                >
                  <Globe size={20} />
                </motion.a>
              )}
            </div>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} {profile?.name || 'Portfolio'}. Built with React & Laravel.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}