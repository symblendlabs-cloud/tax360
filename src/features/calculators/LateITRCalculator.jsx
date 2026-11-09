import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function LateITRCalculator() {
  const node = getNodeBySlug('tool', 'late-itr-overview')
  const [income, setIncome] = useState(800000)
  const [delayMonths, setDelayMonths] = useState(2)
  
  const fee = income > 500000 ? 5000 : 1000
  const interest = (income * 0.01) * delayMonths // rough 1% per month

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Late Filing Fee (234F)" value={fmt(fee)} variant="warning" />
      <ResultCard label="Interest (234A)" value={fmt(interest)} variant="warning" />
      <ResultCard label="Total Penalty" value={fmt(fee + interest)} variant="success" />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Annual Income" value={income} onChange={setIncome} prefix="₹" />
      <TaxInput label="Months Delayed" value={delayMonths} onChange={setDelayMonths} suffix="Months" />
    </CalculatorShell>
  )
}