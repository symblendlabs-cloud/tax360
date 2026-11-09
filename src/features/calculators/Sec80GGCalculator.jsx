import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function Sec80GGCalculator() {
  const node = getNodeBySlug('tool', '80gg-overview')
  const [salary, setSalary] = useState(1000000) // annual basic
  const [rent, setRent] = useState(240000)
  
  const cond1 = 60000
  const cond2 = salary * 0.25
  const cond3 = rent - (salary * 0.10)
  const claimed = Math.max(0, Math.min(cond1, cond2, cond3))

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  return (
    <CalculatorShell node={node} results={<ResultCard label="80GG Exemption" value={fmt(claimed)} variant="success" />}>
      <TaxInput label="Annual Basic Salary" value={salary} onChange={setSalary} prefix="₹" />
      <TaxInput label="Annual Rent Paid" value={rent} onChange={setRent} prefix="₹" />
    </CalculatorShell>
  )
}