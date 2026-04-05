import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Debug: verificar que el API key existe
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set')
    return res.status(500).json({ error: 'Email service not configured' })
  }

  const { name, email, phone, service, message } = req.body

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const result = await resend.emails.send({
      from: 'Geamy Contact Form <noreply@geamyservices.com>',
      to:   'bot@geamyservices.com',
      replyTo: email,
      subject: `[Geamy] New inquiry — ${service}`,
      html: `
        <div style="font-family: monospace; background: #0a0a0a; color: #e8edf8; padding: 32px; max-width: 600px; border: 1px solid rgba(0,255,255,0.15);">
          <div style="color: #00ffff; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 24px;">
            ◆ GEAMY SERVICES — NEW INQUIRY
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="color: rgba(255,255,255,0.4); font-size: 11px; letter-spacing: 2px; text-transform: uppercase; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); width: 140px;">From</td>
              <td style="color: #fff; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">${name}</td>
            </tr>
            <tr>
              <td style="color: rgba(255,255,255,0.4); font-size: 11px; letter-spacing: 2px; text-transform: uppercase; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">Email</td>
              <td style="color: #00ffff; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">${email}</td>
            </tr>
            <tr>
              <td style="color: rgba(255,255,255,0.4); font-size: 11px; letter-spacing: 2px; text-transform: uppercase; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">Phone</td>
              <td style="color: #fff; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">${phone || '—'}</td>
            </tr>
            <tr>
              <td style="color: rgba(255,255,255,0.4); font-size: 11px; letter-spacing: 2px; text-transform: uppercase; padding: 10px 0;">Service</td>
              <td style="color: #ff00ff; padding: 10px 0;">${service}</td>
            </tr>
          </table>

          <div style="color: rgba(255,255,255,0.4); font-size: 11px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px;">Message</div>
          <div style="color: #e8edf8; line-height: 1.7; padding: 16px; background: rgba(255,255,255,0.04); border-left: 2px solid #00ffff;">
            ${message.replace(/\n/g, '<br>')}
          </div>

          <div style="margin-top: 24px; color: rgba(255,255,255,0.2); font-size: 10px; letter-spacing: 2px;">
            ↩ Reply to this email to respond directly to ${name}
          </div>
        </div>
      `,
    })

    console.log('Email sent:', result)
    return res.status(200).json({ ok: true })

  } catch (err) {
    console.error('Resend error details:', JSON.stringify(err))
    return res.status(500).json({ error: 'Failed to send email', detail: err.message })
  }
}
