const partners = [
  { name: 'McGill Engine', src: '/assets/partners/engine-logo.png' },
  { name: 'NEXT AI', src: '/assets/partners/nextai-logo.png' },
  { name: 'MILA', src: '/assets/partners/mila-logo.png' },
  { name: 'Creative Destruction Lab', src: '/assets/partners/cdl-logo.png' },
]

export default function Partners() {
  return (
    <section className="py-24 px-4 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Backed by <span className="text-cobalt">world-class</span> partners
        </h2>
        <p className="text-slate-400 mb-12 max-w-xl mx-auto text-sm">
          We're supported by leading accelerators and research institutions.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partners.map((p) => (
            <img
              key={p.name}
              src={p.src}
              alt={p.name}
              className="h-10 md:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
