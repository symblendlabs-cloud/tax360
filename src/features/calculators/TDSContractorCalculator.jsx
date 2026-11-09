import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function TDSContractorCalculator() {
  const node = getNodeBySlug('tool', 'tds-contractor-overview')
  const [amount, setAmount] = useState(100000)
  const [individual, setIndividual] = useState(true)
  
  const rate = individual ? 0.01 : 0.02
  const tds = amount > 30000 ? amount * rate : 0

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label={`TDS @ ${rate * 100}%`} value={fmt(tds)} variant="warning" />
      <ResultCard label="Net Amount Payable" value={fmt(amount - tds)} variant="success" />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Contract Amount" value={amount} onChange={setAmount} prefix="₹" hint="Threshold is 30,000 per contract" />
      <div className="mt-2">
        <label className="flex items-center gap-2 text-sm text-[#0F2A44]">
          <input type="checkbox" checked={individual} onChange={(e) => setIndividual(e.target.checked)} />
          Payee is Individual/HUF (1% rate instead of 2%)
        </label>
      </div>
    </CalculatorShell>
  )
}