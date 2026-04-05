import './Services.css'

const services = [
  {
    id: '01',
    title: 'Network Infrastructure',
    desc: 'Firewall, router, switch, and Wi-Fi setup for offices of any size. Structured cabling, VLANs, VPNs, and everything in between.',
    tags: ['FortiGate', 'Meraki', 'Ubiquiti', 'MikroTik'],
    color: '#00ffff',
  },
  {
    id: '02',
    title: 'Microsoft 365 & Cloud Migrations',
    desc: 'Full migrations from on-premise or legacy environments to Microsoft 365 or Google Workspace. Email, SharePoint, Teams, Intune — end to end.',
    tags: ['M365', 'Azure', 'Intune', 'Google Workspace'],
    color: '#00ffff',
  },
  {
    id: '03',
    title: 'Security & Endpoint Protection',
    desc: 'Antivirus, EDR, ThreatLocker, and endpoint hardening. Protect your devices and data from the inside out.',
    tags: ['EDR', 'ThreatLocker', 'Sophos', 'Palo Alto'],
    color: '#ff00ff',
  },
  {
    id: '04',
    title: 'CCTV & Physical Security',
    desc: 'IP camera systems, NVR setup, remote viewing, and access control integration for commercial and business environments.',
    tags: ['IP Cameras', 'NVR', 'Access Control', 'Remote View'],
    color: '#ff00ff',
  },
  {
    id: '05',
    title: 'Website, Domain & Hosting',
    desc: 'Domain registration, DNS management, and hosting setup on GoDaddy, Hostinger, or Microsoft 365. Includes basic web design and deployment.',
    tags: ['GoDaddy', 'Hostinger', 'DNS', 'Web Design'],
    color: '#00ffff',
  },
  {
    id: '06',
    title: 'Automation & Workflow',
    desc: 'Automate repetitive IT tasks and business workflows. From RMM scripting to process optimization — save time and reduce human error.',
    tags: ['NinjaRMM', 'PowerShell', 'ConnectWise', 'Scripts'],
    color: '#ff00ff',
  },
  {
    id: '07',
    title: 'Backup & Disaster Recovery',
    desc: 'Acronis, Veeam, and cloud backup solutions. Make sure your data survives any failure — hardware, ransomware, or human error.',
    tags: ['Acronis', 'Veeam', 'Cloud Backup', 'Recovery'],
    color: '#00ffff',
  },
  {
    id: '08',
    title: 'IT Support & Helpdesk',
    desc: 'On-demand technical support for your team. Remote or on-site troubleshooting, hardware installation, and general IT maintenance.',
    tags: ['Remote Support', 'On-Site', 'Hardware', 'Maintenance'],
    color: '#ff00ff',
  },
]

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">What we do</span>
          <h2 className="section-title">Services</h2>
          <p className="section-desc">
            From a single workstation to a full office network — we handle implementation, security,
            and support so you can focus on running your business.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div
              className={`service-card reveal reveal-delay-${(i % 4) + 1}`}
              key={s.id}
              style={{ '--card-accent': s.color }}
            >
              <div className="service-card-top">
                <span className="service-num">{s.id}</span>
                <div className="service-dot" />
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map(t => (
                  <span key={t} className="service-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
