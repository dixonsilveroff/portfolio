import { Link } from 'react-router-dom'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import SkillPill from '../components/SkillPill'
import projectsData from '../data/projectsData.json'

export default function Home() {
  const featuredProjects = projectsData.projects.filter(p => p.featured).slice(0, 3)

  const topSkills = [
    { skill: 'React', category: 'frontend' },
    { skill: 'Vite', category: 'frontend' },
    { skill: 'Tailwind CSS', category: 'frontend' },
    { skill: 'Node.js', category: 'backend' },
    { skill: 'Project Management', category: 'leadership' },
    { skill: 'Git', category: 'tools' },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-[90vh] flex items-center">
        <div className="text-center max-w-4xl mx-auto animate-fade-up">
          <h1 className="heading-xl mb-6">
            Victor <span className="text-gradient">(Vick)</span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-text-primary mb-6">
            Builder. Developer. System Thinker.
          </p>
          <p className="text-body max-w-2xl mx-auto mb-10">
            I'm a Nigeria-based engineering student who builds software to solve real coordination problems. 
            I ship production-ready web apps, lead teams, and design systems that work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="btn-primary text-base px-8 py-4">
              View Projects
            </Link>
            <Link to="/contact" className="btn-secondary text-base px-8 py-4">
              Get In Touch
            </Link>
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section 
        title="Featured Work"
        subtitle="Projects that solve real problems."
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors group"
          >
            View All Projects
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* Skills Snapshot */}
      <Section 
        title="What I Work With"
        subtitle="Core technologies and skills I use to build solutions."
      >
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {topSkills.map((item, index) => (
            <SkillPill key={index} skill={item.skill} category={item.category} />
          ))}
        </div>
        <div className="text-center">
          <Link 
            to="/skills" 
            className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors group"
          >
            See Full Stack
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="gray" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading-md mb-6">
            Let's build something together.
          </h2>
          <p className="text-body mb-8">
            I'm currently open to freelance projects, collaborations, and conversations about 
            systems thinking, execution, and engineering.
          </p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Start a Conversation
          </Link>
        </div>
      </Section>
    </>
  )
}
