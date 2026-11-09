import { Link } from 'react-router-dom'
import Seo from '../core/ui/Seo'
import { CONTACT_EMAIL } from '../config/site'

export default function Privacy() {
  return (
    <>
      <Seo 
        title="Privacy Policy" 
        description="Tax360 collects nothing. No login, no tracking, all data stays in your browser." 
      />
      <div className="max-w-3xl mx-auto space-y-4">
        <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-6">
          <h1 className="text-2xl mb-2">Privacy Policy</h1>
          <p className="text-sm text-slate-500">Last updated: November 2026</p>
        </header>

        <section className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 space-y-4 text-sm text-slate-700 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">We collect nothing.</h2>
            <p>
              Tax360 has <strong>no backend server, no user accounts, no login, and no tracking</strong>. Every calculation runs entirely inside your browser. Your inputs never leave your device.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">Calculator Data</h2>
            <p>
              The amounts, incomes, and details you type into any calculator are stored only in your browser's memory. They are erased the moment you close or refresh the page.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">No Selling of Data</h2>
            <p>
              Since we don't collect data, we can't and don't sell it. There are no cookies, no analytics scripts, and no third-party tracking embedded in this app.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">Advertisements (Future)</h2>
            <p>
              In the future, Tax360 may display ads via Google AdSense to keep the service free. If so, Google may use cookies to serve ads based on your prior visits to this and other websites. You can opt out of personalized ads by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" className="text-[#16A34A] underline">Google Ads Settings</a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">Contact</h2>
            <p>
              For any privacy concern, email <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#16A34A] font-semibold">{CONTACT_EMAIL}</a>.
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