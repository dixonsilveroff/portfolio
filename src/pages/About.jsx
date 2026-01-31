import { Link } from 'react-router-dom'
import Section from '../components/Section'
import Timeline from '../components/Timeline'

export default function About() {
  const journeyEvents = [
    {
      year: '2024 - Present',
      title: 'Founder, ConSync',
      description: 'Building SaaS for construction project coordination.'
    },
    {
      year: '2023 - 2024',
      title: 'Student Leader (Senate President / General Secretary)',
      description: 'Operations, documentation, and team coordination across faculty-wide initiatives.'
    },
    {
      year: '2023',
      title: 'Solar Decathlon Design Challenge - Team Aquila',
      description: 'Managed team roles, deliverables, and project documentation.'
    },
    {
      year: '2022 - 2023',
      title: 'Africa Waste Observatory',
      description: 'Led development of faculty web platform for waste data and research.'
    },
    {
      year: '2021 - Present',
      title: 'Church Media Unit',
      description: 'Training, orientation, documentation for media team members.'
    }
  ]

  const values = [
    {
      title: 'Clarity',
      description: 'Systems fail when expectations aren\'t clear. I document, structure, and communicate deliberately.'
    },
    {
      title: 'Execution',
      description: 'Ideas without execution are worthless. I ship, iterate, and improve.'
    },
    {
      title: 'Service',
      description: 'The best work serves others. Whether leading student government, training church media teams, or building software, I optimize for impact beyond myself.'
    },
    {
      title: 'Discipline',
      description: 'Consistency compounds. I show up, do the work, and hold myself accountable.'
    }
  ]

  return (
    <>
      {/* Introduction */}
      <Section title="About Me">
        <div className="max-w-3xl mx-auto">
          <p className="text-body mb-6">
            I'm Victor, an engineering student in Nigeria pursuing Civil/Structural Engineering who found 
            his way into software development by building solutions to real coordination problems.
          </p>
          <p className="text-body">
            I don't write code for the sake of it—I build systems that solve problems. Whether it's 
            coordinating construction projects, organizing team deliverables, or creating content platforms, 
            I focus on execution, clarity, and impact.
          </p>
        </div>
      </Section>

      {/* Core Values */}
      <Section 
        title="What Drives Me" 
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold text-text-primary dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* What I'm Building Toward */}
      <Section title="What I'm Optimizing For">
        <div className="max-w-3xl mx-auto">
          <p className="text-body mb-6">
            I want to build tools that reduce friction in coordination-heavy environments—construction, 
            education, community work. I care about software that solves real-world problems for real people.
          </p>
          <p className="text-body">
            Long-term, I'm interested in the intersection of engineering (physical + software), product 
            development, and systems thinking. I want to lead teams, ship meaningful products, and contribute 
            to work that matters.
          </p>
        </div>
      </Section>

      {/* Journey Timeline */}
      <Section 
        title="Journey So Far"
        background="gray"
      >
        <div className="max-w-4xl mx-auto">
          <Timeline events={journeyEvents} />
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading-md mb-6">
            Want to know more?
          </h2>
          <p className="text-body mb-8">
            Check out my projects or let's have a conversation about building systems that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
