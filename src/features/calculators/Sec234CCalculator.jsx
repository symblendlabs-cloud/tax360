import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function Sec234CCalculator() {
  const node = getNodeBySlug('tool', '234c-overview')
  const [tax, setTax] = useState(100000)
  const [shortfall, setShortfall] = useState(15000) // e.g. missed the 15% Q1 deadline
  const [months, setMonths] = useState(3)
  
  const interest = (shortfall * 0.01) * months
  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  return (
    <CalculatorShell node={node} results={<ResultCard label="234C Interest Payable" value={fmt(interest)} variant="warning" />}>
      <TaxInput label="Total Tax Liability" value={tax} onChange={setTax} prefix="₹" />
      <TaxInput label="Shortfall Amount" value={shortfall} onChange={setShortfall} prefix="₹" />
      <TaxInput label="Months Delayed" value={months} onChange={setMonths} suffix="Months" />
    </CalculatorShell>
  )
}