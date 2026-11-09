import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function AdvanceTaxCalculator() {
  const node = getNodeBySlug('tool', 'advance-tax-overview')
  const [tax, setTax] = useState(100000)
  
  const q1 = tax * 0.15, q2 = tax * 0.45, q3 = tax * 0.75, q4 = tax

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Q1 (By June 15)" value={fmt(q1)} />
      <ResultCard label="Q2 (By Sep 15)" value={fmt(q2)} />
      <ResultCard label="Q3 (By Dec 15)" value={fmt(q3)} />
      <ResultCard label="Q4 (By Mar 15)" value={fmt(q4)} variant="success" />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Estimated Annual Tax Liability" value={tax} onChange={setTax} prefix="₹" hint="If tax > 10,000, advance tax applies." />
    </CalculatorShell>
  )
}