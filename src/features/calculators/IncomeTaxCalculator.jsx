import { useState, useMemo } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import { useFY } from '../../context/FYContext'
import { computeRegimeTax } from '../../utils/taxCalc'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

const fmt = (n) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n)

export default function IncomeTaxCalculator() {
  const node = getNodeBySlug('question', 'income-tax-new-vs-old')
  const { fy } = useFY()

  const [income, setIncome] = useState(1200000)
  const [deductions, setDeductions] = useState(150000)

  const { newTax, oldTax, newBreakdown, oldBreakdown, recommendation, unsupported } = useMemo(() => {
    const inc = Number(income) || 0
    const ded = Number(deductions) || 0

    const n = computeRegimeTax(inc, 0, fy, 'new')
    const o = computeRegimeTax(inc, ded, fy, 'old')

    let rec = 'Equal'
    if (n.tax < o.tax) rec = 'New regime saves you more'
    else if (o.tax < n.tax) rec = 'Old regime saves you more'

    return {
      newTax: n.tax,
      oldTax: o.tax,
      newBreakdown: n,
      oldBreakdown: o,
      recommendation: rec,
      unsupported: !n.config || !o.config,
    }
  }, [income, deductions, fy])

  if (unsupported) {
    return (
      <CalculatorShell node={node} results={<ResultCard label="FY not supported" value={`No slabs for ${fy}`} variant="warning" />}>
        <TaxInput label="Gross Annual Income" value={income} onChange={setIncome} prefix="₹" />
      </CalculatorShell>
    )
  }

  const results = (
    <div className="space-y-4">
      <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-4">
        <h3 className="text-sm font-bold text-navy mb-3">New Regime Breakdown (115BAC)</h3>
        <div className="space-y-1 text-sm text-slate-600 mb-3">
          <div className="flex justify-between"><span>Taxable Income:</span> <span>{fmt(newBreakdown.taxable)}</span></div>
          <div className="flex justify-between"><span>Base Tax:</span> <span>{fmt(newBreakdown.base)}</span></div>
          <div className="flex justify-between"><span>Surcharge:</span> <span>{fmt(newBreakdown.surcharge)}</span></div>
          <div className="flex justify-between"><span>Cess (4%):</span> <span>{fmt(newBreakdown.cess)}</span></div>
        </div>
        <ResultCard label="Total New Tax" value={fmt(newTax)} variant={newTax <= oldTax ? 'success' : 'default'} />
      </div>

      <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-4">
        <h3 className="text-sm font-bold text-navy mb-3">Old Regime Breakdown</h3>
        <div className="space-y-1 text-sm text-slate-600 mb-3">
          <div className="flex justify-between"><span>Taxable Income:</span> <span>{fmt(oldBreakdown.taxable)}</span></div>
          <div className="flex justify-between"><span>Base Tax:</span> <span>{fmt(oldBreakdown.base)}</span></div>
          <div className="flex justify-between"><span>Surcharge:</span> <span>{fmt(oldBreakdown.surcharge)}</span></div>
          <div className="flex justify-between"><span>Cess (4%):</span> <span>{fmt(oldBreakdown.cess)}</span></div>
        </div>
        <ResultCard label="Total Old Tax" value={fmt(oldTax)} variant={oldTax < newTax ? 'success' : 'default'} />
      </div>

      <ResultCard label="Recommendation" value={recommendation} variant="warning" />
    </div>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput label="Gross Annual Income" value={income} onChange={setIncome} prefix="₹" />
      <TaxInput label="Old-regime Extra Deductions" value={deductions} onChange={setDeductions} prefix="₹" hint="80C, 80D, etc." />
      <p className="text-xs text-slate-500">
        Slabs loaded from JSON for FY {fy}. Standard deduction and surcharge auto-applied.
      </p>
    </CalculatorShell>
  )
}