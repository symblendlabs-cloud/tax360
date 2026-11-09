export default function RuleBox({ rule }) {
  if (!rule) return null
  const { section, limit, rate, fy, lastUpdated } = rule

  const rows = [
    ['Section', section],
    ['Limit', limit],
    ['Rate', rate],
    ['Financial Year', fy],
    ['Last Updated', lastUpdated],
  ].filter(([, v]) => v)

  if (rows.length === 0) return null

  return (
    <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-4">
      <h3 className="text-sm font-semibold text-navy mb-2">Rule Snapshot</h3>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between border-b border-slate-100 py-1">
            <dt className="text-slate-500">{k}</dt>
            <dd className="text-slate-800 font-medium text-right">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}