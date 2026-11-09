import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function GSTITCCalculator() {
  const node = getNodeBySlug('tool', 'gst-itc-overview')
  const [outputTax, setOutputTax] = useState(100000)
  const [inputTax, setInputTax] = useState(60000)
  
  const netPayable = Math.max(0, outputTax - inputTax)
  const carryForward = Math.max(0, inputTax - outputTax)

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Net GST Payable" value={fmt(netPayable)} variant="warning" />
      <ResultCard label="ITC Carry Forward" value={fmt(carryForward)} variant="success" />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Output Tax (on Sales)" value={outputTax} onChange={setOutputTax} prefix="₹" />
      <TaxInput label="Input Tax Credit (on Purchases)" value={inputTax} onChange={setInputTax} prefix="₹" />
    </CalculatorShell>
  )
}