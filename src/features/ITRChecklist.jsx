import { useMemo, useState } from 'react'
import checklist from '../data/libraries/itrChecklist.json'

export default function ITRChecklist() {
  const [checked, setChecked] = useState({})

  const grouped = useMemo(() => {
    const map = {}
    checklist.forEach((item) => {
      if (!map[item.category]) map[item.category] = []
      map[item.category].push(item)
    })
    return map
  }, [])

  const toggle = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const total = checklist.length
  const done = Object.values(checked).filter(Boolean).length

  return (
    <div className="space-y-4">
      <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-1">ITR Document Checklist</h1>
          <p className="text-sm text-slate-600">Tick items as you gather them.</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-[#16A34A]">{done} / {total}</p>
          <p className="text-xs text-slate-500 uppercase">Collected</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(grouped).map(([cat, items]) => (
          <section key={cat} className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
            <h2 className="text-base font-semibold text-navy mb-3">{cat}</h2>
            <div className="space-y-2">
              {items.map((item) => (
                <label key={item.id} className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={!!checked[item.id]}
                    onChange={() => toggle(item.id)}
                    className="mt-1 w-4 h-4 rounded border-[#E2E8F0] text-[#16A34A] focus:ring-[#16A34A]"
                  />
                  <span className={`text-sm ${checked[item.id] ? 'text-slate-400 line-through' : 'text-[#0F2A44]'}`}>
                    {item.item}
                  </span>
                </label>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}