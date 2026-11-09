import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function Sec44ADACalculator() {
  const node = getNodeBySlug('tool', '44ada-overview')
  const [revenue, setRevenue] = useState(4000000)
  
  const profit = revenue * 0.5
  const limit = 7500000 // 75 Lakhs

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Deemed Profit (50%)" value={fmt(profit)} variant="success" />
      <ResultCard label="Taxable Income" value={fmt(profit)} />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Gross Annual Revenue" value={revenue} onChange={setRevenue} prefix="₹" hint={`Max limit: ${fmt(limit)}`} />
    </CalculatorShell>
  )
}