import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Globe,
  Download,
  FileText,
  Code2
} from 'lucide-react';

// --- DONNÉES ---

const projects = [
  {
    title: "Cqrdn",
    category: "Studio Design & Innovation",
    description: "Expérience numérique repoussant les limites de l'UI/UX. Minimalisme et animations WebGL.",
    tags: ["Next.js", "WebGL", "Design System"],
    link: "https://cqrdn.vercel.app/",
    image: "https://image.thum.io/get/width/800/crop/600/noanimate/https://cqrdn.vercel.app/"
  },
  {
    title: "Bureaux du Rap",
    category: "Média & Culture Urbaine",
    description: "Plateforme immersive connectant les artistes et leur audience. Interface React haute performance.",
    tags: ["React", "News", "Culture"],
    link: "https://gwendalproust4-design.github.io/bureau-du-rap-v2/",
    image: "https://image.thum.io/get/width/800/crop/600/noanimate/https://gwendalproust4-design.github.io/bureau-du-rap-v2/"
  }
];

const skills = {
  frontend: [
    { name: "HTML / CSS", level: 90 },
    { name: "JavaScript / React", level: 85 },
    { name: "Figma (UI/UX)", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 75 },
    { name: "PHP / Symfony", level: 70 },
    { name: "SQL / NoSQL", level: 65 },
    { name: "Python", level: 60 },
  ],
  tools: [
    { name: "Bash / Linux", level: 70 },
    { name: "Git / GitHub", level: 80 },
    { name: "VS Code", level: 90 },
  ]
};

const App = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-black selection:bg-white/20 text-gray-200">

      {/* --- FOND ANIMÉ --- */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-white rounded-full mix-blend-overlay filter blur-[150px] opacity-10 animate-blob-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-gray-600 rounded-full mix-blend-overlay filter blur-[120px] opacity-10 animate-blob-slow animation-delay-4000"></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center">
        <GlassContainer className="px-8 py-3 flex items-center gap-4 !rounded-full !bg-black/40 border-white/5">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
          <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-white/90">
            Portfolio de Gwendal Loichot-Proust
          </span>
        </GlassContainer>
      </nav>

      {/* --- LAYOUT PRINCIPAL --- */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row gap-8 p-4 lg:p-8 pt-24 lg:pt-32 max-w-7xl mx-auto">

        {/* --- COLONNE GAUCHE : IDENTITÉ & DOCUMENTS --- */}
        <motion.header
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/3 lg:sticky lg:top-32 lg:h-fit flex flex-col gap-6"
        >
          <GlassContainer className="p-8 md:p-10 flex flex-col items-start">

            {/* Photo Profil */}
            <div className="relative w-32 h-32 mb-8 rounded-[2rem] p-1 bg-gradient-to-b from-white/10 to-transparent border border-white/20 shadow-inner overflow-hidden group">
              <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative z-10 bg-gray-900">
                <img
                  src="/profile.jpg"
                  alt="Gwendal Loichot-Proust"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop"; }}
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-2">
              Gwendal
            </h1>
            <h2 className="text-lg text-gray-400 font-light tracking-wide flex items-center gap-3">
              <span className="h-px w-6 bg-gray-600"></span>
              Dév Web
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed font-light text-sm">
              Étudiant en Bachelor Full-Stack. Je conçois des interfaces modernes et performantes en mêlant technique et créativité.
            </p>

            {/* Liens Sociaux MIS À JOUR */}
            <div className="flex gap-3 mt-8 mb-8">
              <SocialButton
                icon={<Github size={18} />}
                label="GitHub"
                href="https://github.com/gwendalproust4-design"
              />
              <SocialButton
                icon={<Linkedin size={18} />}
                label="LinkedIn"
                href="https://www.linkedin.com/in/gwendal-loichot-proust-35922a332/"
              />
              <SocialButton
                icon={<Mail size={18} />}
                label="Email"
                href="mailto:gwendalproust4@gmail.com"
              />
            </div>

            {/* Zone de Téléchargement */}
            <div className="w-full grid grid-cols-2 gap-3 pt-6 border-t border-white/5">
              <DownloadButton label="Mon CV" href="/cv.pdf" />
              <DownloadButton label="Lettre de Motiv." href="/lettre.pdf" />
            </div>

          </GlassContainer>
        </motion.header>

        {/* --- COLONNE DROITE : PROJETS & COMPÉTENCES --- */}
        <main className="w-full lg:w-2/3 flex flex-col gap-8">

          {/* Section Projets */}
          <div className="flex flex-col gap-6">
            <SectionHeader icon={<Globe size={20} />} title="Projets Récents" />
            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>

          {/* Section Compétences */}
          <div className="flex flex-col gap-6 mt-4">
            <SectionHeader icon={<Code2 size={20} />} title="Compétences Techniques" />

            <GlassContainer className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
              <SkillGroup title="Frontend" skills={skills.frontend} />
              <SkillGroup title="Backend" skills={skills.backend} />
              <div className="md:col-span-2 pt-2 border-t border-white/5">
                <SkillGroup title="Outils & DevOps" skills={skills.tools} horizontal />
              </div>
            </GlassContainer>
          </div>

        </main>
      </div>
    </div>
  );
};

// --- COMPOSANTS UI ---

const GlassContainer = ({ children, className = "" }) => (
  <div className={`relative backdrop-blur-3xl bg-[#080808]/80 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden ${className}`}>
    {/* Reflet supérieur */}
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    {children}
  </div>
);

const SectionHeader = ({ icon, title }) => (
  <div className="flex items-center gap-3 px-2 text-white/80">
    {icon}
    <h3 className="text-xl font-bold tracking-tight">{title}</h3>
  </div>
);

const SocialButton = ({ icon, label, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
    whileTap={{ scale: 0.95 }}
    className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
    aria-label={label}
  >
    {icon}
  </motion.a>
);

const DownloadButton = ({ label, href }) => (
  <a
    href={href}
    download
    className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-xs font-medium uppercase tracking-wider text-gray-300 hover:text-white transition-all group"
  >
    <FileText size={14} className="text-gray-500 group-hover:text-white transition-colors" />
    {label}
    <Download size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 group-hover:translate-y-0" />
  </a>
);

// --- COMPOSANTS SKILLS ---

const SkillGroup = ({ title, skills, horizontal = false }) => (
  <div className={`flex flex-col gap-4 ${horizontal ? 'md:flex-row md:items-start md:gap-8' : ''}`}>
    <h4 className={`text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 ${horizontal ? 'md:w-32 md:shrink-0 md:mt-1' : ''}`}>
      {title}
    </h4>
    <div className={`flex flex-col gap-4 w-full ${horizontal ? 'grid grid-cols-1 md:grid-cols-2' : ''}`}>
      {skills.map((skill, i) => (
        <div key={i} className="group">
          <div className="flex justify-between text-xs font-medium text-gray-400 mb-1.5 ml-1">
            <span className="group-hover:text-white transition-colors">{skill.name}</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-white/80 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- COMPOSANTS PROJETS ---

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 + (index * 0.15), duration: 0.6 }}
  >
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
      <GlassContainer className="p-0 hover:border-white/30 transition-all duration-500">

        {/* Zone de l'image (Aperçu) */}
        <div className="relative aspect-video w-full overflow-hidden bg-gray-900 border-b border-white/5">
          <img
            src={project.image}
            alt={`Aperçu de ${project.title}`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
          />

          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <span className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform">
              Voir le site <ArrowUpRight size={16} />
            </span>
          </div>
        </div>

        {/* Contenu textuel */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{project.category}</p>
              <h3 className="text-3xl font-bold text-white group-hover:text-gray-200 transition-colors">{project.title}</h3>
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed mb-6 font-light">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-lg bg-white/5 text-gray-400 border border-white/5 group-hover:border-white/10 group-hover:text-gray-300 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </GlassContainer>
    </a>
  </motion.div>
);

export default App;