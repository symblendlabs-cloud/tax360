import myths from '../data/libraries/myths.json'

export default function MythBuster() {
  return (
    <div className="space-y-4">
      <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
        <h1 className="text-2xl mb-1">Tax Myth Buster</h1>
        <p className="text-sm text-slate-600">
          Common misunderstandings cleared up.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {myths.map((m) => (
          <div key={m.id} className="bg-white rounded-[12px] border border-[#E2E8F0] p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-2 mb-3">
                <span className="text-red-500 font-bold mt-0.5">X</span>
                <p className="text-sm font-semibold text-[#0F2A44] line-through decoration-red-500/30">
                  {m.myth}
                </p>
              </div>
              <div className="flex items-start gap-2 mb-3">
                <span className="text-green-500 font-bold mt-0.5">OK</span>
                <p className="text-sm text-slate-700">
                  {m.truth}
                </p>
              </div>
            </div>
            <div className="mt-2 pt-3 border-t border-slate-100">
              <p className="text-xs text-slate-500 font-medium">
                <strong className="text-[#16A34A]">Fact:</strong> {m.fact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}