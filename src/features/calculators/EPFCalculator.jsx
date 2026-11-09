import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function SIPCalculator() {
  const node = getNodeBySlug('tool', 'epf-overview')
  const [monthly, setMonthly] = useState(10000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(10)
  
  const r = rate / 12 / 100
  const n = years * 12
  const futureValue = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
  const invested = monthly * n

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  return (
    <CalculatorShell node={node} results={
      <>
        <ResultCard label="Maturity Amount" value={fmt(futureValue)} variant="success" />
        <ResultCard label="Total Invested" value={fmt(invested)} />
      </>
    }>
      <TaxInput label="Monthly Investment" value={monthly} onChange={setMonthly} prefix="₹" />
      <TaxInput label="Expected Return (%)" value={rate} onChange={setRate} suffix="%" />
      <TaxInput label="Tenure (Years)" value={years} onChange={setYears} suffix="Years" />
    </CalculatorShell>
  )
}