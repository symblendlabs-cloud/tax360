import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function TDSPropertyCalculator() {
  const node = getNodeBySlug('tool', 'tds-property-overview')
  const [propertyValue, setPropertyValue] = useState(8000000)
  
  const threshold = 5000000
  const tds = propertyValue > threshold ? propertyValue * 0.01 : 0

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="TDS Applicable?" value={tds > 0 ? 'YES (1%)' : 'NO'} variant={tds > 0 ? 'warning' : 'success'} />
      <ResultCard label="TDS to Deduct" value={fmt(tds)} />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Property Purchase Value" value={propertyValue} onChange={setPropertyValue} prefix="₹" hint="Threshold is 50 Lakhs" />
    </CalculatorShell>
  )
}