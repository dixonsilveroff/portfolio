export default function SkillPill({ skill, category }) {
  const categoryColors = {
    frontend: 'bg-blue-100 text-blue-700',
    backend: 'bg-green-100 text-green-700',
    tools: 'bg-purple-100 text-purple-700',
    leadership: 'bg-orange-100 text-orange-700',
  }

  const colorClass = categoryColors[category] || 'bg-gray-100 text-gray-700'

  return (
    <span className={`inline-block px-4 py-2 rounded-lg font-medium text-sm ${colorClass}`}>
      {skill}
    </span>
  )
}
