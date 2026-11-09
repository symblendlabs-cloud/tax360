import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function GSTFreelancerCalculator() {
  const node = getNodeBySlug('tool', 'gst-freelancer-overview')
  const [revenue, setRevenue] = useState(2000000) // 20 Lakhs
  
  const limit = 2000000
  const needsGst = revenue > limit

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Registration Required?" value={needsGst ? 'YES' : 'NO'} variant={needsGst ? 'warning' : 'success'} />
      <ResultCard label="Threshold Limit" value={fmt(limit)} />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Annual Revenue" value={revenue} onChange={setRevenue} prefix="₹" hint="Domestic freelancers limit is 20L" />
    </CalculatorShell>
  )
}