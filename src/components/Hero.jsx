import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLaravel, FaReact, FaCodeBranch } from 'react-icons/fa';
import { SiMysql, SiTailwindcss } from 'react-icons/si';

export default function Hero() {
  const skillBarsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.skill-bar-fill');
            fills.forEach(fill => fill.classList.add('animated'));
          }
        });
      },
      { threshold: 0.3 }
    );
    if (skillBarsRef.current) observer.observe(skillBarsRef.current);
    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="hero" id="hero" style={{ position: 'relative' }}>


      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div 
          className="hero-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badges" variants={itemVariants}>
            <span className="badge-available">
              <span className="pulse"></span>
              Available for opportunities
            </span>
            <span className="badge-location">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Baripada, Odisha, India
            </span>
          </motion.div>

          <motion.p className="hero-subtitle" variants={itemVariants}>Full Stack Web Developer</motion.p>

          <motion.h1 className="hero-title" variants={itemVariants}>
            SK Kahinoor<br />
            builds the web.
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            I craft scalable, user-friendly web applications with PHP, Laravel &amp; modern JavaScript. Passionate about turning ideas into innovative digital products.
          </motion.p>

          <motion.div className="hero-ctas" variants={itemVariants}>
            <motion.a 
              href="#projects" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              View My Work
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </motion.a>
            <motion.a 
              href="https://wa.me/919827472688?text=Hi%20Kahinoor!%20I%20have%20a%20query%20regarding%20a%20web%20development%20project%20and%20would%20love%20to%20discuss%20it%20with%20you." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </motion.a>
            <motion.a 
              href="/kahinoor.pdf" 
              download="SK_Kahinoor_Resume.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </motion.a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
            </svg>
            @skkahinoor
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-right" 
          ref={skillBarsRef}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
        >
          {/* Advanced Current Focus Widget */}
          <motion.div 
            className="focus-card"
            whileHover={{ y: -5, borderColor: 'rgba(255, 255, 255, 0.2)' }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="focus-card-title" style={{ display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
              <span>// Current Focus</span>
              <span className="live-pulse" />
            </div>

            {/* Laravel Skill Bar */}
            <div className="skill-bar-item">
              <div className="skill-bar-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span className="skill-bar-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaLaravel color="#ff2d20" size={16} />
                  Laravel
                </span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#ff2d20' }}>90%</span>
              </div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill laravel" style={{ width: '90%', background: 'linear-gradient(90deg, #ff2d20aa, #ff2d20)', boxShadow: '0 0 10px #ff2d2055' }}></div>
              </div>
            </div>

            {/* MySQL Skill Bar */}
            <div className="skill-bar-item">
              <div className="skill-bar-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span className="skill-bar-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <SiMysql color="#00758f" size={18} />
                  MySQL
                </span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#00758f' }}>85%</span>
              </div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill mysql" style={{ width: '85%', background: 'linear-gradient(90deg, #00758faa, #00758f)', boxShadow: '0 0 10px #00758f55' }}></div>
              </div>
            </div>

            {/* Tailwind CSS Skill Bar */}
            <div className="skill-bar-item">
              <div className="skill-bar-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span className="skill-bar-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <SiTailwindcss color="#38bdf8" size={16} />
                  Tailwind CSS
                </span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#38bdf8' }}>80%</span>
              </div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill tailwind" style={{ width: '80%', background: 'linear-gradient(90deg, #38bdf8aa, #38bdf8)', boxShadow: '0 0 10px #38bdf855' }}></div>
              </div>
            </div>

            {/* React Native Skill Bar */}
            <div className="skill-bar-item">
              <div className="skill-bar-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span className="skill-bar-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaReact color="#61dafb" size={16} />
                  React Native
                </span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#61dafb' }}>65%</span>
              </div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill react-native" style={{ width: '65%', background: 'linear-gradient(90deg, #61dafbaa, #61dafb)', boxShadow: '0 0 10px #61dafb55' }}></div>
              </div>
            </div>
          </motion.div>

          {/* Advanced Stat Dashboard Widget */}
          <motion.div 
            className="stat-card"
            whileHover={{ y: -5, borderColor: 'rgba(255, 255, 255, 0.2)' }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              alignItems: 'stretch',
              textAlign: 'left',
            }}
          >
            {/* Ambient inner glow */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-50%',
              width: '150px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
              zIndex: 0,
            }} />

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', zIndex: 1 }}>
              <div style={{ flex: 1 }}>
                <div className="stat-number" style={{ fontSize: '36px', lineHeight: '1', marginBottom: '4px' }}>2+</div>
                <div className="stat-label" style={{ fontSize: '12px', letterSpacing: '0.5px' }}>Years Experience</div>
              </div>
              
              <div style={{ width: '1px', height: '40px', background: 'rgba(255, 255, 255, 0.1)' }} />

              <div style={{ flex: 1 }}>
                <div className="stat-number" style={{ fontSize: '36px', lineHeight: '1', marginBottom: '4px', color: '#22c55e' }}>20+</div>
                <div className="stat-label" style={{ fontSize: '12px', letterSpacing: '0.5px' }}>Projects Built</div>
              </div>

              <div className="stat-icon" style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3b82f6',
              }}>
                <FaCodeBranch size={18} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL</span>
        <div className="line"></div>
      </div>
    </section>
  );
}
