import penalties from '../data/libraries/penalties.json'

export default function PenaltyExplainer() {
  return (
    <div className="space-y-4">
      <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
        <h1 className="text-2xl mb-1">Penalty & Interest Explainer</h1>
        <p className="text-sm text-slate-600">
          What happens if you file late or miss payments.
        </p>
      </header>

      <div className="space-y-3">
        {penalties.map((p) => (
          <div key={p.id} className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h2 className="text-lg font-bold text-[#0F2A44]">
                Section {p.code}: {p.title}
              </h2>
              <span className="bg-[#FEF2F2] text-[#B91C1C] text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap border border-[#FECACA]">
                {p.rate}
              </span>
            </div>
            <p className="text-sm text-slate-700 mb-3">{p.description}</p>
            <div className="bg-[#F8FAFC] rounded border border-[#E2E8F0] p-3 text-sm">
              <span className="font-semibold text-[#0F2A44]">Example: </span>
              {p.example}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}