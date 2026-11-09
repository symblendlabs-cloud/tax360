import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function GratuityCalculator() {
  const node = getNodeBySlug('tool', 'gratuity-overview')
  const [salary, setSalary] = useState(50000)
  const [years, setYears] = useState(10)
  
  const gratuity = (salary * 15 * years) / 26
  const exempt = Math.min(gratuity, 2000000) // 20L limit

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Total Gratuity" value={fmt(gratuity)} />
      <ResultCard label="Tax Exempt Amount" value={fmt(exempt)} variant="success" hint="Max 20 Lakhs" />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Basic + DA (Monthly)" value={salary} onChange={setSalary} prefix="₹" />
      <TaxInput label="Years of Service" value={years} onChange={setYears} suffix="Years" />
    </CalculatorShell>
  )
}