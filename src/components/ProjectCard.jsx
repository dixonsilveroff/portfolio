import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <Link 
      to={`/projects/${project.id}`}
      className="card group cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-100 dark:bg-gray-800 aspect-video">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {project.featured && (
          <span className="absolute top-3 right-3 bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-xl font-semibold text-text-primary dark:text-white mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-text-secondary dark:text-gray-400 mb-4">
          {project.tagline}
        </p>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="text-xs font-medium text-text-secondary dark:text-gray-300 bg-secondary-light dark:bg-gray-700 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="text-xs font-medium text-text-secondary dark:text-gray-300 bg-secondary-light dark:bg-gray-700 px-3 py-1 rounded-full">
              +{project.stack.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
