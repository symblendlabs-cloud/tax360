import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function Sec80DCalculator() {
  const node = getNodeBySlug('tool', '80d-overview')
  const [selfPremium, setSelfPremium] = useState(25000)
  const [parentsPremium, setParentsPremium] = useState(50000)
  const [parentsSenior, setParentsSenior] = useState(true)
  
  const limitSelf = 25000
  const limitParents = parentsSenior ? 50000 : 25000
  
  const claimedSelf = Math.min(selfPremium, limitSelf)
  const claimedParents = Math.min(parentsPremium, limitParents)
  const total = claimedSelf + claimedParents

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Self/Family Deduction" value={fmt(claimedSelf)} />
      <ResultCard label="Parents Deduction" value={fmt(claimedParents)} />
      <ResultCard label="Total 80D Claimable" value={fmt(total)} variant="success" />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Premium for Self & Family" value={selfPremium} onChange={setSelfPremium} prefix="₹" hint="Max 25,000" />
      <TaxInput label="Premium for Parents" value={parentsPremium} onChange={setParentsPremium} prefix="₹" hint={`Max ${limitParents.toLocaleString()}`} />
      <div className="mt-2">
        <label className="flex items-center gap-2 text-sm text-[#0F2A44]">
          <input type="checkbox" checked={parentsSenior} onChange={(e) => setParentsSenior(e.target.checked)} />
          Are parents Senior Citizens? (Allows 50k limit)
        </label>
      </div>
    </CalculatorShell>
  )
}