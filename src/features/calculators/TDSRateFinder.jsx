import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import { useFY } from '../../context/FYContext'
import tdsRatesLib from '../../data/libraries/tdsRates.json'
import CalculatorShell from '../../core/ui/CalculatorShell'
import ResultCard from '../../core/ui/ResultCard'

export default function TDSRateFinder() {
  const node = getNodeBySlug('tool', 'tds-rate-overview')
  const { fy } = useFY()
  const [selected, setSelected] = useState('')

  const rates = tdsRatesLib[fy] || []
  const active = rates.find(r => r.section === selected)

  const results = active ? (
    <>
      <ResultCard label="Section" value={active.section} />
      <ResultCard label="Rate" value={active.rate} variant="success" />
      <ResultCard label="Threshold Limit" value={active.threshold ? `₹${active.threshold}` : 'N/A'} />
    </>
  ) : (
    <ResultCard label="Select a section" value="—" />
  )

  return (
    <CalculatorShell node={node} results={results}>
      <div>
        <span className="block text-sm font-medium text-[#0F2A44] mb-1">Nature of Payment</span>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full rounded-[12px] border border-[#E2E8F0] bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40"
        >
          <option value="">-- Choose Section --</option>
          {rates.map((r) => (
            <option key={r.section} value={r.section}>{r.section} - {r.label}</option>
          ))}
        </select>
      </div>
    </CalculatorShell>
  )
}