import React from 'react'

export default function customBadge({ tech }: { tech: string }) {
  return (
    <span className="relative inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg overflow-hidden">
      <span className="absolute inset-0 bg-zinc-950 opacity-80"></span>
      <span className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent"></span>
      <span className="absolute inset-0 backdrop-blur-sm"></span>
      <span className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10"></span>
      <span className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
      <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></span>
      <span className="relative">
        {tech}
      </span>
    </span>
  )
}
