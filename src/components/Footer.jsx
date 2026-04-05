import './Footer.css'

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-bracket">[</span>
            <span>GEAMY</span>
            <span className="logo-bracket">]</span>
          </div>
          <p className="footer-tagline">IT solutions built to last.<br />Miami, FL — Remote available.</p>
          <a href="mailto:gerardo@geamyservices.com" className="footer-email">
            gerardo@geamyservices.com
          </a>
        </div>

        <div className="footer-nav">
          <div className="footer-col">
            <span className="footer-col-title">Services</span>
            <button onClick={() => scrollTo('services')}>Network Infrastructure</button>
            <button onClick={() => scrollTo('services')}>Microsoft 365</button>
            <button onClick={() => scrollTo('services')}>Security & EDR</button>
            <button onClick={() => scrollTo('services')}>CCTV Systems</button>
            <button onClick={() => scrollTo('services')}>Web & Hosting</button>
          </div>
          <div className="footer-col">
            <span className="footer-col-title">Company</span>
            <button onClick={() => scrollTo('about')}>About</button>
            <button onClick={() => scrollTo('terms')}>Terms & Conditions</button>
            <button onClick={() => scrollTo('contact')}>Contact</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <span className="footer-copy">© {new Date().getFullYear()} Geamy Services LLC. All rights reserved.</span>
        <span className="footer-state">State of Florida, USA</span>
      </div>
    </footer>
  )
}
