import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function Sec80TTACalculator() {
  const node = getNodeBySlug('tool', '80tta-overview')
  const [interest, setInterest] = useState(15000)
  
  const claimed = Math.min(interest, 10000)
  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  return (
    <CalculatorShell node={node} results={<ResultCard label="80TTA Deduction" value={fmt(claimed)} variant="success" />}>
      <TaxInput label="Savings Account Interest" value={interest} onChange={setInterest} prefix="₹" hint="Max 10,000" />
    </CalculatorShell>
  )
}