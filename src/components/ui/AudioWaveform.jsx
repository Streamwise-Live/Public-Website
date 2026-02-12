import { useMemo } from 'react'

export default function AudioWaveform({ barCount = 50, className = '' }) {
  const bars = useMemo(
    () =>
      Array.from({ length: barCount }, (_, i) => {
        const delay = (i * 0.18) % 4
        const height = 20 + Math.random() * 80
        return (
          <rect
            key={i}
            x={i * (100 / barCount) + '%'}
            y={`${100 - height}%`}
            width={`${60 / barCount}%`}
            height={`${height}%`}
            rx="2"
            fill="url(#waveGradient)"
            style={{
              transformOrigin: 'center bottom',
              animation: `waveform-pulse 4s ease-in-out ${delay}s infinite alternate`,
            }}
          />
        )
      }),
    [barCount]
  )

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
