const languages = [
  { name: 'Odia', level: 'Fluent' },
  { name: 'Hindi', level: 'Fluent' },
  { name: 'English', level: 'Intermediate' },
  { name: 'Bengali', level: 'Beginner' },
];

export default function About() {
  return (
    <section className="about glow-bottom" id="about">
      <div className="container">
        <div className="about-header reveal">
          <p className="section-label">#1 — About Me</p>
          <h2 className="about-title">
            A developer who turns ideas{' '}
            <span className="italic">into products.</span>
          </h2>
        </div>

        <div className="about-grid reveal">
          <div className="about-card">
            <div className="about-card-icon">&lt;/&gt;</div>
            <p className="about-card-text">
              Results-driven Full Stack Web Developer with 2+ years of experience building
              scalable web applications using PHP, Laravel, MySQL, Bootstrap, Tailwind CSS,
              and JavaScript. Passionate about crafting user-friendly solutions and
              contributing to innovative software products. Currently seeking opportunities
              in software development and remote-first organizations.
            </p>
          </div>

          <div className="about-stat-card">
            <div className="about-stat-icon">✦</div>
            <div className="about-stat-number">2+</div>
            <div className="about-stat-label">Years crafting web apps</div>
          </div>
        </div>

        <div className="languages-section reveal">
          <div className="languages-header">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
            </svg>
            <h3>Languages I speak</h3>
          </div>
          <div className="languages-grid">
            {languages.map(lang => (
              <div className="language-item" key={lang.name}>
                <div className="language-name">{lang.name}</div>
                <div className="language-level">{lang.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
