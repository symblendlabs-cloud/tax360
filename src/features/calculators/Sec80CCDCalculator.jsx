import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function Sec80CCDCalculator() {
  const node = getNodeBySlug('tool', '80ccd-overview')
  const [nps, setNps] = useState(50000)
  
  const claimed = Math.min(nps, 50000) // 80CCD(1B) limit
  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  return (
    <CalculatorShell node={node} results={<ResultCard label="80CCD(1B) Claimable" value={fmt(claimed)} variant="success" />}>
      <TaxInput label="Additional NPS Contribution" value={nps} onChange={setNps} prefix="₹" hint="Max 50,000" />
    </CalculatorShell>
  )
}