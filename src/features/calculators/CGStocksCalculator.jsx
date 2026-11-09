import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function CGStocksCalculator() {
  const node = getNodeBySlug('tool', 'cg-stocks-overview')
  const [buyPrice, setBuyPrice] = useState(100000)
  const [sellPrice, setSellPrice] = useState(250000)
  const [holdingMonths, setHoldingMonths] = useState(18)
  
  const gain = Math.max(0, sellPrice - buyPrice)
  const isLongTerm = holdingMonths > 12
  
  // FY 2026-27 rules from Budget: STCG 20%, LTCG 12.5% (exemption 1.25L)
  let tax = 0
  if (isLongTerm) {
    tax = Math.max(0, gain - 125000) * 0.125
  } else {
    tax = gain * 0.20
  }

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Capital Gain" value={fmt(gain)} />
      <ResultCard label={isLongTerm ? "LTCG Rate" : "STCG Rate"} value={isLongTerm ? '12.5%' : '20%'} />
      <ResultCard label="Est. Tax" value={fmt(tax)} variant="warning" />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Total Buy Value" value={buyPrice} onChange={setBuyPrice} prefix="₹" />
      <TaxInput label="Total Sell Value" value={sellPrice} onChange={setSellPrice} prefix="₹" />
      <TaxInput label="Holding Period (Months)" value={holdingMonths} onChange={setHoldingMonths} suffix="Months" hint="> 12 months = Long Term" />
    </CalculatorShell>
  )
}