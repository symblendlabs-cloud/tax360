export default function ResultCard({ label, value, hint, variant = 'default' }) {
  const bg =
    variant === 'success'
      ? 'bg-[#F0FDF4] border-[#BBF7D0]'
      : variant === 'warning'
      ? 'bg-[#FEF3C7] border-[#FDE68A]'
      : 'bg-white border-[#E2E8F0]'

  const valueColor =
    variant === 'success'
      ? 'text-[#15803D]'
      : variant === 'warning'
      ? 'text-[#B45309]'
      : 'text-[#0F2A44]'

  return (
    <div className={`rounded-[12px] border p-4 ${bg}`}>
      <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">{label}</p>
      <p className={`text-2xl font-bold ${valueColor}`}>{value}</p>
      {hint && <p className="text-xs text-slate-500 mt-1">{hint}</p>}
    </div>
  )
}