import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const TICKER_ITEMS = [
  'Network Infrastructure', 'Microsoft 365', 'Endpoint Security',
  'CCTV Systems', 'Cloud Migrations', 'IT Support', 'Disaster Recovery',
  'Automation', 'Firewall Setup', 'VPN & VLANs', 'Miami FL',
]

const TERMINAL_LINES = [
  { type: 'cmd',    text: 'nmap -sV geamyservices.com' },
  { type: 'out',    text: 'Host is up (0.0012s latency)' },
  { type: 'out',    text: 'PORT    STATE  SERVICE   VERSION' },
  { type: 'accent', text: '443/tcp [open] https     nginx' },
  { type: 'out',    text: '22/tcp  [fltrd] ssh      OpenSSH' },
  { type: 'status', text: 'SECURED & ONLINE' },
]

const DATA_STREAM = [
  '01001100', '10110010', '0xA4F2', '11001001',
  '0xFF3C', '01110101', '10001011', '0x2B9E',
  '11100001', '01011010',
]

function useCounter(target, duration = 1800, start = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setVal(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return val
}

export default function Hero() {
  const statsRef = useRef(null)
  const [counting, setCounting] = useState(false)
  const [visibleLines, setVisibleLines] = useState(0)
  const [typingStarted, setTypingStarted] = useState(false)

  const yr  = useCounter(12, 1600, counting)
  const prj = useCounter(50, 2000, counting)
  const wr  = useCounter(30, 1400, counting)

  // Stats counter trigger
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setCounting(true); io.disconnect() }
    }, { threshold: 0.5 })
    if (statsRef.current) io.observe(statsRef.current)
    return () => io.disconnect()
  }, [])

  // Start terminal typing after 1.2s
  useEffect(() => {
    const t = setTimeout(() => setTypingStarted(true), 1200)
    return () => clearTimeout(t)
  }, [])

  // Reveal terminal lines sequentially
  useEffect(() => {
    if (!typingStarted || visibleLines >= TERMINAL_LINES.length) return
    const delay = visibleLines === 0 ? 100 : 420
    const t = setTimeout(() => setVisibleLines(v => v + 1), delay)
    return () => clearTimeout(t)
  }, [typingStarted, visibleLines])

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
          {/* ── Left column ── */}
          <div className="hero-left">
            <div className="hero-badge">
              <span className="badge-dot" />
              <span>Available — Miami, FL &amp; Remote</span>
            </div>

            <h1 className="hero-title glitch" data-text="GEAMY SERVICES">
              GEAMY SERVICES
            </h1>

            <div className="hero-sub-block">
              <p className="hero-tagline">
                IT Solutions <span className="accent-inline">Built to Last.</span>
              </p>
              <p className="hero-sub">
                Security, infrastructure &amp; automation for businesses that can't afford downtime.
                Network setup, M365 migrations, firewalls, CCTV — all under one roof.
              </p>
            </div>

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

            <div className="hero-actions">
              <div className="btn-primary-wrap">
                <button className="btn-primary" onClick={() => scrollTo('contact')}>
                  Get a Free Quote <span className="btn-arrow">→</span>
                </button>
                <span className="btn-pulse-ring" />
              </div>
              <button className="btn-ghost" onClick={() => scrollTo('services')}>
                <span className="btn-ghost-line" />
                View Services
              </button>
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="hero-right">
            <div className="hero-terminal">
              <div className="terminal-bar">
                <span className="t-dot t-red" />
                <span className="t-dot t-yellow" />
                <span className="t-dot t-green" />
                <span className="t-title">geamy_services.sh</span>
              </div>
              <div className="terminal-body">
                {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
                  <p key={i} className="terminal-line">
                    {line.type === 'cmd' && (
                      <><span className="t-prompt">$</span><span className="t-cmd"> {line.text}</span></>
                    )}
                    {line.type === 'out' && (
                      <span className="t-out">{line.text}</span>
                    )}
                    {line.type === 'accent' && (
                      <span className="t-out t-accent-line">{line.text}</span>
                    )}
                    {line.type === 'status' && (
                      <span className="t-out">
                        Status: <span className="t-green-text">● {line.text}</span>
                      </span>
                    )}
                  </p>
                ))}
                <p><span className="t-prompt">$</span> <span className="t-cursor">▋</span></p>
              </div>
            </div>

            <div className="hero-data-stream" aria-hidden="true">
              {DATA_STREAM.map((v, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.35}s` }}>{v}</span>
              ))}
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
