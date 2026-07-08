import { useRef } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';

const experiences = [
  {
    role: 'Full Stack Web Developer',
    company: 'Freelance / Self-Employed',
    period: '2024 — Present',
    current: true,
    icon: '🚀',
    color: '#3b82f6',
    skills: [
      { name: 'Laravel', level: 90 },
      { name: 'PHP', level: 88 },
      { name: 'MySQL', level: 85 },
      { name: 'Tailwind CSS', level: 82 },
    ],
    description: [
      'Building and deploying full-stack web applications for clients using Laravel, PHP, and MySQL',
      'Designing responsive UIs with Tailwind CSS and Bootstrap 5',
      'Integrating REST APIs and third-party services for dynamic web applications',
      'Managing version control and collaboration workflows with Git & GitHub',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Git'],
  },
  {
    role: 'Web Developer Intern',
    company: 'Remote / Project-Based',
    period: '2023 — 2024',
    current: false,
    icon: '💡',
    color: '#8b5cf6',
    skills: [
      { name: 'WordPress', level: 80 },
      { name: 'jQuery', level: 75 },
      { name: 'AJAX', level: 70 },
      { name: 'Bootstrap', level: 78 },
    ],
    description: [
      'Developed multiple web projects using PHP, HTML5, CSS3, and JavaScript',
      'Built WordPress sites with custom themes and plugin integrations',
      'Implemented AJAX-based dynamic content loading for improved user experience',
      'Collaborated with teams using Git version control',
    ],
    tech: ['PHP', 'WordPress', 'jQuery', 'AJAX', 'Bootstrap', 'HTML5'],
  },
];

function AnimatedBar({ name, level, color, isInView }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
        <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{name}</span>
        <span style={{ fontSize: '12px', color, fontWeight: 600 }}>{level}%</span>
      </div>
      <div style={{
        height: '6px',
        background: 'rgba(255,255,255,0.06)',
        borderRadius: '999px',
        overflow: 'hidden',
      }}>
        <motion.div
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${color}aa, ${color})`,
            borderRadius: '999px',
            boxShadow: `0 0 10px ${color}66`,
          }}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        />
      </div>
    </div>
  );
}

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`timeline-row ${isLeft ? 'row-left' : 'row-right'}`}
    >
      {/* Center Timeline Node */}
      <div className="timeline-center-col">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
          className="timeline-icon-node"
          style={{
            borderColor: exp.color,
            background: `radial-gradient(circle, ${exp.color}30, transparent)`,
            boxShadow: `0 0 20px ${exp.color}55, 0 0 40px ${exp.color}22`,
            fontSize: '22px',
          }}
        >
          {exp.icon}
          {exp.current && <span className="timeline-pulse-dot" />}
        </motion.div>
      </div>

      {/* Content Col */}
      <motion.div
        className="timeline-content-col"
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <CardContent exp={exp} isInView={isInView} />
      </motion.div>
    </div>
  );
}

function CardContent({ exp, isInView }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderTop: '1px solid rgba(255,255,255,0.2)',
      borderLeft: '1px solid rgba(255,255,255,0.2)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      borderRadius: '16px',
      padding: '28px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: `linear-gradient(90deg, transparent, ${exp.color}, transparent)`,
      }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-display)' }}>{exp.role}</h3>
        <span style={{
          fontSize: '12px',
          color: exp.color,
          fontFamily: 'var(--font-mono)',
          background: `${exp.color}15`,
          border: `1px solid ${exp.color}40`,
          padding: '3px 10px',
          borderRadius: '999px',
        }}>{exp.period}</span>
      </div>
      <p style={{ fontSize: '13px', color: exp.color, fontWeight: 600, marginBottom: '16px' }}>{exp.company}</p>

      {/* Animated Skill Bars */}
      <div style={{ marginBottom: '20px' }}>
        {exp.skills.map(skill => (
          <AnimatedBar key={skill.name} name={skill.name} level={skill.level} color={exp.color} isInView={isInView} />
        ))}
      </div>

      {/* Description bullets */}
      <ul style={{ paddingLeft: '0', listStyle: 'none', marginBottom: '16px' }}>
        {exp.description.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 + i * 0.1 }}
            style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '6px' }}
          >
            <span style={{ color: exp.color, flexShrink: 0 }}>▸</span>
            {item}
          </motion.li>
        ))}
      </ul>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {exp.tech.map(t => (
          <span key={t} style={{
            fontSize: '11px',
            padding: '3px 10px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '999px',
            color: 'var(--text-muted)',
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start center', 'end center'] });
  const scaleY = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  return (
    <section className="experience" id="experience">
      <div className="container">
        <motion.div
          className="reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">#4 — Experience</p>
          <h2 className="section-title">Where I&apos;ve worked</h2>
        </motion.div>

        <div ref={containerRef} className="timeline-container">
          {/* Animated vertical line */}
          <div className="timeline-line">
            <motion.div
              style={{
                width: '100%',
                background: 'linear-gradient(180deg, #3b82f6, #8b5cf6)',
                originY: 0,
                scaleY,
                height: '100%',
                boxShadow: '0 0 10px #3b82f680',
              }}
            />
          </div>

          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
