import { useState } from 'react'

export default function FilterBar({ categories, activeFilter, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-base ${
            activeFilter === category
              ? 'bg-accent text-white shadow-md'
              : 'bg-white text-text-secondary border border-border hover:border-accent hover:text-accent'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
