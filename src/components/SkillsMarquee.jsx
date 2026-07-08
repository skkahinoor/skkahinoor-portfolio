const row1 = ['HTML5', 'CSS', 'Git', 'GitHub', 'WordPress', 'SQL', 'JavaScript', 'Laravel', 'PHP'];
const row2 = ['React Native', 'jQuery', 'Bootstrap', 'Tailwind CSS', 'AJAX', 'MySQL', 'WordPress', 'PHP', 'Laravel'];

export default function SkillsMarquee() {
  return (
    <section className="skills-marquee">
      <div className="marquee-track">
        {[...row1, ...row1].map((skill, i) => (
          <span className="marquee-item" key={`r1-${i}`}>{skill}</span>
        ))}
      </div>
      <div className="marquee-track">
        {[...row2, ...row2].map((skill, i) => (
          <span className="marquee-item" key={`r2-${i}`}>{skill}</span>
        ))}
      </div>
    </section>
  );
}
