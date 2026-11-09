import Seo from '../core/ui/Seo'
import { CONTACT_EMAIL } from '../config/site'

export default function Contact() {
  return (
    <>
      <Seo title="Contact Us" description="Get in touch with Tax360 by Symblend Labs." />
      <div className="max-w-2xl mx-auto space-y-4">
        <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 text-center">
          <h1 className="text-2xl mb-2">Contact Us</h1>
          <p className="text-sm text-slate-600">
            Have a question, feedback, or bug to report? Fill the form below and we'll get back to you.
          </p>
        </header>

        <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-2 overflow-hidden flex justify-center">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSdg8j1Ba3Pt05ji_jni-oGrDlS0HLghXaDUAsfVdwyeA_IEvQ/viewform?embedded=true" 
            width="100%" 
            height="687" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
            className="rounded-lg max-w-full"
          >
            Loading…
          </iframe>
        </div>

        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[12px] p-4 text-sm text-[#15803D] text-center">
          <p className="font-semibold mb-1">Prefer Email?</p>
          <p>You can also reach us directly at <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline">{CONTACT_EMAIL}</a></p>
        </div>
      </div>
    </>
  )
}