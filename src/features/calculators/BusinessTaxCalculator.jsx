import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function BusinessTaxCalculator() {
  const node = getNodeBySlug('tool', 'business-tax-overview')
  const [profit, setProfit] = useState(10000000) // 1 Crore
  const [is115BAA, setIs115BAA] = useState(true) 
  
  // 115BAA = 22% + 10% surcharge + 4% cess = 25.168%
  // Normal = 30% + 12% surcharge + 4% cess = 34.944%
  const rate = is115BAA ? 0.25168 : 0.34944
  const tax = profit * rate

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Effective Rate" value={is115BAA ? '25.17%' : '34.94%'} />
      <ResultCard label="Total Tax" value={fmt(tax)} variant="warning" />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Annual Profit" value={profit} onChange={setProfit} prefix="₹" />
      <div className="mt-2">
        <label className="flex items-center gap-2 text-sm text-[#0F2A44]">
          <input type="checkbox" checked={is115BAA} onChange={(e) => setIs115BAA(e.target.checked)} />
          Opt for Section 115BAA (22% concessional rate)
        </label>
      </div>
    </CalculatorShell>
  )
}