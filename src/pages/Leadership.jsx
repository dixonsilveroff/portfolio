import Section from '../components/Section'

export default function Leadership() {
  const leadershipRoles = [
    {
      title: 'Student Government',
      subtitle: 'Senate President',
      description: 'Presided over the student senate, led faculty-wide initiatives, and served as the primary liaison between students and administration. Managed senate operations and drove strategic decision-making for student welfare and campus improvements.',
      contributions: [
        'Presided over senate meetings and legislative sessions',
        'Represented student body in faculty and administrative meetings',
        'Led strategic planning for student welfare initiatives',
        'Coordinated budget allocation and resource distribution across student organizations'
      ]
    },
    {
      title: 'Student Government',
      subtitle: 'General Secretary',
      description: 'Managed administrative operations and documentation systems for the student government. Ensured accurate record-keeping, streamlined communication processes, and maintained institutional knowledge across leadership transitions.',
      contributions: [
        'Designed and implemented documentation systems for consistent record-keeping',
        'Managed official correspondence and inter-departmental communication',
        'Coordinated cross-team initiatives and resource allocation',
        'Established clear communication channels and accountability frameworks'
      ]
    },
    {
      title: 'Africa Waste Observatory',
      subtitle: 'Project Manager - 400+ Students',
      description: 'Led the development team of over 400 students to build a comprehensive web platform for waste management research across Africa. Coordinated across multiple disciplines, managed deliverables, and ensured successful project completion.',
      contributions: [
        'Managed coordination and task delegation for 400+ student contributors',
        'Established project workflows and communication systems at scale',
        'Led frontend development while overseeing content collection from faculty',
        'Successfully delivered platform used by 200+ students and researchers'
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
