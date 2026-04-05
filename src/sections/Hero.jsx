import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const TICKER_ITEMS = [
  'Network Infrastructure', 'Microsoft 365', 'Endpoint Security',
  'CCTV Systems', 'Cloud Migrations', 'IT Support', 'Disaster Recovery',
  'Automation', 'Firewall Setup', 'VPN & VLANs', 'Miami FL',
]

function useCounter(target, duration = 1800, start = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      setVal(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return val
}

export default function Hero() {
  const statsRef = useRef(null)
  const [counting, setCounting] = useState(false)

  const yr  = useCounter(12, 1600, counting)
  const prj = useCounter(50, 2000, counting)
  const wr  = useCounter(30, 1400, counting)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setCounting(true); io.disconnect() }
    }, { threshold: 0.5 })
    if (statsRef.current) io.observe(statsRef.current)
    return () => io.disconnect()
  }, [])

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <section className="hero" id="home">
        <div className="scanline" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="container hero-inner">
          {/* Badge */}
          <div className="hero-badge fade-in">
            <span className="badge-dot" />
            <span>Available — Miami, FL &amp; Remote</span>
          </div>

          {/* Glitch title */}
          <h1 className="hero-title glitch" data-text="GEAMY SERVICES">
            GEAMY SERVICES
          </h1>

          <div className="hero-sub-block fade-up">
            <p className="hero-tagline">
              IT Solutions <span className="accent-inline">Built to Last.</span>
            </p>
            <p className="hero-sub">
              Security, infrastructure &amp; automation for businesses that can't afford downtime.
              Network setup, M365 migrations, firewalls, CCTV — all under one roof.
            </p>
          </div>

          {/* Stats */}
          <div className="hero-stats" ref={statsRef}>
            <div className="stat">
              <span className="stat-num">{yr}<span className="stat-plus">+</span></span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">{prj}<span className="stat-plus">+</span></span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">{wr}<span className="stat-plus">d</span></span>
              <span className="stat-label">Work Warranty</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('contact')}>
              Get a Free Quote <span className="btn-arrow">→</span>
            </button>
            <button className="btn-ghost" onClick={() => scrollTo('services')}>
              <span className="btn-ghost-line" />
              View Services
            </button>
          </div>

          {/* Terminal */}
          <div className="hero-terminal">
            <div className="terminal-bar">
              <span className="t-dot t-red" />
              <span className="t-dot t-yellow" />
              <span className="t-dot t-green" />
              <span className="t-title">geamy_services.sh</span>
            </div>
            <div className="terminal-body">
              <p><span className="t-prompt">$</span> <span className="t-cmd">nmap -sV geamyservices.com</span></p>
              <p><span className="t-out">Host is up (0.0012s latency)</span></p>
              <p><span className="t-out">PORT&nbsp;&nbsp; STATE SERVICE&nbsp; VERSION</span></p>
              <p><span className="t-out">443/tcp <span className="t-accent">open</span>&nbsp; https&nbsp;&nbsp;&nbsp; nginx</span></p>
              <p><span className="t-out">Status: <span className="t-green-text">● SECURED &amp; ONLINE</span></span></p>
              <p><span className="t-prompt">$</span> <span className="t-cursor">▋</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker marquee */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span className="ticker-item" key={i}>{item}</span>
          ))}
        </div>
      </div>
    </>
  )
}
