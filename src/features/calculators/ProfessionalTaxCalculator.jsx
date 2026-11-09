import { useState, useMemo } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import statePT from '../../data/libraries/statePT.json'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function ProfessionalTaxCalculator() {
  const node = getNodeBySlug('tool', 'professional-tax-overview')
  const [salary, setSalary] = useState(50000)
  const [state, setState] = useState('Maharashtra')
  
  const pt = useMemo(() => {
    const rules = statePT[state]
    if (!rules) return 0
    const slab = rules.find(r => salary >= r.min && salary <= r.max)
    return slab ? slab.tax : 0
  }, [salary, state])

  const fmt = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  const results = (
    <>
      <ResultCard label="Monthly PT" value={fmt(pt)} variant={pt > 0 ? 'warning' : 'success'} />
      <ResultCard label="Annual PT" value={fmt(pt * 12)} />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Monthly Gross Salary" value={salary} onChange={setSalary} prefix="₹" />
      
      <div>
        <span className="block text-sm font-medium text-[#0F2A44] mb-1">Select State</span>
        <select 
          value={state} 
          onChange={(e) => setState(e.target.value)} 
          className="w-full rounded-[12px] border border-[#E2E8F0] px-3 py-2 text-sm"
        >
          {Object.keys(statePT).sort().map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <p className="text-xs text-slate-500 mt-2">Note: Professional Tax varies by state. This uses the most common slab for each state.</p>
    </CalculatorShell>
  )
}