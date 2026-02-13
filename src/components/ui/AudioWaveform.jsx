import { useMemo } from 'react'

export default function AudioWaveform({ barCount = 50, className = '' }) {
  const bars = useMemo(() => {
    return Array.from({ length: barCount }, (_, i) => {
      const barWidth = 60 / barCount
      const x = i * (100 / barCount)
      // Each bar oscillates between a short and tall height
      const minH = 10 + Math.random() * 20
      const maxH = 50 + Math.random() * 50
      const dur = 3 + Math.random() * 3 // 3-6s per bar
      const delay = Math.random() * -6 // negative = already mid-animation on load

      return (
        <rect
          key={i}
          x={`${x}%`}
          width={`${barWidth}%`}
          rx="1"
          fill="url(#waveGradient)"
        >
          {/* Animate height */}
          <animate
            attributeName="height"
            values={`${minH}%;${maxH}%;${minH}%`}
            dur={`${dur}s`}
            begin={`${delay}s`}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
          />
          {/* Animate y to keep bars anchored to the bottom */}
          <animate
            attributeName="y"
            values={`${100 - minH}%;${100 - maxH}%;${100 - minH}%`}
            dur={`${dur}s`}
            begin={`${delay}s`}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
          />
        </rect>
      )
    })
  }, [barCount])

  return (
    <svg
      className={`absolute inset-0 w-full h-full opacity-20 ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {bars}
    </svg>
  )
}
