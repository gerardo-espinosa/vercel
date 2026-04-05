import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['Services', 'About', 'Terms', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a href="#" className="navbar-logo" onClick={e => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}) }}>
          <span className="logo-bracket">[</span>
          <span className="logo-text">GEAMY</span>
          <span className="logo-bracket">]</span>
        </a>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={e => handleNav(e, l)} className="nav-link">
              <span className="nav-link-num">/ </span>{l}
            </a>
          ))}
          <a href="#contact" onClick={e => handleNav(e, 'Contact')} className="nav-cta">
            Get a Quote
          </a>
        </div>

        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </div>
    </nav>
  )
}
