import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function FreelancerTaxCalculator() {
  const node = getNodeBySlug('tool', 'freelancer-tax-overview')
  const [revenue, setRevenue] = useState(1500000)
  const [expenses, setExpenses] = useState(200000)
  
  const netIncome = Math.max(0, revenue - expenses)
  const tax = netIncome > 500000 ? (netIncome - 500000) * 0.1 : 0 // simplified mock tax

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Net Income" value={fmt(netIncome)} />
      <ResultCard label="Est. Tax" value={fmt(tax)} variant="warning" />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Annual Revenue" value={revenue} onChange={setRevenue} prefix="₹" />
      <TaxInput label="Annual Business Expenses" value={expenses} onChange={setExpenses} prefix="₹" />
    </CalculatorShell>
  )
}