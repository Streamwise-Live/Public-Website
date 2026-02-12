export default function ConnectionLine({ x1, y1, x2, y2, id }) {
  const dx = Math.abs(x2 - x1) * 0.5
  const d = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`

  return (
    <g>
      {/* Shadow path */}
      <path
        d={d}
        fill="none"
        stroke="rgba(59,130,246,0.15)"
        strokeWidth="3"
      />
      {/* Main path */}
      <path
        d={d}
        fill="none"
        stroke="rgba(59,130,246,0.5)"
        strokeWidth="1.5"
        strokeDasharray="none"
      />
      {/* Animated dot */}
      <circle r="3" fill="#3B82F6">
        <animateMotion
          dur="2.5s"
          repeatCount="indefinite"
          path={d}
        />
      </circle>
      {/* Glow dot */}
      <circle r="6" fill="rgba(59,130,246,0.3)">
        <animateMotion
          dur="2.5s"
          repeatCount="indefinite"
          path={d}
        />
      </circle>
    </g>
  )
}
