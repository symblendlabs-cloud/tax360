import { Link } from 'react-router-dom'

const COMPARISONS = [
  {
    id: 'new-vs-old',
    title: 'New Regime vs Old Regime',
    desc: 'Compare the two tax structures to see which one saves you more money based on your deductions.',
    links: [
      { label: 'Compare Regimes (Calculator)', url: '/tools/income-tax-calculator' },
      { label: 'Budget 2026 Changes', url: '/budget' }
    ]
  },
  {
    id: 'crypto-vs-equity',
    title: 'Crypto vs Equity Taxation',
    desc: 'Understand how gains from cryptocurrency differ from stock market or mutual fund investments.',
    links: [
      { label: 'Crypto Tax Guide (Node)', url: '/tax360/tool/cg-crypto-overview' },
      { label: 'Crypto Tax (Calculator)', url: '/tools/cg-crypto-calculator' },
      { label: 'Stock Tax (Calculator)', url: '/tools/cg-stocks-calculator' }
    ]
  },
  {
    id: 'itr-forms',
    title: 'ITR-1 vs ITR-4',
    desc: 'Sahaj vs Sugam. Learn which income tax return form applies to your salary or business income.',
    links: [
      { label: 'View Forms Overview', url: '/forms' },
      { label: 'Section 44AD (Calculator)', url: '/tools/44ad-calculator' }
    ]
  },
  {
    id: 'presumptive',
    title: '44AD vs 44ADA',
    desc: 'Compare presumptive taxation for small businesses vs independent professionals.',
    links: [
      { label: 'Section 44AD (Business)', url: '/tools/44ad-calculator' },
      { label: 'Section 44ADA (Freelancer)', url: '/tools/44ada-calculator' }
    ]
  }
]

export default function ComparePages() {
  return (
    <div className="space-y-4">
      <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
        <h1 className="text-2xl mb-1">Compare Tax Rules</h1>
        <p className="text-sm text-slate-600">
          Side-by-side breakdowns of competing tax structures.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {COMPARISONS.map((c) => (
          <div key={c.id} className="bg-white rounded-[12px] border border-[#E2E8F0] p-5 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-[#0F2A44] mb-2">{c.title}</h2>
              <p className="text-sm text-slate-600 mb-4">{c.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
              {c.links.map((link, i) => (
                <Link
                  key={i}
                  to={link.url}
                  className="text-xs font-semibold bg-[#F1F5F9] text-[#0F2A44] px-3 py-1.5 rounded-lg hover:bg-[#E2E8F0] transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}