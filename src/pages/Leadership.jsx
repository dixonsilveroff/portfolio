import Section from '../components/Section'

export default function Leadership() {
  const leadershipRoles = [
    {
      title: 'Student Government',
      subtitle: 'Senate President / General Secretary',
      description: 'Led operations, documentation, and coordination across faculty-wide student government. Managed team communication, structured decision-making processes, and executed on initiatives that impacted hundreds of students.',
      contributions: [
        'Designed and implemented documentation systems for consistent record-keeping',
        'Coordinated cross-team initiatives and resource allocation',
        'Established clear communication channels and accountability frameworks'
      ]
    },
    {
      title: 'Church Media Unit',
      subtitle: 'Training & Orientation Lead',
      description: 'Created training materials, orientation guides, and process documentation for new media team members. Focused on clarity, consistency, and skill development.',
      contributions: [
        'Developed comprehensive onboarding system for new members',
        'Documented workflows for media production and event coverage',
        'Trained 20+ team members on tools and processes'
      ]
    }
  ]

  const philosophy = [
    {
      point: 'Documenting processes so teams can operate independently',
      icon: '📝'
    },
    {
      point: 'Creating systems that outlast individual contributors',
      icon: '⚙️'
    },
    {
      point: 'Leading by doing, not just directing',
      icon: '🎯'
    },
    {
      point: 'Optimizing for team success, not personal visibility',
      icon: '🤝'
    }
  ]

  return (
    <>
      <Section 
        title="Leadership & Community"
        subtitle="How I've contributed beyond code."
      >
        <div className="max-w-4xl mx-auto space-y-12">
          {leadershipRoles.map((role, index) => (
            <div key={index} className="card">
              <h3 className="text-2xl font-semibold text-text-primary mb-2">
                {role.title}
              </h3>
              <p className="text-accent font-medium mb-4">
                {role.subtitle}
              </p>
              <p className="text-body mb-6">
                {role.description}
              </p>
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">
                  Key Contributions
                </h4>
                <ul className="space-y-2">
                  {role.contributions.map((contribution, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-text-secondary">{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        title="Leadership Philosophy"
        background="gray"
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-body mb-8 text-center">
            Leadership isn't about titles—it's about clarity, service, and execution. I believe in:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophy.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg">
                <span className="text-3xl">{item.icon}</span>
                <p className="text-body flex-1">{item.point}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
