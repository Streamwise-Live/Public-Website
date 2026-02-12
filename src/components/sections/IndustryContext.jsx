import GlassCard from '../ui/GlassCard'

const phases = [
  {
    era: '2010s',
    title: 'The Wild West',
    description: 'Moderation was minimal or purely reactive manual reviews.',
    color: 'text-amber-400',
    border: 'border-amber-500/30',
  },
  {
    era: '2020–2024',
    title: 'The Police State',
    description:
      'Rising civil fines and the realization that toxicity drives user churn. Moderation focuses on "catch and punish".',
    color: 'text-red-400',
    border: 'border-red-500/30',
  },
  {
    era: '2026+',
    title: 'The Clean Standard',
    description:
      'Users and platforms are held liable for their content. Data storage like voiceprints becomes high-risk. The focus shifts to "clean and prevent".',
    color: 'text-cobalt',
    border: 'border-cobalt/30',
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
            <span className="text-white font-semibold">$1,234.2 billion by 2033</span>{' '}
            at a 27% CAGR — expanding across entertainment, commerce, healthcare,
            education, and the enterprise. As the market scales, so does the need
            for moderation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase) => (
            <GlassCard
              key={phase.era}
              className={`p-8 ${phase.border} ${phase.active ? 'ring-1 ring-cobalt/30' : ''} hover:border-cobalt/40 transition-colors`}
            >
              <span className={`text-xs font-mono font-bold uppercase tracking-wider ${phase.color}`}>
                {phase.era}
              </span>
              <h4 className="text-xl font-bold mt-2 mb-3">{phase.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{phase.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
