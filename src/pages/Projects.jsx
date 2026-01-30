import { useState } from 'react'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import FilterBar from '../components/FilterBar'
import projectsData from '../data/projectsData.json'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  // Get unique categories
  const categories = ['All', ...new Set(
    projectsData.projects.flatMap(p => p.category)
  )]

  // Filter projects
  const filteredProjects = activeFilter === 'All'
    ? projectsData.projects
    : projectsData.projects.filter(p => p.category.includes(activeFilter))

  return (
    <>
      <Section 
        title="Projects"
        subtitle="Case studies of systems I've built."
      >
        <FilterBar 
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-text-secondary">
              No projects found in this category.
            </p>
          </div>
        )}
      </Section>
    </>
  )
}
