import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function Sec234BCalculator() {
  const node = getNodeBySlug('tool', '234b-overview')
  const [tax, setTax] = useState(100000)
  const [months, setMonths] = useState(3)
  
  const interest = (tax * 0.01) * months
  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  return (
    <CalculatorShell node={node} results={<ResultCard label="234B Interest Payable" value={fmt(interest)} variant="warning" />}>
      <TaxInput label="Unpaid Advance Tax" value={tax} onChange={setTax} prefix="₹" />
      <TaxInput label="Months Delayed (from April 1)" value={months} onChange={setMonths} suffix="Months" />
    </CalculatorShell>
  )
}