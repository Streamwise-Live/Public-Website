import NodeCanvas from '../node-editor/NodeCanvas'

export default function LogicEngineDemo() {
  return (
    <section id="demo" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Your stream, <span className="text-cobalt">your rules</span>
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Build any automation you can imagine. Chain triggers, detectors, and
          actions into real-time pipelines — from auto-muting toxic users to
          triggering sound effects on keyword detection. Total creative freedom,
          zero code required. Drag the nodes to explore.
        </p>

        <div className="glass-card p-6 md:p-10 overflow-hidden">
          {/* Desktop node canvas */}
          <div className="hidden md:block">
            <NodeCanvas />
          </div>

          {/* Mobile: simplified stacked view */}
          <div className="md:hidden space-y-4">
            <MobileNode label="Audio Input" subtitle="Stream: Live Mic" type="input" />
            <MobileArrow />
            <div className="grid grid-cols-2 gap-4">
              <MobileNode label="Detect Intent" subtitle="Confidence: 94.2%" type="process" />
              <MobileNode label="Detect Word" subtitle="Flagged: 3 terms" type="process" />
            </div>
            <MobileArrow />
            <div className="grid grid-cols-2 gap-4">
              <MobileNode label="Webhook" subtitle="POST /api/alert" type="output" />
              <MobileNode label="Play Sound" subtitle="alert_beep.wav" type="output" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MobileNode({ label, subtitle, type }) {
  const colors = {
    input: 'border-green-500/30',
    process: 'border-cobalt/30',
    output: 'border-amber-500/30',
  }
  const dots = {
    input: 'bg-green-400',
    process: 'bg-cobalt',
    output: 'bg-amber-400',
  }

  return (
    <div className={`glass-card p-3 border ${colors[type]}`}>
      <div className="flex items-center gap-2 mb-1">
        <span className={`w-2 h-2 rounded-full ${dots[type]}`} />
        <span className="font-mono text-sm font-bold">{label}</span>
      </div>
      <p className="font-mono text-xs text-slate-400">{subtitle}</p>
    </div>
  )
}

function MobileArrow() {
  return (
    <div className="flex justify-center text-cobalt/50">
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </div>
  )
}
