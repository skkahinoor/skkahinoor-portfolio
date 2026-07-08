import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaPhp, 
  FaLaravel, 
  FaReact, 
  FaBootstrap, 
  FaWordpress, 
  FaGitAlt, 
  FaGithub,
  FaServer,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiJquery, 
  SiMysql, 
  SiJavascript, 
  SiCpanel
} from 'react-icons/si';

const RADIUS = 54;
const STROKE = 8;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function ProgressRing({ percent, label, icon, color, delay = 0 }) {
  const offset = CIRCUMFERENCE - (percent / 100) * CIRCUMFERENCE;

  return (
    <motion.div
      className="bento-item bento-ring"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay, type: "spring", stiffness: 80 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="progress-ring">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle
            className="bg-circle"
            strokeWidth={STROKE}
            r={RADIUS}
            cx="60"
            cy="60"
            transform="rotate(-90 60 60)"
          />
          <motion.circle
            stroke={color}
            strokeWidth={STROKE}
            strokeLinecap="round"
            fill="none"
            r={RADIUS}
            cx="60"
            cy="60"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.5, ease: "easeOut", delay }}
            transform="rotate(-90 60 60)"
          />
        </svg>
        <div className="progress-value" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color }}>{icon}</div>
      </div>
      <h3 className="bento-title" style={{ fontSize: '18px' }}>{label}</h3>
      <p className="bento-desc">{percent}% proficiency</p>
    </motion.div>
  );
}

const frontendSkills = [
  { icon: <SiTailwindcss size={36} />, name: 'Tailwind CSS', color: '#38bdf8' },
  { icon: <FaReact size={36} />, name: 'React Native', color: '#61dafb' },
  { icon: <FaBootstrap size={36} />, name: 'Bootstrap 5', color: '#7952b3' },
  { icon: <SiJquery size={36} />, name: 'jQuery/AJAX', color: '#0769ad' },
];

const toolSkills = [
  { icon: <FaGitAlt size={20} color="#f05032" />, name: 'Git' },
  { icon: <FaGithub size={20} color="#fff" />, name: 'GitHub' },
  { icon: <SiCpanel size={20} color="#ff7600" />, name: 'cPanel' },
  { icon: <FaServer size={20} color="#47a248" />, name: 'XAMPP' },
  { icon: <FaWordpress size={20} color="#21759b" />, name: 'WordPress' },
  { icon: <FaDatabase size={20} color="#00f" />, name: 'REST APIs' },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="tech-stack" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">#3 — Skills &amp; Stack</p>
          <h2 className="section-title">The tools I build with</h2>
        </motion.div>

        <div className="bento-grid">

          {/* Core Stack — Large Hero Card */}
          <motion.div
            className="bento-item bento-core"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
          >
            <div className="bento-icon" style={{ display: 'flex', gap: '15px', justifyContent: 'center', color: '#3b82f6', marginBottom: '16px' }}>
              <FaPhp size={48} color="#777bb4" />
              <FaLaravel size={48} color="#ff2d20" />
              <SiJavascript size={42} color="#f7df1e" style={{ borderRadius: '4px' }} />
            </div>
            <h3 className="bento-title">Core Stack</h3>
            <p className="bento-desc" style={{ maxWidth: '480px', margin: '0 auto 20px' }}>
              I specialize in full-stack web development — building scalable backends with PHP &amp; Laravel and dynamic frontends with JavaScript.
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {['PHP', 'Laravel', 'JavaScript', 'HTML5', 'CSS'].map(tag => (
                <motion.span
                  key={tag}
                  className="project-tech-tag"
                  style={{ fontSize: '14px', padding: '8px 18px' }}
                  whileHover={{ scale: 1.1, color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Progress Rings */}
          <ProgressRing percent={90} label="PHP & Backend" icon={<FaPhp size={32} />} color="#777bb4" delay={0.1} />
          <ProgressRing percent={85} label="MySQL / SQL" icon={<SiMysql size={32} />} color="#00758f" delay={0.2} />

          {/* Frontend Mini Bento Cards */}
          {frontendSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="bento-item bento-mini"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
              whileHover={{
                scale: 1.06,
                boxShadow: `0 10px 30px rgba(0,0,0,0.4), 0 0 30px ${skill.color}40`,
                borderColor: skill.color,
              }}
              style={{ cursor: 'default' }}
            >
              <div className="bento-icon" style={{ fontSize: '36px', color: skill.color }}>{skill.icon}</div>
              <h3 className="bento-title" style={{ fontSize: '16px' }}>{skill.name}</h3>
            </motion.div>
          ))}

          {/* Tools Wide Card */}
          <motion.div
            className="bento-item bento-wide"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="bento-title" style={{ marginBottom: '16px' }}>Dev Tools &amp; Environment</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {toolSkills.slice(0, 4).map(tool => (
                <motion.span
                  key={tool.name}
                  className="project-tech-tag"
                  whileHover={{ scale: 1.1 }}
                  style={{ cursor: 'default', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  {tool.icon}
                  {tool.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Database Bonus Wide Card */}
          <motion.div
            className="bento-item bento-wide"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="bento-title" style={{ marginBottom: '16px' }}>CMS, Platform & Architecture</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {toolSkills.slice(2).map(tool => (
                <motion.span
                  key={tool.name}
                  className="project-tech-tag"
                  whileHover={{ scale: 1.1 }}
                  style={{ cursor: 'default', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  {tool.icon}
                  {tool.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
