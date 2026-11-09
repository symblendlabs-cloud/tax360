import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function TDSRentCalculator() {
  const node = getNodeBySlug('tool', 'tds-rent-overview')
  const [rent, setRent] = useState(300000) // annual
  
  const threshold = 240000
  const tds = rent > threshold ? rent * 0.10 : 0
  const monthlyTds = tds / 12

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="TDS Applicable?" value={tds > 0 ? 'YES (10%)' : 'NO'} variant={tds > 0 ? 'warning' : 'success'} />
      <ResultCard label="Annual TDS to Deduct" value={fmt(tds)} />
      <ResultCard label="Monthly TDS" value={fmt(monthlyTds)} />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Annual Rent Paid" value={rent} onChange={setRent} prefix="₹" hint="Threshold is 2.4 Lakhs/yr" />
    </CalculatorShell>
  )
}