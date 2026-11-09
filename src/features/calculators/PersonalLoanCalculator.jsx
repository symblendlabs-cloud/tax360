import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function CarLoanCalculator() {
  const node = getNodeBySlug('tool', 'personal-loan-overview') // Change to home-loan, personal-loan
  const [principal, setPrincipal] = useState(1000000)
  const [rate, setRate] = useState(9.5)
  const [years, setYears] = useState(5)
  
  const r = rate / 12 / 100
  const n = years * 12
  const emi = principal * r * (Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  const totalPay = emi * n
  const interest = totalPay - principal

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  return (
    <CalculatorShell node={node} results={
      <>
        <ResultCard label="Monthly EMI" value={fmt(emi)} variant="success" />
        <ResultCard label="Total Interest" value={fmt(interest)} />
      </>
    }>
      <TaxInput label="Loan Amount" value={principal} onChange={setPrincipal} prefix="₹" />
      <TaxInput label="Interest Rate (%)" value={rate} onChange={setRate} suffix="%" />
      <TaxInput label="Tenure (Years)" value={years} onChange={setYears} suffix="Years" />
    </CalculatorShell>
  )
}