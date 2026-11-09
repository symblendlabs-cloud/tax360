import { useMemo } from 'react'
import dueDates from '../data/libraries/dueDates.json'
import { useFY } from '../context/FYContext'

const CATEGORY_STYLE = {
  'advance-tax': 'bg-[#FEF3C7] text-[#B45309]',
  itr: 'bg-[#DBEAFE] text-[#1D4ED8]',
  gst: 'bg-[#F0FDF4] text-[#15803D]',
  tds: 'bg-[#FCE7F3] text-[#BE185D]',
}

const fmtDate = (d) =>
  new Date(d).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

export default function TaxCalendar() {
  const { fy } = useFY()

  const events = useMemo(
    () =>
      dueDates
        .filter((e) => e.fy === fy)
        .sort((a, b) => new Date(a.date) - new Date(b.date)),
    [fy]
  )

  return (
    <div className="space-y-4">
      <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
        <h1 className="text-2xl mb-1">Tax Calendar · FY {fy}</h1>
        <p className="text-sm text-slate-600">
          {events.length} important due date{events.length === 1 ? '' : 's'} for this financial year.
        </p>
      </header>

      {events.length === 0 ? (
        <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-4 text-sm text-slate-600">
          No due dates stored for FY {fy}.
        </div>
      ) : (
        <div className="bg-white rounded-[12px] border border-[#E2E8F0] divide-y divide-slate-100">
          {events.map((e) => (
            <div key={e.id} className="p-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[#0F2A44]">{e.title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{fmtDate(e.date)}</p>
              </div>
              <span
                className={`text-xs px-2.5 py-1 rounded-full font-semibold whitespace-nowrap ${
                  CATEGORY_STYLE[e.category] || 'bg-slate-100 text-slate-600'
                }`}
              >
                {e.category}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}