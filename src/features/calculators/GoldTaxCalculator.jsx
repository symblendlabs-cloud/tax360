import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function GoldTaxCalculator() {
  const node = getNodeBySlug('tool', 'gold-tax-overview')
  const [buyPrice, setBuyPrice] = useState(500000)
  const [sellPrice, setSellPrice] = useState(800000)
  const [holdingMonths, setHoldingMonths] = useState(36)
  
  const gain = Math.max(0, sellPrice - buyPrice)
  const isLongTerm = holdingMonths > 24
  
  // Gold LTCG is 12.5% (no indexation after Budget 2024)
  const tax = isLongTerm ? gain * 0.125 : gain * 0.30 // STCG at slab (mock 30%)

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Capital Gain" value={fmt(gain)} />
      <ResultCard label={isLongTerm ? "LTCG (12.5%)" : "STCG (Slab)"} value={fmt(tax)} variant="warning" />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Purchase Price" value={buyPrice} onChange={setBuyPrice} prefix="₹" />
      <TaxInput label="Selling Price" value={sellPrice} onChange={setSellPrice} prefix="₹" />
      <TaxInput label="Holding Period (Months)" value={holdingMonths} onChange={setHoldingMonths} suffix="Months" hint="> 24 months = Long Term" />
    </CalculatorShell>
  )
}