export default function Section({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '',
  background = 'default'
}) {
  const bgClass = background === 'gray' 
    ? 'bg-gray-50 dark:bg-gray-900' 
    : 'bg-white dark:bg-gray-950'

  return (
    <section 
      id={id} 
      className={`section-padding ${bgClass} ${className}`}
    >
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16 text-center">
            {title && (
              <h2 className="heading-lg mb-4">{title}</h2>
            )}
            {subtitle && (
              <p className="text-body max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
