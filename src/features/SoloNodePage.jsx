import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getNodeBySlug, getAllNodes, loadNode } from '../data/nodeLoader'
import TagPills from '../core/ui/TagPills'
import ExampleBlock from '../core/ui/ExampleBlock'
import RuleBox from '../core/ui/RuleBox'
import OfficialLinkBox from '../core/ui/OfficialLinkBox'
import NodeCard from '../core/ui/NodeCard'
import Seo from '../core/ui/Seo'

export default function SoloNodePage() {
  const { type, slug } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [version, setVersion] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    loadNode(type, slug)
      .then(() => {
        setVersion(v => v + 1) // Force re-render with fresh data
      })
      .finally(() => setIsLoading(false))
  }, [type, slug])

  const node = getNodeBySlug(type, slug)

  if (!node) {
    return (
      <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6">
        <h1 className="text-xl mb-2">Node not found</h1>
        <p className="text-slate-600 mb-4">
          No {type} found with slug <code>{slug}</code>.
        </p>
        <Link to="/questions" className="font-semibold">← Back to questions</Link>
      </div>
    )
  }

  const related = (node.discovery?.relatedIds || [])
    .map((id) => getAllNodes().find((n) => n.id === id))
    .filter(Boolean)

  return (
    <article className="space-y-4">
      <Seo
        title={node.title}
        description={node.shortAnswer}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": node.title,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": node.shortAnswer || node.fullAnswer || ""
            }
          }]
        }}
      />

      <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
        <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">
          {node.type} · {node.category}
        </p>
        <h1 className="text-2xl mb-3">{node.title}</h1>
        {node.shortAnswer && (
          <p className="text-slate-700">{node.shortAnswer}</p>
        )}
        {node.discovery && (
          <div className="mt-3">
            <TagPills
              tags={node.discovery.tags}
              aliases={node.discovery.aliases}
            />
          </div>
        )}
        {node.discovery?.calculatorSlug && (
          <div className="mt-4">
            <Link
              to={`/tools/${node.discovery.calculatorSlug}`}
              className="inline-block bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold px-4 py-2 rounded-[12px]"
            >
              Open {node.discovery.calculatorSlug.replace(/-/g, ' ')} →
            </Link>
          </div>
        )}
      </header>

      {node.fullAnswer && (
        <section className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
          <h2 className="text-lg mb-2">Full Answer</h2>
          <p className="text-slate-700 leading-relaxed whitespace-pre-line">
            {node.fullAnswer}
          </p>
        </section>
      )}

      {node.example && <ExampleBlock example={node.example} />}
      {node.rule && <RuleBox rule={node.rule} />}
      {node.official && <OfficialLinkBox official={node.official} />}

      {related.length > 0 && (
        <section>
          <h2 className="text-lg mb-2">Related</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((r) => (
              <NodeCard key={r.id} node={r} />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}