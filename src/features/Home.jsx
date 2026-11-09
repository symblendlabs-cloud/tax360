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

      {/* Featured calculators */}
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