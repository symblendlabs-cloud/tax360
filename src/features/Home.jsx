import Seo from '../core/ui/Seo'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { useSearchStore } from '../store/searchStore'
import { getAllNodes } from '../data/nodeLoader'
import { CALCULATORS } from './calculators/CalculatorRouter'
import SearchBar from '../core/ui/SearchBar'
import NodeCard from '../core/ui/NodeCard'

const PERSONAS = [
  { id: 'salaried', label: 'Salaried', emoji: '💼' },
  { id: 'freelancer', label: 'Freelancer', emoji: '💻' },
  { id: 'business', label: 'Business', emoji: '🏢' },
  { id: 'senior', label: 'Senior', emoji: '🧓' },
  { id: 'nri', label: 'NRI', emoji: '🌍' },
]

const HOME_FAQS = [
  {
    q: 'Is Tax360 really free?',
    a: 'Yes. Every calculator and guide on Tax360 is free to use. There is no login, no subscription, and no paywall. We may display ads in the future to cover hosting costs, but the tools themselves will remain free.',
  },
  {
    q: 'Where does the tax data come from?',
    a: 'Our calculators are built on publicly available income tax slabs, deduction limits, and TDS rates published by the Income Tax Department of India. We update the slabs each financial year. The site does not provide personalised tax advice—always cross-check with the official portal or a chartered accountant.',
  },
  {
    q: 'Do you store my financial data?',
    a: 'No. All calculations run entirely in your browser. The numbers you type are never sent to a server, never logged, and never stored. Closing the page erases everything.',
  },
  {
    q: 'Which financial year does Tax360 support?',
    a: 'The calculators currently support the latest assessment year slabs and rules. You can switch the financial year using the selector in the header where available. If a slab set is not yet loaded, the tool will show a warning instead of returning a wrong answer.',
  },
]

function matchesQuery(node, q) {
  if (!q) return false
  const t = q.toLowerCase().trim()
  if (!t) return false
  const hay = [
    node.title,
    node.shortAnswer,
    node.question,
    node.category,
    ...(node.discovery?.tags || []),
    ...(node.discovery?.aliases || []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
  return hay.includes(t)
}

export default function Home() {
  const { query } = useSearchStore()
  const allNodes = getAllNodes()

  const matches = useMemo(() => {
    if (!query.trim()) return []
    return allNodes.filter((n) => matchesQuery(n, query)).slice(0, 8)
  }, [query, allNodes])

  const calcEntries = Object.entries(CALCULATORS)
  const featuredQuestions = allNodes.filter((n) => n.type === 'question').slice(0, 4)

  const featuredTools = calcEntries.slice(-8)

  return (
    <div className="space-y-6">
      <Seo 
        title="All Tax Data in One Place" 
        description="Free, local-only tax calculators for India. 48+ tools covering Income Tax, GST, TDS, Capital Gains, and more. No login, no data tracking." 
      />
      {/* Hero */}
      <section className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl mb-2">
          All your tax answers, in one place.
        </h1>
        <p className="text-sm text-slate-600 mb-4">
          Search tools, questions, sections, and official links. Runs locally — no data leaves your browser.
        </p>
        <SearchBar placeholder="Try 'hra', 'gst', '80c', 'tds', 'crypto'…" />
      </section>

      {/* Popular calculators — now directly under the hero */}
      {!query.trim() && (
        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg">Popular Calculators</h2>
            <Link to="/tools" className="text-sm font-semibold">See all 48 →</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {featuredTools.map(([slug, entry]) => (
              <Link
                key={slug}
                to={`/tools/${slug}`}
                className="bg-white rounded-[12px] border border-[#E2E8F0] p-3 hover:border-[#16A34A] hover:shadow-sm transition"
              >
                <h3 className="font-semibold text-[#0F2A44] text-sm mb-1 truncate">
                  {entry.title}
                </h3>
                <p className="text-xs text-slate-500">Open →</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* About the site – gives AdSense crawlable body text */}
      {!query.trim() && (
        <section className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
          <h2 className="text-lg font-bold text-[#0F2A44]">What is Tax360?</h2>
          <p>
            Tax360 is a free, browser-based toolkit for Indian taxpayers. It brings together more than 48 calculators covering income tax, GST, TDS, capital gains, deductions, and salary components—alongside short explainers, official links, and due-date reminders. The goal is simple: help you find the number you need without creating an account or uploading your financial details to a server.
          </p>
          <p>
            Most tools on the site are built for quick, single-purpose use. You enter an amount, choose a financial year, and see a breakdown. Because every calculation happens locally in your browser, you can use the tools on a shared device without leaving a trail of your income or deductions.
          </p>
        </section>
      )}

      {/* How it works + trust signals */}
      {!query.trim() && (
        <section className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
          <h2 className="text-lg font-bold text-[#0F2A44]">How Tax360 works</h2>
          <p>
            Each calculator applies the published slab rates, surcharge rules, and cess for the selected financial year. Where the law offers a choice—such as the old versus new tax regime—the tool shows both results side by side so you can compare. Deduction limits under sections like 80C, 80D, and 24(b) are applied only when you enter them; the tool does not assume you qualify for a deduction.
          </p>
          <p>
            Tax rules change. Every slab set and deduction limit is reviewed when the Finance Act or CBDT notifications are updated. If a particular year's rules are not yet loaded into the system, the calculator will say so rather than return an estimate. For filing decisions, always confirm with the official incometax.gov.in portal or a qualified professional.
          </p>
        </section>
      )}

      {/* Search results */}
      {query.trim() && (
        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg">
              Results for “{query}” ({matches.length})
            </h2>
            <span className="text-xs text-slate-500">Showing up to 8</span>
          </div>
          {matches.length === 0 ? (
            <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-4 text-sm text-slate-600">
              No results. Try a different keyword.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {matches.map((n) => (
                <NodeCard key={n.id} node={n} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* Featured questions */}
      {!query.trim() && featuredQuestions.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg">Common Questions</h2>
            <Link to="/nodes" className="text-sm font-semibold">See all →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {featuredQuestions.map((n) => (
              <NodeCard key={n.id} node={n} />
            ))}
          </div>
        </section>
      )}

      {/* FAQ section – adds more indexable text */}
      {!query.trim() && (
        <section className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 space-y-4">
          <h2 className="text-lg font-bold text-[#0F2A44]">Frequently asked questions</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            {HOME_FAQS.map((item, i) => (
              <div key={i}>
                <h3 className="font-semibold text-[#0F2A44] mb-1">{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Personas */}
      {!query.trim() && (
        <section>
          <h2 className="text-lg mb-2">Browse by Persona</h2>
          <div className="flex flex-wrap gap-2">
            {PERSONAS.map((p) => (
              <Link
                key={p.id}
                to={`/personas/${p.id}`}
                className="bg-white rounded-full border border-[#E2E8F0] px-4 py-2 text-sm font-semibold text-[#0F2A44] hover:border-[#16A34A]"
              >
                <span className="mr-1">{p.emoji}</span>
                {p.label}
              </Link>
            ))}
          </div>
        </section>
      )}
      {/* Extra Resources */}
      {!query.trim() && (
        <section>
          <h2 className="text-lg mb-2">More Resources</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <Link to="/budget" className="bg-white rounded-[12px] border border-[#E2E8F0] p-3 text-sm font-semibold text-[#0F2A44] hover:border-[#16A34A] text-center transition">Budget</Link>
            <Link to="/compare" className="bg-white rounded-[12px] border border-[#E2E8F0] p-3 text-sm font-semibold text-[#0F2A44] hover:border-[#16A34A] text-center transition">Compare</Link>
            <Link to="/checklist" className="bg-white rounded-[12px] border border-[#E2E8F0] p-3 text-sm font-semibold text-[#0F2A44] hover:border-[#16A34A] text-center transition">Checklist</Link>
            <Link to="/forms" className="bg-white rounded-[12px] border border-[#E2E8F0] p-3 text-sm font-semibold text-[#0F2A44] hover:border-[#16A34A] text-center transition">ITR Forms</Link>
            <Link to="/glossary" className="bg-white rounded-[12px] border border-[#E2E8F0] p-3 text-sm font-semibold text-[#0F2A44] hover:border-[#16A34A] text-center transition">Glossary</Link>
            <Link to="/official" className="bg-white rounded-[12px] border border-[#E2E8F0] p-3 text-sm font-semibold text-[#0F2A44] hover:border-[#16A34A] text-center transition">Official</Link>
            <Link to="/myths" className="bg-white rounded-[12px] border border-[#E2E8F0] p-3 text-sm font-semibold text-[#0F2A44] hover:border-[#16A34A] text-center transition">Myths</Link>
            <Link to="/ask" className="bg-white rounded-[12px] border border-[#E2E8F0] p-3 text-sm font-semibold text-[#0F2A44] hover:border-[#16A34A] text-center transition">Ask</Link>
          </div>
        </section>
      )}
    </div>
  )
}