import { useSearchParams } from 'react-router-dom'
import { getAllNodes } from '../data/nodeLoader'
import NodeCard from '../core/ui/NodeCard'
import { useSearchStore } from '../store/searchStore'

const PERSONAS = ['salaried', 'freelancer', 'business', 'senior', 'nri']

export default function QuestionHub() {
  const [params, setParams] = useSearchParams()
  const persona = params.get('persona') || ''
  const { query } = useSearchStore()

  const all = getAllNodes().filter((n) => n.type === 'question')
  const filtered = all.filter((n) => {
    if (persona && !(n.persona || []).includes(persona)) return false
    if (query.trim()) {
      const t = query.toLowerCase()
      const hay = [
        n.title,
        n.shortAnswer,
        ...(n.discovery?.tags || []),
        ...(n.discovery?.aliases || []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
      if (!hay.includes(t)) return false
    }
    return true
  })

  const onPersona = (p) => {
    const next = new URLSearchParams(params)
    if (p) next.set('persona', p)
    else next.delete('persona')
    setParams(next, { replace: true })
  }

  return (
    <div className="space-y-4">
      <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
        <h1 className="text-2xl mb-1">Question Hub</h1>
        <p className="text-sm text-slate-600">
          {filtered.length} of {all.length} questions shown
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onPersona('')}
          className={`px-3 py-1.5 rounded-full border text-sm font-semibold ${
            !persona
              ? 'bg-[#0F2A44] text-white border-[#0F2A44]'
              : 'bg-white text-[#0F2A44] border-[#E2E8F0] hover:border-[#0F2A44]'
          }`}
        >
          All
        </button>
        {PERSONAS.map((p) => (
          <button
            key={p}
            onClick={() => onPersona(p)}
            className={`px-3 py-1.5 rounded-full border text-sm font-semibold capitalize ${
              persona === p
                ? 'bg-[#0F2A44] text-white border-[#0F2A44]'
                : 'bg-white text-[#0F2A44] border-[#E2E8F0] hover:border-[#0F2A44]'
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-4 text-sm text-slate-600">
          No questions match this filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filtered.map((n) => (
            <NodeCard key={n.id} node={n} />
          ))}
        </div>
      )}
    </div>
  )
}