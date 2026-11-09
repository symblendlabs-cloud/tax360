import { useState, useMemo } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import { useFY } from '../../context/FYContext'
import gstRatesLib from '../../data/libraries/gstRates.json'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function GSTCalculator() {
  const node = getNodeBySlug('tool', 'gst-overview')
  const { fy } = useFY()

  const gstConfig = useMemo(() => {
    return gstRatesLib[fy] || { standardRates: [5, 12, 18, 28], defaultRate: 18 }
  }, [fy])

  const [amount, setAmount] = useState(10000)
  const [rate, setRate] = useState(gstConfig.defaultRate)
  const [mode, setMode] = useState('add') // 'add' | 'remove'

  const { gst, base, total } = useMemo(() => {
    const amt = Number(amount) || 0
    const r = Number(rate) || 0
    if (mode === 'add') {
      const g = (amt * r) / 100
      return { gst: g, base: amt, total: amt + g }
    }
    const b = amt / (1 + r / 100)
    return { gst: amt - b, base: b, total: amt }
  }, [amount, rate, mode])

  const fmt = (n) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(n)

  const results = (
    <>
      <ResultCard label="Base Amount" value={fmt(base)} />
      <ResultCard label={`GST @ ${rate}%`} value={fmt(gst)} variant="warning" />
      <ResultCard label="Total" value={fmt(total)} variant="success" />
    </>
  )

  return (
    <CalculatorShell node={node} results={results}>
      <TaxInput
        label="Amount"
        value={amount}
        onChange={setAmount}
        prefix="₹"
        hint={mode === 'add' ? 'Amount before GST' : 'Amount including GST'}
      />

      <div>
        <span className="block text-sm font-medium text-[#0F2A44] mb-1">
          GST Rate
        </span>
        <div className="flex gap-2">
          {gstConfig.standardRates.map((r) => (
            <button
              key={r}
              onClick={() => setRate(r)}
              className={`flex-1 py-2 rounded-[12px] border text-sm font-semibold ${
                rate === r
                  ? 'bg-[#16A34A] text-white border-[#16A34A]'
                  : 'bg-white text-[#0F2A44] border-[#E2E8F0] hover:border-[#16A34A]'
              }`}
            >
              {r}%
            </button>
          ))}
        </div>
      </div>

      <div>
        <span className="block text-sm font-medium text-[#0F2A44] mb-1">
          Mode
        </span>
        <div className="flex gap-2">
          {[
            { id: 'add', label: 'Add GST (exclusive)' },
            { id: 'remove', label: 'Remove GST (inclusive)' },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={`flex-1 py-2 rounded-[12px] border text-sm font-semibold ${
                mode === m.id
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