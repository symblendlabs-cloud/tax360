import { useParams, Link } from 'react-router-dom'
import { getAllNodes } from '../data/nodeLoader'
import { CALCULATORS } from './calculators/CalculatorRouter'
import NodeCard from '../core/ui/NodeCard'

const PERSONAS = {
  salaried: { title: 'Salaried Employees', desc: 'Tax rules, HRA, 80C, and TDS for those receiving a salary.' },
  freelancer: { title: 'Freelancers', desc: 'Presumptive taxation, GST, and TDS for independent professionals.' },
  business: { title: 'Business Owners', desc: 'Corporate tax, GST, and compliance for businesses.' },
  senior: { title: 'Senior Citizens', desc: 'Higher exemptions, TDS rules, and tax planning for seniors.' },
  nri: { title: 'NRIs', desc: 'Taxation of foreign income, DTAA, and filing requirements.' }
}

export default function PersonaHub() {
  const { id } = useParams()
  const config = PERSONAS[id]

  if (!config) {
    return (
      <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 text-center">
        <h1 className="text-xl mb-2">Persona not found</h1>
        <Link to="/" className="text-[#16A34A] font-semibold">Go back home</Link>
      </div>
    )
  }

  const nodes = getAllNodes().filter((n) => (n.persona || []).includes(id))
  
  // Also filter calculators that match this persona!
  const tools = Object.entries(CALCULATORS).filter(([slug, entry]) => {
    // Simple text match to link tools to personas
    if (id === 'freelancer' && (slug.includes('44ada') || slug.includes('gst') || slug.includes('freelancer'))) return true
    if (id === 'business' && (slug.includes('44ad') || slug.includes('gst') || slug.includes('tds') || slug.includes('business'))) return true
    if (id === 'salaried' && (slug.includes('hra') || slug.includes('salary') || slug.includes('80c') || slug.includes('tax-planner'))) return true
    if (id === 'senior' && (slug.includes('80d') || slug.includes('fd') || slug.includes('80tta'))) return true
    return false
  })

  return (
    <div className="space-y-8">
      <header className="bg-[#0F2A44] text-white rounded-[12px] p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl mb-2">{config.title}</h1>
        <p className="text-sm text-white/80 max-w-2xl">{config.desc}</p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {Object.entries(PERSONAS).map(([key, p]) => (
          <Link
            key={key}
            to={`/personas/${key}`}
            className={`text-center py-2 px-1 rounded-[10px] text-xs font-semibold border ${
              key === id
                ? 'bg-[#16A34A] text-white border-[#16A34A]'
                : 'bg-white text-[#0F2A44] border-[#E2E8F0] hover:border-[#16A34A]'
            }`}
          >
            {p.title.split(' ')[0]}
          </Link>
        ))}
      </div>

      {tools.length > 0 && (
        <section>
          <h2 className="text-lg mb-3">Recommended Tools for {config.title.split(' ')[0]}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {tools.map(([slug, entry]) => (
              <Link
                key={slug}
                to={`/tools/${slug}`}
                className="bg-white rounded-[12px] border border-[#E2E8F0] p-4 hover:border-[#16A34A] hover:shadow-sm transition"
              >
                <h3 className="font-semibold text-[#0F2A44] text-sm mb-1">{entry.title}</h3>
                <p className="text-xs text-slate-500">Open →</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-lg mb-3">Relevant Questions</h2>
        {nodes.length === 0 ? (
          <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-4 text-sm text-slate-600">
            No specific nodes found for this persona yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {nodes.map((n) => (
              <NodeCard key={n.id} node={n} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}