import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaArrowRight, FaDownload } from 'react-icons/fa';

export default function Contact() {
  const whatsappUrl = "https://wa.me/919827472688?text=Hi%20Kahinoor!%20I%20have%20a%20query%20regarding%20a%20web%20development%20project%20and%20would%20love%20to%20discuss%20it%20with%20you.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  const contactLinks = [
    {
      label: 'Email',
      value: 'skkahinoor23@gmail.com',
      href: 'mailto:skkahinoor23@gmail.com',
      icon: <FaEnvelope />,
      color: '#3b82f6',
    },
    {
      label: 'WhatsApp',
      value: '+91 98274 72688',
      href: whatsappUrl,
      icon: <FaWhatsapp />,
      color: '#22c55e',
    },
    {
      label: 'GitHub',
      value: 'github.com/skkahinoor',
      href: 'https://github.com/skkahinoor',
      icon: <FaGithub />,
      color: '#ffffff',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/skkahinoor',
      href: 'https://linkedin.com/in/skkahinoor',
      icon: <FaLinkedin />,
      color: '#0077b5',
    },
  ];

  return (
    <section className="contact" id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative localized ambient glow */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div className="container" style={{ relative: 'relative', zIndex: 1 }}>
        <motion.div 
          className="contact-layout"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Heading and info */}
          <motion.div className="contact-info-col" variants={itemVariants}>
            <span className="badge-available" style={{ display: 'inline-flex', marginBottom: '20px', width: 'fit-content' }}>
              <span className="pulse" style={{ background: '#3b82f6', boxShadow: '0 0 8px #3b82f6' }}></span>
              Let&apos;s build something great
            </span>
            
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '20px', lineHeight: 1.15 }}>
              Let&apos;s work<br />
              <span style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>together.</span>
            </h2>
            
            <p className="contact-subtitle" style={{ textAlign: 'left', marginBottom: '32px', maxWidth: '450px' }}>
              Got an application, system, or custom API project in mind? Reach out and let&apos;s discuss your requirements to turn your goals into high-performing reality.
            </p>

            <div className="contact-cta-buttons" style={{ justifyContent: 'flex-start', gap: '16px' }}>
              <motion.a 
                href="mailto:skkahinoor23@gmail.com" 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                Send an Email
                <FaArrowRight size={12} />
              </motion.a>
              <motion.a 
                href="/kahinoor.pdf" 
                download="SK_Kahinoor_Resume.pdf"
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                Download Resume
                <FaDownload size={12} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Grid of Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? "_blank" : undefined}
                rel={link.label !== 'Email' ? "noopener noreferrer" : undefined}
                className="contact-link-item"
                variants={itemVariants}
                whileHover={{
                  x: 8,
                  borderColor: link.color,
                  boxShadow: `0 10px 30px rgba(0,0,0,0.4), 0 0 20px ${link.color}20`,
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '24px',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid var(--glass-border)',
                  borderTop: '1px solid var(--glass-border-light)',
                  borderLeft: '1px solid var(--glass-border-light)',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: `${link.color}15`,
                  border: `1px solid ${link.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  color: link.color || '#fff',
                  flexShrink: 0,
                }}>
                  {link.icon}
                </div>
                <div>
                  <div style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '4px',
                  }}>{link.label}</div>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#fff',
                  }}>{link.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
