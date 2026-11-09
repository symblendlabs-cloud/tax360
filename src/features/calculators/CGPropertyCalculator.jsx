import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function CGPropertyCalculator() {
  const node = getNodeBySlug('tool', 'cg-property-overview')
  const [buyPrice, setBuyPrice] = useState(5000000)
  const [sellPrice, setSellPrice] = useState(8000000)
  const [holdingYears, setHoldingYears] = useState(3)
  
  const gain = Math.max(0, sellPrice - buyPrice)
  const isLongTerm = holdingYears > 2
  
  // Simplified rates: 20% LTCG (with indexation ignored for simplicity), Slab for STCG
  const taxRate = isLongTerm ? 0.20 : 0.30 // Mock rate for STCG
  const estTax = gain * taxRate

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Capital Gain" value={fmt(gain)} />
      <ResultCard label={isLongTerm ? "Long Term (LTCG)" : "Short Term (STCG)"} value={isLongTerm ? '20%' : 'Slab (est. 30%)'} />
      <ResultCard label="Est. Tax" value={fmt(estTax)} variant="warning" />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Purchase Price" value={buyPrice} onChange={setBuyPrice} prefix="₹" />
      <TaxInput label="Selling Price" value={sellPrice} onChange={setSellPrice} prefix="₹" />
      <TaxInput label="Holding Period (Years)" value={holdingYears} onChange={setHoldingYears} suffix="Years" />
    </CalculatorShell>
  )
}