import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function CGCryptoCalculator() {
  const node = getNodeBySlug('tool', 'cg-crypto-overview')
  const [buyPrice, setBuyPrice] = useState(100000)
  const [sellPrice, setSellPrice] = useState(150000)
  
  const gain = Math.max(0, sellPrice - buyPrice)
  // Crypto is always flat 30% regardless of holding period. No exemptions.
  const tax = gain * 0.30 

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Capital Gain" value={fmt(gain)} />
      <ResultCard label="Tax (30% Flat)" value={fmt(tax)} variant="warning" />
      <ResultCard label="Note" value="No indexation or exemptions" />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Purchase Value" value={buyPrice} onChange={setBuyPrice} prefix="₹" />
      <TaxInput label="Selling Value" value={sellPrice} onChange={setSellPrice} prefix="₹" />
    </CalculatorShell>
  )
}