import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="scanline" />
      
      {/* Glow orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="container hero-inner">
        <div className="hero-badge">
          <span className="badge-dot" />
          <span>Available for new clients — Miami, FL</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-title-line line-1">IT Solutions</span>
          <span className="hero-title-line line-2">
            <span className="outline-text">Built to</span>
            <span className="accent-text"> Last.</span>
          </span>
        </h1>

        <p className="hero-sub">
          Security, infrastructure, and automation for businesses that can't afford downtime. 
          Network setup, Microsoft 365 migrations, firewalls, CCTV, web hosting — all under one roof.
        </p>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">12<span className="stat-plus">+</span></span>
            <span className="stat-label">Years experience</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">50<span className="stat-plus">+</span></span>
            <span className="stat-label">Projects delivered</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">30<span className="stat-plus">d</span></span>
            <span className="stat-label">Work warranty</span>
          </div>
        </div>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            Get a Free Quote
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('services')}>
            View Services
          </button>
        </div>

        <div className="hero-terminal">
          <div className="terminal-bar">
            <span className="t-dot t-red"/><span className="t-dot t-yellow"/><span className="t-dot t-green"/>
            <span className="t-title">geamy_services.sh</span>
          </div>
          <div className="terminal-body">
            <p><span className="t-prompt">$</span> <span className="t-cmd">ping geamyservices.com</span></p>
            <p><span className="t-out">PING geamyservices.com: 56 data bytes</span></p>
            <p><span className="t-out">64 bytes from 216.150.1.1: icmp_seq=0 ttl=64 time=<span className="t-accent">1.2 ms</span></span></p>
            <p><span className="t-out">Status: <span className="t-green-text">● ONLINE</span> — ready to serve</span></p>
            <p><span className="t-prompt">$</span> <span className="t-cursor">▋</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}
