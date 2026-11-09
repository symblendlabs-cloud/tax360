import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function GSTRCMCalculator() {
  const node = getNodeBySlug('tool', 'gst-rcm-overview')
  const [amount, setAmount] = useState(50000)
  const [rate, setRate] = useState(18)
  
  const gst = (amount * rate) / 100

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(n)

  const results = (
    <>
      <ResultCard label="GST to Pay (RCM)" value={fmt(gst)} variant="warning" />
      <ResultCard label="Base Amount" value={fmt(amount)} />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Invoice Amount" value={amount} onChange={setAmount} prefix="₹" />
      <div>
        <span className="block text-sm font-medium text-[#0F2A44] mb-1">GST Rate</span>
        <select value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full rounded-[12px] border border-[#E2E8F0] px-3 py-2 text-sm">
          <option value={5}>5%</option>
          <option value={12}>12%</option>
          <option value={18}>18%</option>
          <option value={28}>28%</option>
        </select>
      </div>
    </CalculatorShell>
  )
}