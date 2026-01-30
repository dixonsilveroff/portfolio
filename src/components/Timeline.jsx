export default function Timeline({ events }) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

      {/* Events */}
      <div className="space-y-12">
        {events.map((event, index) => (
          <div 
            key={index}
            className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Year Badge */}
            <div className="md:w-1/2 flex justify-start md:justify-end">
              <div className="relative">
                <div className="absolute -left-[21px] md:left-auto md:-right-[21px] top-1 w-10 h-10 bg-accent rounded-full flex items-center justify-center border-4 border-white">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="inline-block ml-6 md:ml-0 text-accent font-bold text-lg">
                  {event.year}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-1/2 ml-6 md:ml-0">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-text-secondary">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
