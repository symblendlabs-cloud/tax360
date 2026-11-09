import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function Sec24bCalculator() {
  const node = getNodeBySlug('tool', '24b-overview')
  const [interest, setInterest] = useState(250000)
  
  const claimed = Math.min(interest, 200000)
  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  return (
    <CalculatorShell node={node} results={<ResultCard label="24(b) Deduction" value={fmt(claimed)} variant="success" />}>
      <TaxInput label="Home Loan Interest Paid" value={interest} onChange={setInterest} prefix="₹" hint="Max 2,00,000 for self-occupied" />
    </CalculatorShell>
  )
}