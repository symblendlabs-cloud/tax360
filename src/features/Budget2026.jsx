import { Link } from 'react-router-dom'

export default function Budget2026() {
  return (
    <div className="space-y-4">
      <header className="bg-[#0F2A44] text-white rounded-[12px] p-6 sm:p-8">
        <p className="text-xs font-semibold tracking-wider uppercase text-[#16A34A] mb-2">
          Union Budget
        </p>
        <h1 className="text-2xl sm:text-3xl mb-2">Budget 2026 Highlights</h1>
        <p className="text-sm text-white/80 max-w-2xl">
          A summary of the key tax changes, slab adjustments, and new rules taking effect for FY 2026-27.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
          <h2 className="text-lg font-bold text-[#0F2A44] mb-3">New Tax Regime (115BAC)</h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="text-[#16A34A] font-bold">•</span>
              <span>Standard deduction increased to <strong>₹75,000</strong> (from ₹50,000).</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#16A34A] font-bold">•</span>
              <span>Zero tax up to <strong>₹12,00,000</strong> taxable income due to rebate and slab changes.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#16A34A] font-bold">•</span>
              <span>New slabs introduced: 5% (4L-8L), 10% (8L-12L), 15% (12L-16L), 20% (16L-20L), 25% (20L-24L), 30% (above 24L).</span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
          <h2 className="text-lg font-bold text-[#0F2A44] mb-3">Capital Gains & Other</h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="text-[#16A34A] font-bold">•</span>
              <span>Short Term Capital Gains (STCG) on equity taxed at <strong>20%</strong> (up from 15%).</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#16A34A] font-bold">•</span>
              <span>Long Term Capital Gains (LTCG) exemption limit raised to <strong>₹1.25 Lakh</strong>.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#16A34A] font-bold">•</span>
              <span>TDS on rent increased threshold to <strong>₹2,40,000</strong> per year.</span>
            </li>
          </ul>
        </section>
      </div>

      <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[12px] p-5 text-center">
        <h3 className="font-semibold text-[#15803D] mb-2">Want to see how this affects you?</h3>
        <Link
          to="/tools/income-tax-calculator"
          className="inline-block bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold px-6 py-2 rounded-[12px]"
        >
          Open Income Tax Calculator →
        </Link>
      </div>
    </div>
  )
}