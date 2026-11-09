import { Link } from 'react-router-dom'

export default function NodeCard({ node }) {
  if (!node) return null

  return (
    <Link
      to={`/tax360/${node.type}/${node.slug}`}
      className="block bg-white rounded-[12px] border border-[#E2E8F0] p-4 hover:border-[#16A34A] hover:shadow-sm transition"
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="font-semibold text-[15px] text-navy leading-snug">
          {node.title}
        </h3>
        <span className="text-[10px] uppercase tracking-wide bg-[#F1F5F9] text-slate-600 px-2 py-0.5 rounded-full whitespace-nowrap">
          {node.type}
        </span>
      </div>
      {node.shortAnswer && (
        <p className="text-sm text-slate-600 line-clamp-2">{node.shortAnswer}</p>
      )}
      {node.rule?.section && (
        <p className="text-xs text-slate-500 mt-2">Section {node.rule.section}</p>
      )}
    </Link>
  )
}