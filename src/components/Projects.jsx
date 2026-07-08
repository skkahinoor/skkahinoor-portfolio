import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projects = [
  {
    title: 'MyBookHub',
    tagline: "India's Smart Marketplace for Books",
    description: 'A full-featured online book marketplace where students can buy new and used books at up to 70% off, sell old books, and access 291,357+ books across all categories. Features vendor login, student app integration, and multiple subject filters.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'REST API'],
    liveUrl: 'https://mybookhub.in/',
    githubUrl: 'https://github.com/skkahinoor/mybookhub',
    image: 'https://mybookhub.in/favicon.ico',
    previewImage: null,
    accent: '#3b82f6',
    badge: 'Live Project',
    stats: [
      { label: 'Books Listed', value: '291K+' },
      { label: 'Used Books Up To', value: '70% Off' },
    ],
    emoji: '📚',
  },
  {
    title: 'FreeBazar',
    tagline: 'A Movement Against Inflation',
    description: 'A commercial eCommerce platform for groceries and FMCG products with the tagline "Let Your Spending be Your Earning." Customers can shop for daily essentials, avail payback offers, and track services. Full eCommerce flow with login, register, and product categories.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'jQuery', 'AJAX', 'cPanel'],
    liveUrl: 'https://freebazar.co.in/',
    githubUrl: '#',
    image: null,
    previewImage: null,
    accent: '#f59e0b',
    badge: 'Live Project',
    stats: [
      { label: 'Type', value: 'eCommerce' },
      { label: 'Category', value: 'Grocery' },
    ],
    emoji: '🛒',
  },
];

function TiltCard({ project, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      className="project-card"
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.15, duration: 0.7, type: 'spring', stiffness: 80 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Top accent glow line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
        zIndex: 10,
      }} />

      {/* Preview image area */}
      <div className="project-image" style={{
        background: `linear-gradient(135deg, ${project.accent}18, rgba(0,0,0,0.3))`,
        borderBottom: `1px solid ${project.accent}30`,
        transform: 'translateZ(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '24px 28px',
        minHeight: '110px',
      }}>
        <div>
          <div style={{ fontSize: '40px', marginBottom: '8px' }}>{project.emoji}</div>
          <span style={{
            fontSize: '11px',
            padding: '3px 10px',
            background: `${project.accent}20`,
            border: `1px solid ${project.accent}50`,
            borderRadius: '999px',
            color: project.accent,
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
          }}>{project.badge}</span>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          {project.stats.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '18px', fontWeight: 700, color: project.accent, fontFamily: 'var(--font-display)' }}>{s.value}</div>
              <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="project-content" style={{ transform: 'translateZ(30px)', padding: '24px 28px' }}>
        <h3 className="project-title" style={{ color: '#fff', marginBottom: '4px' }}>{project.title}</h3>
        <p style={{ fontSize: '12px', color: project.accent, fontWeight: 600, marginBottom: '12px', fontFamily: 'var(--font-mono)' }}>
          {project.tagline}
        </p>
        <p className="project-description">{project.description}</p>

        <div className="project-tech" style={{ margin: '16px 0' }}>
          {project.tech.map(t => (
            <motion.span
              className="project-tech-tag"
              key={t}
              whileHover={{ scale: 1.1, borderColor: project.accent }}
            >{t}</motion.span>
          ))}
        </div>

        <div className="project-links" style={{ marginTop: '16px' }}>
          <motion.a
            href={project.liveUrl}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, color: project.accent }}
            style={{
              background: `${project.accent}15`,
              border: `1px solid ${project.accent}40`,
              padding: '8px 16px',
              borderRadius: '8px',
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Site
          </motion.a>
          {project.githubUrl !== '#' && (
            <motion.a
              href={project.githubUrl}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '8px 16px',
                borderRadius: '8px',
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
              </svg>
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container" style={{ perspective: '1200px' }}>
        <motion.div
          className="reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">#5 — Projects</p>
          <h2 className="section-title">Things I&apos;ve built</h2>
        </motion.div>

        <div className="projects-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))' }}>
          {projects.map((project, index) => (
            <TiltCard project={project} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
