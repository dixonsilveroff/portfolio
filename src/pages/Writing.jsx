import Section from '../components/Section'

export default function Writing() {
  const essays = [
    {
      title: 'Why Documentation Is a Leadership Tool',
      description: 'How clear documentation creates leverage and enables teams to operate independently.',
      date: 'Coming Soon',
      slug: '#'
    },
    {
      title: 'Systems Thinking for Student Leaders',
      description: 'Applying product and systems thinking principles to student government and community work.',
      date: 'Coming Soon',
      slug: '#'
    },
    {
      title: 'Shipping MVPs: Speed vs. Quality',
      description: 'Finding the right balance between shipping fast and building something that works.',
      date: 'Coming Soon',
      slug: '#'
    },
    {
      title: 'Coordination Problems in Construction',
      description: 'Why construction projects struggle with coordination and how software can help.',
      date: 'Coming Soon',
      slug: '#'
    }
  ]

  return (
    <>
      <Section 
        title="Writing & Insights"
        subtitle="Essays on systems, execution, and engineering thinking."
      >
        <div className="max-w-3xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12 text-center">
            <p className="text-blue-800 font-medium">
              📝 Essays coming soon. Topics include systems thinking, documentation, execution, and product development.
            </p>
          </div>

          <div className="space-y-6">
            {essays.map((essay, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {essay.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-2">
                      {essay.description}
                    </p>
                    <span className="text-xs text-text-muted uppercase tracking-wider">
                      {essay.date}
                    </span>
                  </div>
                  {essay.slug !== '#' && (
                    <a
                      href={essay.slug}
                      className="btn-secondary text-sm whitespace-nowrap"
                    >
                      Read Article
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
