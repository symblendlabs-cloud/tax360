import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from './Seo'
import OfficialLinkBox from './OfficialLinkBox'
import { loadNode, getNodeBySlug } from '../../data/nodeLoader'

export default function CalculatorShell({ node, children, results }) {
  // We use state to force a re-render if the node changes from GitHub
  const [currentNode, setCurrentNode] = useState(node)

  useEffect(() => {
    if (node) {
      loadNode(node.type, node.slug).then(() => {
        // After fetch, get the latest version from memory
        const updated = getNodeBySlug(node.type, node.slug)
        if (updated) setCurrentNode(updated)
      })
    }
  }, [node?.slug])

  if (!currentNode) return null

  const cleanTitle = currentNode.title.replace(/\?+$/, '').replace(/\s+/g, ' ').trim()
  const seoTitle = cleanTitle.toLowerCase().includes('calculator')
    ? `${cleanTitle} FY 2026-27`
    : `${cleanTitle} Calculator FY 2026-27`

  // Body text: prefer longAnswer from JSON, fall back to a generated explanation
  const longAnswer =
    currentNode.longAnswer?.trim() ||
    currentNode.explanation?.trim() ||
    null

  const fallbackExplanation = !longAnswer && currentNode.shortAnswer
    ? `${cleanTitle} is one of the free calculators on Tax360. ${currentNode.shortAnswer} Enter your figures in the input panel, and the result updates instantly. All calculations run in your browser, so no data is sent to a server. The tool applies the published tax slabs and rules for the selected financial year; always verify the final figure against the official Income Tax Department portal before filing.`
    : null

  // ... existing JSON-LD logic ...
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
        "description": currentNode.shortAnswer || ""
      },
      {
        "@type": "HowTo",
        "name": `How to use ${cleanTitle}`,
        "description": currentNode.shortAnswer || "",
        "step": [
          { "@type": "HowToStep", "name": "Enter your details", "text": "Fill the input fields with your income, expenses, or relevant amounts." },
          { "@type": "HowToStep", "name": "Review the results", "text": "The calculator automatically updates the results in real-time." },
          { "@type": "HowToStep", "name": "Read the official guidance", "text": "Verify the calculation against the official Income Tax Department website." }
        ]
      }
    ]
  }

  return (
    <>
      <Seo title={seoTitle} description={currentNode.shortAnswer} jsonLd={jsonLd} />
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
          {currentNode.shortAnswer && (
            <p className="text-sm text-slate-600">{currentNode.shortAnswer}</p>
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

        {/* NEW: explanatory body text for AdSense content depth */}
        {(longAnswer || fallbackExplanation) && (
          <section className="bg-white rounded-[12px] border border-[#E2E8F0] p-5 space-y-3 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-[#0F2A44]">
              About this {cleanTitle.toLowerCase().includes('calculator') ? 'calculator' : 'tool'}
            </h2>
            <p>{longAnswer || fallbackExplanation}</p>
            <p>
              Tax360 keeps every calculation on your device. The figures you enter are never uploaded, logged, or shared. Results are estimates based on the published slabs for the selected financial year and should be cross-checked with the official Income Tax Department portal or a qualified chartered accountant before you file.
            </p>
          </section>
        )}

        {currentNode.official && <OfficialLinkBox official={currentNode.official} />}

        <div className="text-xs text-slate-500">
          <Link to={`/tax360/${currentNode.type}/${currentNode.slug}`} className="font-semibold">
            ← Read full explanation
          </Link>
        </div>
      </div>
    </>
  )
}