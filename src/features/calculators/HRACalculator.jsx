import { useState, useMemo } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import { useFY } from '../../context/FYContext'
import deductionsLib from '../../data/libraries/deductions.json'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

const fmt = (n) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n)

export default function HRACalculator() {
  const node = getNodeBySlug('question', 'hra-exemption-calculation')

  // For SEO: use a clean tool title instead of the long question
  const seoNode = node ? { ...node, title: 'HRA Calculator' } : null || {
    title: 'HRA Calculator',
    shortAnswer: 'Calculate your HRA exemption.',
    slug: 'hra-calculator',
    type: 'tool',
    discovery: {}
  }
  const { fy } = useFY()

  const hraConfig = useMemo(() => {
    const fyData = deductionsLib[fy]
    return fyData?.hra || { metroPercent: 50, nonMetroPercent: 40, basicDeductionPercent: 10 }
  }, [fy])

  const [basic, setBasic] = useState(600000)
  const [hra, setHra] = useState(240000)
  const [rent, setRent] = useState(300000)
  const [metro, setMetro] = useState(true)

  const { actualHra, rentMinus10, pctOfBasic, exemption } = useMemo(() => {
    const b = Number(basic) || 0
    const h = Number(hra) || 0
    const r = Number(rent) || 0
    
    const pct = metro ? hraConfig.metroPercent / 100 : hraConfig.nonMetroPercent / 100
    const dedPct = hraConfig.basicDeductionPercent / 100

    const a = h
    const rm = Math.max(0, r - (dedPct * b))
    const pb = pct * b
    
    return {
      actualHra: a,
      rentMinus10: rm,
      pctOfBasic: pb,
      exemption: Math.max(0, Math.min(a, rm, pb)),
    }
  }, [basic, hra, rent, metro, hraConfig])

  const results = (
    <>
      <ResultCard
        label="HRA Exemption"
        value={fmt(exemption)}
        variant="success"
        hint="Least of the three conditions"
      />
      <ResultCard label="Actual HRA received" value={fmt(actualHra)} />
      <ResultCard label={`Rent − ${hraConfig.basicDeductionPercent}% of basic`} value={fmt(rentMinus10)} />
      <ResultCard
        label={`${metro ? hraConfig.metroPercent : hraConfig.nonMetroPercent}% of basic`}
        value={fmt(pctOfBasic)}
      />
    </>
  )

  return (
    <CalculatorShell node={seoNode} results={results}>
      <TaxInput label="Basic Salary + DA (annual)" value={basic} onChange={setBasic} prefix="₹" />
      <TaxInput label="HRA Received (annual)" value={hra} onChange={setHra} prefix="₹" />
      <TaxInput label="Rent Paid (annual)" value={rent} onChange={setRent} prefix="₹" />
      
      <div>
        <span className="block text-sm font-medium text-[#0F2A44] mb-1">
          City Type
        </span>
        <div className="flex gap-2">
          {[
            { id: true, label: `Metro (${hraConfig.metroPercent}%)` },
            { id: false, label: `Non-metro (${hraConfig.nonMetroPercent}%)` },
          ].map((m) => (
            <button
              key={String(m.id)}
              onClick={() => setMetro(m.id)}
              className={`flex-1 py-2 rounded-[12px] border text-sm font-semibold ${
                metro === m.id
                  ? 'bg-[#0F2A44] text-white border-[#0F2A44]'
                  : 'bg-white text-[#0F2A44] border-[#E2E8F0] hover:border-[#0F2A44]'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>
    </CalculatorShell>
  )
}