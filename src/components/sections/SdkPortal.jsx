import Button from '../ui/Button'
import CodeBlock from '../ui/CodeBlock'
import { installLine, sampleCode } from '../../data/codeSnippets'

export default function SdkPortal() {
  return (
    <section id="sdk" className="py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ship <span className="text-cobalt">safer</span>, faster
          </h2>
          <p className="text-slate-400 mb-2 text-lg">
            Get started in under 5 minutes.
          </p>
          <p className="text-slate-400 mb-6 text-sm leading-relaxed">
            Install the SDK, pass in your audio stream, and let Streamwise handle
            classification, confidence scoring, and automated intervention — all
            from a single package.
          </p>
          <p className="text-slate-400 mb-8 text-sm leading-relaxed">
            Already streaming? Streamwise plugs directly into platforms like{' '}
            <span className="text-white font-medium">Twitch</span>,{' '}
            <span className="text-white font-medium">YouTube</span>, and tools
            like <span className="text-white font-medium">OBS Studio</span>{' '}
            — no SDK required. Use our built-in integrations to start
            moderating in seconds.
          </p>
          <Button href="https://discord.gg/BMTmMMAwUc">
            Request SDK Access
          </Button>
        </div>

        {/* Right column — code + floating platform logos */}
        <div className="relative">
          {/* Floating platform icons — big, spaced, overlapping the code */}
          <div className="absolute -top-8 left-6 right-6 z-10 flex justify-between pointer-events-none">
            <div className="drop-shadow-[0_4px_12px_rgba(145,70,255,0.4)]" style={{ transform: 'rotate(-8deg) translateY(4px)' }}>
              <TwitchIcon />
            </div>
            <div className="drop-shadow-[0_4px_12px_rgba(255,0,0,0.3)]" style={{ transform: 'rotate(5deg) translateY(-2px)' }}>
              <YouTubeIcon />
            </div>
            <div className="drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)]" style={{ transform: 'rotate(-4deg) translateY(6px)' }}>
              <OBSIcon />
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <CodeBlock lines={installLine} />
            <CodeBlock lines={sampleCode} />
          </div>
        </div>
      </div>
    </section>
  )
}

function TwitchIcon() {
  return (
    <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none">
      <path d="M3.5 2L2 5.5V20h5v3h3l3-3h4l5-5V2H3.5zM18 11l-3 3h-4l-2.5 2.5V14H5V4h13v7z" fill="#9146FF" />
      <path d="M15 7h-2v4h2V7zM11 7H9v4h2V7z" fill="#9146FF" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none">
      <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 00.5 6.19 31.56 31.56 0 000 12a31.56 31.56 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.56 31.56 0 0024 12a31.56 31.56 0 00-.5-5.81z" fill="#FF0000" />
      <path d="M9.75 15.02l6.25-3.52L9.75 8v7.02z" fill="white" />
    </svg>
  )
}

function OBSIcon() {
  return (
    <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#302E31" />
      <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 2.5c1.38 0 2.63.56 3.54 1.46A4.98 4.98 0 0117 10.5c0 2.76-2.24 5-5 5s-5-2.24-5-5c0-1.38.56-2.63 1.46-3.54A4.98 4.98 0 0112 5.5z" fill="white" />
      <circle cx="12" cy="10.5" r="2.5" fill="white" />
    </svg>
  )
}
