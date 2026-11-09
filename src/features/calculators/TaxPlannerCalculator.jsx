import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function TaxPlannerCalculator() {
  const node = getNodeBySlug('tool', 'tax-planner-overview')
  const [taxBracket, setTaxBracket] = useState(30)
  const [invested, setInvested] = useState(50000)
  
  const limit = 150000
  const remaining = Math.max(0, limit - invested)
  const taxSaved = remaining * (taxBracket / 100)

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Room Left under 80C" value={fmt(remaining)} variant="warning" />
      <ResultCard label="Potential Tax Saved" value={fmt(taxSaved)} variant="success" />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Amount Already Invested under 80C" value={invested} onChange={setInvested} prefix="₹" />
      <div>
        <span className="block text-sm font-medium text-[#0F2A44] mb-1">Your Tax Bracket</span>
        <select value={taxBracket} onChange={(e) => setTaxBracket(Number(e.target.value))} className="w-full rounded-[12px] border border-[#E2E8F0] px-3 py-2 text-sm">
          <option value={5}>5%</option>
          <option value={20}>20%</option>
          <option value={30}>30%</option>
        </select>
      </div>
    </CalculatorShell>
  )
}