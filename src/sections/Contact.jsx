import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <span className="section-label">Get in touch</span>
          <h2 className="section-title">Let's talk<br /><span style={{color:'var(--accent)'}}>about your project.</span></h2>
          <p className="contact-sub">
            Tell us what you need. We'll come back with a clear quote, a timeline, and zero tech jargon unless you want it.
          </p>

          <div className="contact-details">
            <a href="mailto:gerardo@geamyservices.com" className="contact-detail">
              <span className="detail-icon">✉</span>
              <div>
                <span className="detail-label">Email</span>
                <span className="detail-val">gerardo@geamyservices.com</span>
              </div>
            </a>
            <a href="https://wa.me/13054000000" target="_blank" rel="noopener noreferrer" className="contact-detail">
              <span className="detail-icon">◈</span>
              <div>
                <span className="detail-label">WhatsApp</span>
                <span className="detail-val">Message us directly</span>
              </div>
            </a>
            <div className="contact-detail">
              <span className="detail-icon">◉</span>
              <div>
                <span className="detail-label">Location</span>
                <span className="detail-val">Miami, FL — Remote available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          {status === 'success' ? (
            <div className="form-success">
              <span className="success-icon">✓</span>
              <h3>Message received.</h3>
              <p>We'll get back to you within one business day.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone</label>
                  <input name="phone" type="tel" placeholder="(305) 000-0000" value={form.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Service needed</label>
                  <select name="service" value={form.service} onChange={handleChange} required>
                    <option value="">Select a service</option>
                    <option>Network Infrastructure</option>
                    <option>Microsoft 365 / Cloud Migration</option>
                    <option>Security & Endpoint Protection</option>
                    <option>CCTV & Physical Security</option>
                    <option>Website, Domain & Hosting</option>
                    <option>Automation & Workflow</option>
                    <option>Backup & Disaster Recovery</option>
                    <option>IT Support & Helpdesk</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Tell us about your project</label>
                <textarea name="message" rows="5" placeholder="Describe what you need..." value={form.message} onChange={handleChange} required />
              </div>
              {status === 'error' && (
                <p className="form-error">Something went wrong. Try emailing us directly at gerardo@geamyservices.com</p>
              )}
              <button type="submit" className="btn-primary form-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'} <span>→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
