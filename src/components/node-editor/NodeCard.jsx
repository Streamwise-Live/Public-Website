const typeColors = {
  input: 'border-green-500/30',
  process: 'border-cobalt/30',
  output: 'border-amber-500/30',
}

const typeDots = {
  input: 'bg-green-400',
  process: 'bg-cobalt',
  output: 'bg-amber-400',
}

export default function NodeCard({ node, style, onPointerDown }) {
  return (
    <div
      className={`absolute glass-card p-4 w-[200px] cursor-grab active:cursor-grabbing select-none
        border ${typeColors[node.type]} hover:animate-node-glow transition-shadow`}
      style={style}
      onPointerDown={onPointerDown}
      data-node-id={node.id}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className={`w-2 h-2 rounded-full ${typeDots[node.type]}`} />
        <span className="font-mono text-sm font-bold text-white">{node.label}</span>
      </div>
      <p className="font-mono text-xs text-slate-400">{node.subtitle}</p>

      {/* Input port */}
      {node.type !== 'input' && (
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-slate-600 border-2 border-slate-400" />
      )}

      {/* Output port */}
      {node.type !== 'output' && (
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cobalt border-2 border-cobalt-light" />
      )}
    </div>
  )
}
