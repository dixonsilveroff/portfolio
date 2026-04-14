export default function SkillPill({ skill, category }) {
  const categoryColors = {
    frontend: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    backend: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    tools: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    leadership: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  }

  const colorClass = categoryColors[category] || 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'

  return (
    <span className={`inline-block px-4 py-2 rounded-lg font-medium text-sm ${colorClass}`}>
      {skill}
    </span>
  )
}
