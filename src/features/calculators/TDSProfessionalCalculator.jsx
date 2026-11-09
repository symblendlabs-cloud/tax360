import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function TDSProfessionalCalculator() {
  const node = getNodeBySlug('tool', 'tds-professional-overview')
  const [fees, setFees] = useState(100000)
  
  const threshold = 30000
  const tds = fees > threshold ? fees * 0.10 : 0

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="TDS @ 10%" value={fmt(tds)} variant="warning" />
      <ResultCard label="Net Amount Payable" value={fmt(fees - tds)} variant="success" />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Professional Fees Amount" value={fees} onChange={setFees} prefix="₹" hint="Threshold is 30,000/yr" />
    </CalculatorShell>
  )
}