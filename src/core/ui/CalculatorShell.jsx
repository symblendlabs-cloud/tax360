import { Link } from 'react-router-dom'
import Seo from './Seo'
import OfficialLinkBox from './OfficialLinkBox'

export default function CalculatorShell({ node, children, results }) {
  if (!node) return null

  const cleanTitle = node.title.replace(/\?+$/, '').replace(/\s+/g, ' ').trim()
  const seoTitle = cleanTitle.toLowerCase().includes('calculator')
    ? `${cleanTitle} FY 2026-27`
    : `${cleanTitle} Calculator FY 2026-27`

  // Build JSON-LD for this calculator page
  const siteUrl = window.location.origin
  const currentUrl = siteUrl + window.location.pathname
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": cleanTitle,
        "url": currentUrl,
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Any (Browser)",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        },
        "description": node.shortAnswer || ""
      },
      {
        "@type": "HowTo",
        "name": `How to use ${cleanTitle}`,
        "description": node.shortAnswer || "",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Enter your details",
            "text": "Fill the input fields with your income, expenses, or relevant amounts."
          },
          {
            "@type": "HowToStep",
            "name": "Review the results",
            "text": "The calculator automatically updates the results in real-time."
          },
          {
            "@type": "HowToStep",
            "name": "Read the official guidance",
            "text": "Verify the calculation against the official Income Tax Department website."
          }
        ]
      }
    ]
  }

  return (
    <>
      <Seo title={seoTitle} description={node.shortAnswer} jsonLd={jsonLd} />
      <div className="space-y-4">
        <nav className="text-xs text-slate-500">
          <Link to="/" className="hover:text-[#0F2A44]">Home</Link>
          <span className="mx-1">/</span>
          <Link to="/tools" className="hover:text-[#0F2A44]">Calculators</Link>
          <span className="mx-1">/</span>
          <span className="text-[#0F2A44]">{cleanTitle}</span>
        </nav>

        <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
          <h1 className="text-2xl mb-1">{cleanTitle}</h1>
          {node.shortAnswer && (
            <p className="text-sm text-slate-600">{node.shortAnswer}</p>
          )}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-3 bg-white rounded-[12px] border border-[#E2E8F0] p-5 space-y-4">
            <h2 className="text-sm font-semibold text-navy uppercase tracking-wide">
              Inputs
            </h2>
            {children}
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h2 className="text-sm font-semibold text-navy uppercase tracking-wide">
              Results
            </h2>
            {results}
          </div>
        </div>

        {node.official && <OfficialLinkBox official={node.official} />}

        <div className="text-xs text-slate-500">
          <Link to={`/tax360/${node.type}/${node.slug}`} className="font-semibold">
            ← Read full explanation
          </Link>
        </div>
      </div>
    </>
  )
}