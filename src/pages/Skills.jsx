import Section from '../components/Section'
import SkillPill from '../components/SkillPill'

export default function Skills() {
  const skillsData = {
    frontend: [
      'React', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3', 
      'JavaScript (ES6+)', 'Responsive Design', 'Component Architecture'
    ],
    backend: [
      'Node.js', 'Express', 'REST APIs', 'MongoDB'
    ],
    tools: [
      'Git', 'GitHub', 'Figma', 'VS Code', 'Notion', 
      'Trello', 'Google Workspace'
    ],
    leadership: [
      'Project Coordination', 'Documentation Systems', 'Team Management',
      'Operations Planning', 'Process Design', 'Training & Mentorship'
    ]
  }

  const capabilities = [
    'Production-ready web applications (React + Vite + Tailwind)',
    'SaaS platforms and dashboards',
    'Landing pages and marketing sites',
    'Content management systems',
    'Team coordination tools',
    'Documentation and process systems'
  ]

  return (
    <>
      <Section 
        title="Skills & Stack"
        subtitle="Technologies and capabilities I use to build solutions."
      >
        {/* Frontend */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-text-primary dark:text-white mb-6">
            Frontend Development
          </h3>
          <div className="flex flex-wrap gap-3">
            {skillsData.frontend.map((skill, index) => (
              <SkillPill key={index} skill={skill} category="frontend" />
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-text-primary dark:text-white mb-6">
            Backend Development
          </h3>
          <div className="flex flex-wrap gap-3">
            {skillsData.backend.map((skill, index) => (
              <SkillPill key={index} skill={skill} category="backend" />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-text-primary dark:text-white mb-6">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap gap-3">
            {skillsData.tools.map((skill, index) => (
              <SkillPill key={index} skill={skill} category="tools" />
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h3 className="text-2xl font-semibold text-text-primary dark:text-white mb-6">
            Engineering & Leadership
          </h3>
          <div className="flex flex-wrap gap-3">
            {skillsData.leadership.map((skill, index) => (
              <SkillPill key={index} skill={skill} category="leadership" />
            ))}
          </div>
        </div>
      </Section>

      {/* What I Can Build */}
      <Section 
        title="What I Can Build"
        background="gray"
      >
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {capabilities.map((capability, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-body">{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  )
}
