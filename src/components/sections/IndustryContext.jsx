import { useState } from 'react'

const phases = [
  {
    era: '2010s',
    title: 'The Wild West',
    description: 'Moderation was minimal or purely reactive manual reviews.',
    color: 'text-amber-400',
    dot: 'bg-amber-400',
    glow: 'shadow-amber-400/40',
  },
  {
    era: '2020–2024',
    title: 'The Police State',
    description:
      'Rising civil fines and the realization that toxicity drives user churn. Moderation focuses to automatic "catch and punish".',
    color: 'text-red-400',
    dot: 'bg-red-400',
    glow: 'shadow-red-400/40',
  },
  {
    era: '2026+',
    title: 'The Clean Room',
    description:
      'Users and platforms are held liable for their content. Data storage like voiceprints becomes high-risk. The focus shifts to real-time intervention.',
    color: 'text-cobalt',
    dot: 'bg-cobalt',
    glow: 'shadow-cobalt/40',
    active: true,
  },
]

export default function IndustryContext() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A <span className="text-cobalt">$135.7B</span> market — and growing
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Live streaming is projected to reach{' '}
            <span className="text-white font-semibold">$1,234.2 billion by 2033</span>
            , expanding across entertainment, commerce, healthcare,
            education, and the enterprise. As the market scales, so does the need
            for moderation.
          </p>
        </div>

        {/* Horizontal timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Line */}
          <div className="absolute top-4 left-0 right-0 h-px bg-gradient-to-r from-amber-400/40 via-red-400/40 to-cobalt/60" />

          <div className="relative flex justify-between">
            {phases.map((phase) => (
              <TimelinePoint key={phase.era} phase={phase} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelinePoint({ phase }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Dot */}
      <div
        className={`w-8 h-8 rounded-full ${phase.dot} border-4 border-midnight cursor-pointer
          transition-shadow duration-300 ${hovered ? `shadow-[0_0_12px_4px] ${phase.glow}` : ''}`}
      />

      {/* Label */}
      <span className={`mt-3 text-xs font-mono font-bold uppercase tracking-wider ${phase.color}`}>
        {phase.era}
      </span>
      <span className={`text-sm font-semibold mt-1 ${phase.color}`}>
        {phase.title}
      </span>

      {/* Tooltip */}
      <div
        className={`absolute top-full mt-10 w-64 glass-card p-4 text-left transition-all duration-200 z-20
          ${hovered ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}
      >
        <p className="text-slate-300 text-xs leading-relaxed">{phase.description}</p>
      </div>
    </div>
  )
}
