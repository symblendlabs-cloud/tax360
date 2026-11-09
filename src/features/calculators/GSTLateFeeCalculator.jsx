import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function GSTLateFeeCalculator() {
  const node = getNodeBySlug('tool', 'gst-late-fee-overview')
  const [taxDue, setTaxDue] = useState(50000)
  const [daysLate, setDaysLate] = useState(15)
  
  const interest = (taxDue * 0.18 * daysLate) / 365
  const lateFee = Math.min(daysLate * 50, 5000) // 50/day, max 5000
  
  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Interest (18% p.a.)" value={fmt(interest)} variant="warning" />
      <ResultCard label="Late Fee" value={fmt(lateFee)} variant="warning" />
      <ResultCard label="Total Extra Payable" value={fmt(interest + lateFee)} variant="success" />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Tax Amount Due" value={taxDue} onChange={setTaxDue} prefix="₹" />
      <TaxInput label="Days Delayed" value={daysLate} onChange={setDaysLate} suffix="Days" />
    </CalculatorShell>
  )
}