import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../core/ui/Seo'
import { CONTACT_EMAIL } from '../config/site'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Tax360 Contact from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <Seo 
        title="Contact Us" 
        description="Get in touch with Tax360 by Symblend Labs. Response within 2-3 business days." 
      />
      <div className="max-w-2xl mx-auto space-y-4">
        <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-6">
          <h1 className="text-2xl mb-2">Contact Us</h1>
          <p className="text-sm text-slate-600">
            Have a question, feedback, or bug to report? Fill the form below and click <strong>Send via Email</strong>. This opens your default email app — no data is sent to any server.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#0F2A44] mb-1">Your Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-[12px] border border-[#E2E8F0] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40"
              placeholder="e.g. Rahul Sharma"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0F2A44] mb-1">Your Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-[12px] border border-[#E2E8F0] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0F2A44] mb-1">Message</label>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-[12px] border border-[#E2E8F0] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40"
              placeholder="Describe your question or feedback..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold py-2.5 rounded-[12px] transition"
          >
            Send via Email
          </button>
        </form>

        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[12px] p-4 text-sm text-[#15803D]">
          <p className="font-semibold mb-1">Response Time</p>
          <p>We typically respond within 2-3 business days.</p>
          <p className="mt-2">Direct email: <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline">{CONTACT_EMAIL}</a></p>
        </div>

        <div className="bg-[#FEF3C7] border border-[#FDE68A] rounded-[12px] p-4 text-sm text-[#B45309]">
          <p className="font-semibold mb-1">Please Note</p>
          <p>We do not give personalized tax advice. For specific situations, please consult a Chartered Accountant.</p>
        </div>

        <div className="text-center text-xs text-slate-500">
          <Link to="/" className="text-[#16A34A] font-semibold">← Back to Home</Link>
        </div>
      </div>
    </>
  )
}