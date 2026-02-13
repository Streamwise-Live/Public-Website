import { useState, useEffect, useCallback } from 'react'
import AudioWaveform from '../ui/AudioWaveform'
import Button from '../ui/Button'

const WORDS = ['MODERATES', 'EDITS', 'FILTERS', 'ENHANCES']
const LONGEST = WORDS.reduce((a, b) => (a.length >= b.length ? a : b))
const TYPING_SPEED = 100
const DELETE_SPEED = 50
const PAUSE = 2000

export default function Hero() {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const currentWord = WORDS[wordIndex]

    if (isDeleting) {
      setText(currentWord.substring(0, text.length - 1))
    } else {
      setText(currentWord.substring(0, text.length + 1))
    }
  }, [text, wordIndex, isDeleting])

  useEffect(() => {
    const currentWord = WORDS[wordIndex]

    let timeout
    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % WORDS.length)
    } else {
      timeout = setTimeout(tick, isDeleting ? DELETE_SPEED : TYPING_SPEED)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, tick])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AudioWaveform barCount={50} />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight tracking-tight">
          Streamwise{' '}
          {/* Inline wrapper that reserves the width of the longest word */}
          <span className="text-cobalt inline-block relative align-bottom text-center">
            {/* Invisible longest word to hold width */}
            <span className="invisible">{LONGEST}</span>
            {/* Actual typed text layered on top, centered on mobile, left-aligned on desktop */}
            <span className="absolute inset-x-0 top-0 md:left-0 md:right-auto">
              {text}
              <span className="animate-blink ml-0.5 inline-block w-[3px] h-[0.75em] bg-cobalt align-middle" />
            </span>
          </span>
          <br />
          at the speed of sound.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The real-time voice control layer that prevents harmful audio before it reaches your audience.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="https://app.streamwise.gg">
            Open App
          </Button>
          <Button variant="outline" href="https://app.streamwise.gg/join">
            Register now
          </Button>
        </div>
      </div>
    </section>
  )
}
