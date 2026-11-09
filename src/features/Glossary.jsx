import { useState } from 'react'
import glossary from '../data/libraries/glossary.json'

export default function Glossary() {
  const [search, setSearch] = useState('')

  const filtered = glossary.filter((item) => 
    item.term.toLowerCase().includes(search.toLowerCase()) || 
    item.definition.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-5 sm:p-6">
        <h1 className="text-2xl mb-2">Tax Glossary</h1>
        <p className="text-sm text-slate-600 mb-4">
          Plain English definitions for {glossary.length} complex tax terms.
        </p>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search terms (e.g. TDS, Rebate, ITR)..."
          className="w-full max-w-md rounded-[12px] border border-[#E2E8F0] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40"
        />
      </header>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-4 text-sm text-slate-600">
          No terms found matching "{search}".
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filtered.map((item) => (
            <div key={item.term} className="bg-white rounded-[12px] border border-[#E2E8F0] p-4">
              <h3 className="font-bold text-[#0F2A44] mb-1">{item.term}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.definition}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}