export default function CodeBlock({ lines }) {
  return (
    <div className="glass-card p-6 overflow-x-auto">
      <pre className="font-mono text-sm leading-relaxed">
        <code>
          {lines.map((line, i) => (
            <div key={i}>
              {line.map((token, j) => (
                <span key={j} className={tokenColor(token.type)}>
                  {token.value}
                </span>
              ))}
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}

function tokenColor(type) {
  switch (type) {
    case 'keyword': return 'text-cobalt'
    case 'string': return 'text-green-400'
    case 'comment': return 'text-slate-500 italic'
    case 'function': return 'text-yellow-300'
    case 'number': return 'text-orange-400'
    case 'punctuation': return 'text-slate-400'
    case 'property': return 'text-cobalt-light'
    default: return 'text-slate-300'
  }
}
