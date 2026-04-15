import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function WorkSection({ projects }) {
  return (
    <section className="my-work section" id="MyWork">
      <h2>My Work</h2>
      <hr />
      <p className="section-subtitle">Selected projects I&apos;ve built - each solving a real problem.</p>
      <div className="my-work-article-wrapper" role="list">
        {projects.map((project) => (
          <article className="my-work_articles project-card" role="listitem" key={project.name}>
            <div className="project-overlay">
              <span className="project-role">{project.role}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span className="tech-badge" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link project-link--live">
                  Live Site
                  <ExternalLink className="external-icon" size={16} strokeWidth={2} aria-hidden="true" />
                </a>
              </div>
            </div>
            <a target="_blank" href={project.live} rel="noopener noreferrer" aria-label={`View ${project.name} project`}>
              <Image
                src={project.image}
                alt={project.alt}
                width={project.width}
                height={project.height}
                sizes="(min-width: 900px) 340px, 100vw"
                loading="eager"
              />
            </a>
          </article>
        ))}
      </div>
      <a href="https://github.com/dixonsilveroff?tab=repositories" className="button-cta" target="_blank" rel="noopener noreferrer">
        More on GitHub &nbsp;
        <ExternalLink className="external-icon" size={16} strokeWidth={2} aria-hidden="true" />
      </a>
    </section>
  );
}
