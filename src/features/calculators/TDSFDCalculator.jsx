import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function TDSFDCalculator() {
  const node = getNodeBySlug('tool', 'tds-fd-overview')
  const [interest, setInterest] = useState(60000)
  const [senior, setSenior] = useState(false)
  
  const threshold = senior ? 100000 : 50000 // FY 2026-27 limits
  const tds = interest > threshold ? interest * 0.10 : 0

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="TDS Applicable?" value={tds > 0 ? 'YES (10%)' : 'NO'} variant={tds > 0 ? 'warning' : 'success'} />
      <ResultCard label="TDS Amount" value={fmt(tds)} />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Annual FD Interest" value={interest} onChange={setInterest} prefix="₹" hint={`Threshold: ${fmt(threshold)}`} />
      <div className="mt-2">
        <label className="flex items-center gap-2 text-sm text-[#0F2A44]">
          <input type="checkbox" checked={senior} onChange={(e) => setSenior(e.target.checked)} />
          Are you a Senior Citizen?
        </label>
      </div>
    </CalculatorShell>
  )
}