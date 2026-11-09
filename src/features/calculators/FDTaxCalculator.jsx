import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function FDTaxCalculator() {
  const node = getNodeBySlug('tool', 'fd-tax-overview')
  const [interest, setInterest] = useState(50000)
  const [slab, setSlab] = useState(20)
  
  const tds = interest > 40000 ? interest * 0.10 : 0
  const actualTax = interest * (slab / 100)
  const inHand = interest - actualTax

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="TDS Deducted (10%)" value={fmt(tds)} variant="warning" />
      <ResultCard label="Actual Tax (Slab)" value={fmt(actualTax)} />
      <ResultCard label="Net Interest in Hand" value={fmt(inHand)} variant="success" />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Annual Interest Earned" value={interest} onChange={setInterest} prefix="₹" />
      <div>
        <span className="block text-sm font-medium text-[#0F2A44] mb-1">Your Tax Slab</span>
        <select value={slab} onChange={(e) => setSlab(Number(e.target.value))} className="w-full rounded-[12px] border border-[#E2E8F0] px-3 py-2 text-sm">
          <option value={5}>5%</option>
          <option value={20}>20%</option>
          <option value={30}>30%</option>
        </select>
      </div>
    </CalculatorShell>
  )
}