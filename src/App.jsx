import { useEffect, useRef } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import IndustryContext from './components/sections/IndustryContext'
import FeatureGrid from './components/sections/FeatureGrid'
import LogicEngineDemo from './components/sections/LogicEngineDemo'
import SdkPortal from './components/sections/SdkPortal'
import Partners from './components/sections/Partners'

export default function App() {
  const sectionsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-midnight">
      <Navbar />
      <main>
        <Hero />
        <div ref={(el) => (sectionsRef.current[0] = el)} className="opacity-0">
          <IndustryContext />
        </div>
        <div ref={(el) => (sectionsRef.current[1] = el)} className="opacity-0">
          <FeatureGrid />
        </div>
        <div ref={(el) => (sectionsRef.current[2] = el)} className="opacity-0">
          <LogicEngineDemo />
        </div>
        <div ref={(el) => (sectionsRef.current[3] = el)} className="opacity-0">
          <SdkPortal />
        </div>
        <div ref={(el) => (sectionsRef.current[4] = el)} className="opacity-0">
          <Partners />
        </div>
      </main>
      <Footer />
    </div>
  )
}
