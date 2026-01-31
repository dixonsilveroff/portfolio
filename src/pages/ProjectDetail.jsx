import { useParams, Link, Navigate } from 'react-router-dom'
import Section from '../components/Section'
import projectsData from '../data/projectsData.json'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projectsData.projects.find(p => p.id === id)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <>
      {/* Header */}
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              to="/projects" 
              className="text-accent hover:text-accent-dark inline-flex items-center gap-2 text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
          </nav>

          {/* Title */}
          <h1 className="heading-lg mb-4">{project.title}</h1>
          <p className="text-xl text-text-secondary dark:text-gray-400 mb-6">{project.tagline}</p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((tech, index) => (
              <span 
                key={index}
                className="text-sm font-medium text-text-secondary dark:text-gray-300 bg-secondary-light dark:bg-gray-800 px-4 py-2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 mb-12">
            {project.links.github && (
              <a 
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View on GitHub
              </a>
            )}
            {project.links.live && (
              <a 
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Live Site
              </a>
            )}
          </div>
        </div>
      </Section>

      {/* Main Image */}
      {project.screenshots && project.screenshots.length > 0 && (
        <Section background="gray">
          <div className="max-w-5xl mx-auto">
            <img 
              src={project.screenshots[0]} 
              alt={project.title}
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </Section>
      )}

      {/* Problem */}
      <Section title="Problem">
        <div className="max-w-3xl mx-auto">
          <p className="text-body whitespace-pre-line">{project.problem}</p>
        </div>
      </Section>

      {/* Role */}
      <Section title="My Role" background="gray">
        <div className="max-w-3xl mx-auto">
          <p className="text-body whitespace-pre-line">{project.role}</p>
        </div>
      </Section>

      {/* Solution */}
      <Section title="Solution">
        <div className="max-w-3xl mx-auto">
          <p className="text-body whitespace-pre-line">{project.solution}</p>
        </div>
      </Section>

      {/* Tech Stack */}
      <Section title="Tech Stack" background="gray">
        <div className="max-w-3xl mx-auto">
          <p className="text-body font-mono text-sm whitespace-pre-line">{project.techStack}</p>
        </div>
      </Section>

      {/* Challenges */}
      <Section title="Challenges & Tradeoffs">
        <div className="max-w-3xl mx-auto">
          <p className="text-body whitespace-pre-line">{project.challenges}</p>
        </div>
      </Section>

      {/* Results */}
      <Section title="Results & Impact" background="gray">
        <div className="max-w-3xl mx-auto">
          <p className="text-body whitespace-pre-line">{project.results}</p>
        </div>
      </Section>

      {/* Navigation to other projects */}
      <Section className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading-sm mb-6">
            Explore More Projects
          </h2>
          <Link to="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </Section>
    </>
  )
}
