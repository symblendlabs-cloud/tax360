import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function YouTubeTaxCalculator() {
  const node = getNodeBySlug('tool', 'youtube-tax-overview')
  
  const [adsense, setAdsense] = useState(600000)
  const [sponsorships, setSponsorships] = useState(400000)
  const [expenses, setExpenses] = useState(100000)
  const [presumptive, setPresumptive] = useState(true) // 44AD
  
  const totalRevenue = adsense + sponsorships
  const netIncome = presumptive 
    ? totalRevenue * 0.06 // 6% deemed profit under 44AD for digital
    : Math.max(0, totalRevenue - expenses)
    
  // Assuming 30% slab for simplified estimation
  const estimatedTax = netIncome * 0.30
  const tdsCredit = sponsorships * 0.10 // 10% TDS usually deducted by brands

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Total Revenue" value={fmt(totalRevenue)} />
      <ResultCard label="Taxable Income" value={fmt(netIncome)} />
      <ResultCard label="Est. Tax (30% slab)" value={fmt(estimatedTax)} variant="warning" />
      {tdsCredit > 0 && (
        <ResultCard label="TDS Already Paid (10%)" value={fmt(tdsCredit)} variant="success" hint="Claim this while filing ITR" />
      )}
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="AdSense Revenue" value={adsense} onChange={setAdsense} prefix="₹" />
      <TaxInput label="Sponsorships & Affiliates" value={sponsorships} onChange={setSponsorships} prefix="₹" />
      
      <div className="mt-2 mb-4">
        <label className="flex items-center gap-2 text-sm text-[#0F2A44]">
          <input type="checkbox" checked={presumptive} onChange={(e) => setPresumptive(e.target.checked)} />
          Use Presumptive Taxation (Section 44AD - 6% profit)
        </label>
      </div>

      {!presumptive && (
        <TaxInput label="Total Business Expenses" value={expenses} onChange={setExpenses} prefix="₹" />
      )}
    </CalculatorShell>
  )
}