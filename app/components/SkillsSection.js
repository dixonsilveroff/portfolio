export default function SkillsSection() {
  return (
    <section className="skills section" id="MySkills">
      <h2>My Tech Stack</h2>
      <hr />
      <div className="skills-grid">
        <div className="skill-category glass-card stagger-item">
          <h3>Frontend</h3>
          <div className="skill-badges">
            <span className="skill-badge" data-level="95">HTML5</span>
            <span className="skill-badge" data-level="90">CSS3 / Sass</span>
            <span className="skill-badge" data-level="90">JavaScript</span>
            <span className="skill-badge" data-level="85">TypeScript</span>
            <span className="skill-badge" data-level="85">React</span>
            <span className="skill-badge" data-level="80">Next.js</span>
          </div>
        </div>
        <div className="skill-category glass-card stagger-item">
          <h3>Backend</h3>
          <div className="skill-badges">
            <span className="skill-badge" data-level="80">Node.js</span>
            <span className="skill-badge" data-level="75">Express</span>
            <span className="skill-badge" data-level="70">PostgreSQL</span>
            <span className="skill-badge" data-level="70">MongoDB</span>
            <span className="skill-badge" data-level="65">Prisma</span>
          </div>
        </div>
        <div className="skill-category glass-card stagger-item">
          <h3>Tools & Workflow</h3>
          <div className="skill-badges">
            <span className="skill-badge" data-level="90">Git / GitHub</span>
            <span className="skill-badge" data-level="85">VS Code</span>
            <span className="skill-badge" data-level="80">Figma</span>
            <span className="skill-badge" data-level="75">Vercel</span>
            <span className="skill-badge" data-level="70">Docker</span>
            <span className="skill-badge" data-level="80">npm / Webpack</span>
          </div>
        </div>
      </div>
    </section>
  );
}
