import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import About from './sections/About'
import Terms from './sections/Terms'
import Contact from './sections/Contact'

export default function App() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const mouse   = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })
  const rafRef  = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ringEl = ringRef.current

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      dot.style.left = e.clientX + 'px'
      dot.style.top  = e.clientY + 'px'
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const animate = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.1)
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.1)
      ringEl.style.left = ring.current.x + 'px'
      ringEl.style.top  = ring.current.y + 'px'
      rafRef.current = requestAnimationFrame(animate)
    }

    const onEnterLink = () => ringEl.classList.add('hovering')
    const onLeaveLink = () => ringEl.classList.remove('hovering')

    document.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animate)

    const addListeners = () => {
      document.querySelectorAll('a, button, .service-card, .stack-item').forEach(el => {
        el.addEventListener('mouseenter', onEnterLink)
        el.addEventListener('mouseleave', onLeaveLink)
      })
    }
    addListeners()
    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
    }
  }, [])

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.12 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div className="cursor-dot"  ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Terms />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
