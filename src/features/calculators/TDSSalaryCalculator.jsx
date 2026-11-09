import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function TDSSalaryCalculator() {
  const node = getNodeBySlug('tool', 'tds-salary-overview')
  const [income, setIncome] = useState(1200000)
  
  // Simplified mock calculation (real one uses average rate of tax)
  const annualTax = income > 500000 ? (income - 500000) * 0.1 : 0 
  const monthlyTds = annualTax / 12

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Monthly TDS" value={fmt(monthlyTds)} variant="warning" />
      <ResultCard label="Annual Tax" value={fmt(annualTax)} />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Annual Gross Salary" value={income} onChange={setIncome} prefix="₹" />
      <p className="text-xs text-slate-500 mt-2">Simplified estimate. Actual TDS depends on your declared investments.</p>
    </CalculatorShell>
  )
}