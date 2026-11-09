import { Link } from 'react-router-dom'
import Seo from '../core/ui/Seo'
import { CONTACT_EMAIL } from '../config/site'

export default function About() {
  return (
    <>
      <Seo 
        title="About Tax360" 
        description="Tax360 is a free, local-only tax toolkit built by Symblend Labs. No login, no tracking, no data collection." 
      />
      <div className="max-w-3xl mx-auto space-y-4">
        <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-6">
          <h1 className="text-2xl mb-2">About Tax360</h1>
          <p className="text-sm text-slate-500">All your tax data in one website.</p>
        </header>

        <section className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 space-y-4 text-sm text-slate-700 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">What is Tax360?</h2>
            <p>
              Tax360 is a free, local-only collection of 48+ tax calculators, guides, and official links for Indian taxpayers. It covers Income Tax, GST, TDS, Capital Gains, and more.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">Who is it for?</h2>
            <p>
              Salaried employees, freelancers, business owners, senior citizens, and NRIs — anyone who wants quick, accurate answers without paying for a subscription or sharing personal data with a server.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">Who built it?</h2>
            <p>
              Tax360 is a solo project by <strong>Symblend Labs</strong>, an independent developer building tools for Indian taxpayers. All calculations run locally in your browser.
            </p>
          </div>

          <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-[8px] p-4">
            <h2 className="text-base font-bold text-red-700 mb-2">Disclaimer</h2>
            <p className="text-red-700">
              <strong>Tax360 is not a Chartered Accountant (CA).</strong> The calculators and content are for educational purposes only. Tax rules change frequently, and individual circumstances vary. Please verify all numbers and interpretations against the official Income Tax Department website (<a href="https://www.incometax.gov.in" target="_blank" rel="noreferrer" className="underline">incometax.gov.in</a>) or consult a qualified CA before filing.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">Contact</h2>
            <p>
              Have feedback or found a bug? Email us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#16A34A] font-semibold">{CONTACT_EMAIL}</a>.
            </p>
          </div>
        </section>

        <div className="text-center text-xs text-slate-500">
          <Link to="/" className="text-[#16A34A] font-semibold">← Back to Home</Link>
        </div>
      </div>
    </>
  )
}