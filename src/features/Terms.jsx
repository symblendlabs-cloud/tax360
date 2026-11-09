import { Link } from 'react-router-dom'
import Seo from '../core/ui/Seo'
import { CONTACT_EMAIL } from '../config/site'

export default function Terms() {
  return (
    <>
      <Seo 
        title="Terms of Use" 
        description="Tax360 Terms of Use. Information only, not professional tax advice. Verify all numbers with official sources." 
      />
      <div className="max-w-3xl mx-auto space-y-4">
        <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-6">
          <h1 className="text-2xl mb-2">Terms of Use</h1>
          <p className="text-sm text-slate-500">Last updated: November 2026</p>
        </header>

        <section className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 space-y-4 text-sm text-slate-700 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">1. Information Only</h2>
            <p>
              Tax360 is provided "as is" for educational and informational purposes. It is not a substitute for professional tax advice, and no user should rely on it for filing decisions without independent verification.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">2. Not Professional Advice</h2>
            <p>
              We are not Chartered Accountants, tax lawyers, or financial advisors. Nothing on this website constitutes professional tax advice or creates a client relationship.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">3. Verify With Official Sources</h2>
            <p>
              Tax rules and slab rates change frequently (through Finance Acts, Budgets, Circulars, and Notifications). Always verify the current rules and rates on the official Income Tax Department website (<a href="https://www.incometax.gov.in" target="_blank" rel="noreferrer" className="text-[#16A34A] underline">incometax.gov.in</a>) or consult a CA before acting on any numbers shown here.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">4. Limitation of Liability</h2>
            <p>
              Symblend Labs and Tax360 are not liable for any loss, penalty, or damage arising from reliance on the calculations or content of this website. Use at your own risk.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">5. Data & Privacy</h2>
            <p>
              All calculations run locally in your browser. We collect no data. See our <Link to="/tax360/privacy" className="text-[#16A34A] underline">Privacy Policy</Link> for details.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">6. Changes to These Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of Tax360 constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">7. Contact</h2>
            <p>
              Questions about these terms? Email <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#16A34A] font-semibold">{CONTACT_EMAIL}</a>.
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