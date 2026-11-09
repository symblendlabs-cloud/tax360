import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function Sec54Calculator() {
  const node = getNodeBySlug('tool', 'sec54-overview')
  const [gain, setGain] = useState(2000000)
  const [newHouseCost, setNewHouseCost] = useState(1500000)
  
  // Exemption is lower of gain or new house cost
  const exemption = Math.min(gain, newHouseCost)
  const taxableGain = Math.max(0, gain - exemption)

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Exemption u/s 54" value={fmt(exemption)} variant="success" />
      <ResultCard label="Taxable Capital Gain" value={fmt(taxableGain)} variant="warning" />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Capital Gain from Old Property" value={gain} onChange={setGain} prefix="₹" />
      <TaxInput label="Cost of New House" value={newHouseCost} onChange={setNewHouseCost} prefix="₹" />
    </CalculatorShell>
  )
}