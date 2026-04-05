import './Terms.css'

const materialTerms = [
  { num: '01', title: 'Deposit Required', text: '50% of the total invoice must be paid before any order is placed. No exceptions.' },
  { num: '02', title: 'Balance on Delivery', text: 'The remaining 50% is due before delivery or installation of any equipment.' },
  { num: '03', title: 'Non-Refundable Deposit', text: 'Cancellations forfeit the deposit. It covers administrative costs already incurred.' },
  { num: '04', title: 'Claims Window', text: 'Defective or incorrect items must be reported within 7 business days of receipt.' },
  { num: '05', title: 'Title of Ownership', text: 'All materials remain property of Geamy Services LLC until full payment is received.' },
  { num: '06', title: 'Payment Methods', text: 'Bank transfer, credit card, Zelle, or any method agreed upon in advance.' },
]

const serviceTerms = [
  { num: '01', title: 'Assessment First', text: 'Every project starts with an evaluation. Depending on scope, this may be billed or included in the quote.' },
  { num: '02', title: 'Written Approval', text: 'No work starts without a detailed quote and written client approval.' },
  { num: '03', title: '50% Deposit', text: 'All implementation and migration projects require a deposit to reserve scheduling.' },
  { num: '04', title: 'Hourly Work', text: 'One-time support and diagnostics are billed hourly at the agreed rate. Client is notified before overages.' },
  { num: '05', title: 'Client Responsibilities', text: 'Access, credentials, and required information must be provided by the client. Delays may incur extra charges.' },
  { num: '06', title: 'Third-Party Limitations', text: 'Geamy Services LLC is not liable for failures in Microsoft, Google, GoDaddy, or other third-party platforms.' },
  { num: '07', title: 'Scope Changes', text: 'Out-of-scope work is quoted and approved separately before execution.' },
  { num: '08', title: '30-Day Warranty', text: 'All completed work is covered for 30 days. If the same issue recurs due to our work, we fix it at no cost.' },
]

export default function Terms() {
  return (
    <section className="terms-section" id="terms">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Legal</span>
          <h2 className="section-title">Terms &amp; Conditions</h2>
          <p className="section-desc">
            Clear terms protect everyone. Here's exactly how we work.
          </p>
        </div>

        <div className="terms-blocks">
          <div className="terms-block">
            <h3 className="terms-block-title">
              <span className="block-icon">⬡</span>
              Materials &amp; Device Procurement
            </h3>
            <div className="terms-list">
              {materialTerms.map(t => (
                <div className="term-item" key={t.num}>
                  <span className="term-num">{t.num}</span>
                  <div>
                    <strong className="term-title">{t.title}</strong>
                    <p className="term-text">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="terms-block">
            <h3 className="terms-block-title">
              <span className="block-icon">⬡</span>
              IT Services &amp; Implementation
            </h3>
            <div className="terms-list">
              {serviceTerms.map(t => (
                <div className="term-item" key={t.num}>
                  <span className="term-num">{t.num}</span>
                  <div>
                    <strong className="term-title">{t.title}</strong>
                    <p className="term-text">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="terms-footer">
          <span className="section-label">Jurisdiction</span>
          <p className="terms-jur">
            Any disputes are governed by the laws of the State of Florida under the jurisdiction of its competent courts.
          </p>
        </div>
      </div>
    </section>
  )
}
