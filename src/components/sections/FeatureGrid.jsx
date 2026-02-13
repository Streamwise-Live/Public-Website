import GlassCard from '../ui/GlassCard'
import { features } from '../../data/features'

const icons = {
  logic: (
    <svg className="w-10 h-10 text-cobalt" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M17.5 14v7M14 17.5h7" />
    </svg>
  ),
  sdk: (
    <svg className="w-10 h-10 text-cobalt" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14.5" y1="4" x2="9.5" y2="20" />
    </svg>
  ),
  explainability: (
    <svg className="w-10 h-10 text-cobalt" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  ),
}

export default function FeatureGrid() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Your live stream <span className="text-cobalt">engineer</span>
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
          Real-time stream intelligence that works the way you need it to and not the other way around.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <GlassCard key={f.title} className="p-8 hover:border-cobalt/40 transition-colors">
              <div className="mb-5">{icons[f.icon]}</div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
