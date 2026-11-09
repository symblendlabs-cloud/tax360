import { Link } from 'react-router-dom'
import { CALCULATORS } from './calculators/CalculatorRouter'

// Helper to guess category from slug for better grouping
const getCategory = (slug) => {
  if (slug.includes('tds')) return 'TDS'
  if (slug.includes('gst')) return 'GST'
  if (slug.includes('cg-') || slug.includes('indexation') || slug.includes('sec54') || slug.includes('gold') || slug.includes('crypto')) return 'Capital Gains & Wealth'
  if (slug.includes('loan') || slug.includes('sip') || slug.includes('swp') || slug.includes('epf') || slug.includes('ppf') || slug.includes('lumpsum')) return 'Investments & Loans'
  if (slug.includes('44ad') || slug.includes('business') || slug.includes('freelancer') || slug.includes('professional')) return 'Business & Freelance'
  return 'Income Tax & Salary'
}

export default function CalculatorHub() {
  const entries = Object.entries(CALCULATORS)
  
  // Group them
  const grouped = entries.reduce((acc, [slug, entry]) => {
    const cat = getCategory(slug)
    if (!acc[cat]) acc[cat] = []
    acc[cat].push({ slug, ...entry })
    return acc
  }, {})

  return (
    <div className="space-y-8">
      <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 sm:p-8">
        <h1 className="text-2xl mb-2">All Calculators</h1>
        <p className="text-sm text-slate-600">
          {entries.length} free, local-only tools to plan your taxes and investments.
        </p>
      </header>

      {Object.entries(grouped).map(([category, tools]) => (
        <section key={category}>
          <h2 className="text-lg font-bold text-[#0F2A44] mb-3 border-b border-[#E2E8F0] pb-2">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                to={`/tools/${tool.slug}`}
                className="bg-white rounded-[12px] border border-[#E2E8F0] p-4 hover:border-[#16A34A] hover:shadow-sm transition"
              >
                <h3 className="font-semibold text-[#0F2A44] text-sm mb-1">{tool.title}</h3>
                <p className="text-xs text-slate-500">Open calculator →</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}