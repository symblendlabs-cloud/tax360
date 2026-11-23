import { Link } from 'react-router-dom'
import Seo from '../core/ui/Seo'
import { CONTACT_EMAIL } from '../config/site'

export default function Privacy() {
  return (
    <>
      <Seo 
        title="Privacy Policy" 
        description="Tax360 privacy policy: how we handle data, cookies, and third-party advertising (Google AdSense)." 
      />
      <div className="max-w-3xl mx-auto space-y-4">
        <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-6">
          <h1 className="text-2xl mb-2">Privacy Policy</h1>
          <p className="text-sm text-slate-500">Last updated: November 2026</p>
        </header>

        <section className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 space-y-6 text-sm text-slate-700 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">1. Information We Collect</h2>
            <p>
              Tax360 is designed as a privacy-first tool. We do <strong>not</strong> require user accounts, and we do <strong>not</strong> store or transmit the financial figures you enter into our calculators. All calculations are performed locally in your browser. When you close the page, your input data is cleared.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">2. Cookies and Web Beacons</h2>
            <p>
              Like most websites, Tax360 may use "cookies" to store information about visitors' preferences and to record user-specific information on which pages the user accesses. 
            </p>
            <p className="mt-2">
              We may also use third-party advertising companies (such as Google AdSense) to serve ads when you visit our website. These companies may use information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">3. Google AdSense and the DoubleClick DART Cookie</h2>
            <p>
              Google, as a third-party vendor, uses cookies to serve ads on Tax360. Google's use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" className="text-[#16A34A] underline">Google Ads Settings</a> page.
            </p>
            <p className="mt-2">
              Third-party ad servers or ad networks may also use cookies to track user activities on this site to measure advertising effectiveness. Tax360 has no access to or control over these cookies that are used by third-party advertisers.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">4. How to Opt Out of Cookies</h2>
            <p>
              You can choose to disable or selectively turn off our cookies or third-party cookies in your browser settings. However, this can affect how you are able to interact with our site as well as other websites. You can also opt out of personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer" className="text-[#16A34A] underline">AboutAds.info</a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#0F2A44] mb-2">5. Contact</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#16A34A] font-semibold">{CONTACT_EMAIL}</a>.
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