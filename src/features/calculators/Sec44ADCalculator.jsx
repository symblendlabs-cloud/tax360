import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function Sec44ADCalculator() {
  const node = getNodeBySlug('tool', '44ad-overview')
  const [turnover, setTurnover] = useState(5000000)
  const [digital, setDigital] = useState(false) // true = 6%, false = 8%
  
  const rate = digital ? 0.06 : 0.08
  const profit = turnover * rate
  const limit = 30000000 // 3 Cr

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Deemed Profit" value={fmt(profit)} variant="success" />
      <ResultCard label="Rate Applied" value={digital ? '6% (Digital)' : '8% (Cash)'} />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Annual Turnover" value={turnover} onChange={setTurnover} prefix="₹" hint={`Max limit: ${fmt(limit)}`} />
      <div className="mt-2">
        <label className="flex items-center gap-2 text-sm text-[#0F2A44]">
          <input type="checkbox" checked={digital} onChange={(e) => setDigital(e.target.checked)} />
          All receipts are digital (bank/UPI)?
        </label>
      </div>
    </CalculatorShell>
  )
}