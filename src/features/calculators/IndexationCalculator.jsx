import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function IndexationCalculator() {
  const node = getNodeBySlug('tool', 'indexation-overview')
  const [buyPrice, setBuyPrice] = useState(3000000)
  const [cpiBuy, setCpiBuy] = useState(280)
  const [cpiSell, setCpiSell] = useState(360)
  const [sellPrice, setSellPrice] = useState(5000000)
  
  const indexedCost = buyPrice * (cpiSell / cpiBuy)
  const gain = Math.max(0, sellPrice - indexedCost)
  const tax = gain * 0.20

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Indexed Cost" value={fmt(indexedCost)} />
      <ResultCard label="Capital Gain" value={fmt(gain)} />
      <ResultCard label="Tax (20%)" value={fmt(tax)} variant="warning" />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Original Purchase Price" value={buyPrice} onChange={setBuyPrice} prefix="₹" />
      <TaxInput label="Selling Price" value={sellPrice} onChange={setSellPrice} prefix="₹" />
      <div className="grid grid-cols-2 gap-2">
        <TaxInput label="CII (Buy Year)" value={cpiBuy} onChange={setCpiBuy} />
        <TaxInput label="CII (Sell Year)" value={cpiSell} onChange={setCpiSell} />
      </div>
    </CalculatorShell>
  )
}