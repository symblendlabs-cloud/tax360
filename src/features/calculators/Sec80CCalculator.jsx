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

export default function Sec80CCalculator() {
  const node = getNodeBySlug('question', 'section-80c-limit')

  // Clean SEO title
  const seoNode = node ? { ...node, title: 'Section 80C Calculator' } : null
  const { fy } = useFY()

  // Read the limit dynamically from JSON
  const limit = useMemo(() => {
    const fyData = deductionsLib[fy]
    if (!fyData || !fyData.slabs) return 150000
    const sec80c = fyData.slabs.find((d) => d.section === '80C')
    return sec80c ? sec80c.limit : 150000
  }, [fy])

  const [ppf, setPpf] = useState(0)
  const [elss, setElss] = useState(0)
  const [lic, setLic] = useState(0)
  const [tuition, setTuition] = useState(0)
  const [homeLoan, setHomeLoan] = useState(0)

  const { total, claimed, remaining } = useMemo(() => {
    const t =
      (Number(ppf) || 0) +
      (Number(elss) || 0) +
      (Number(lic) || 0) +
      (Number(tuition) || 0) +
      (Number(homeLoan) || 0)
    return {
      total: t,
      claimed: Math.min(t, limit),
      remaining: Math.max(0, limit - t),
    }
  }, [ppf, elss, lic, tuition, homeLoan, limit])

  const results = (
    <>
      <ResultCard label="Total Invested" value={fmt(total)} />
      <ResultCard
        label="80C Claimable"
        value={fmt(claimed)}
        variant="success"
        hint={`Capped at ${fmt(limit)}`}
      />
      <ResultCard
        label="Room Left"
        value={fmt(remaining)}
        variant="warning"
        hint="How much more you can invest under 80C"
      />
    </>
  )

  return (
    <CalculatorShell node={seoNode} results={results}>
      <TaxInput label="PPF" value={ppf} onChange={setPpf} prefix="₹" />
      <TaxInput label="ELSS / Mutual Funds" value={elss} onChange={setElss} prefix="₹" />
      <TaxInput label="Life Insurance Premium" value={lic} onChange={setLic} prefix="₹" />
      <TaxInput label="Tuition Fees" value={tuition} onChange={setTuition} prefix="₹" />
      <TaxInput label="Home Loan Principal" value={homeLoan} onChange={setHomeLoan} prefix="₹" />
    </CalculatorShell>
  )
}