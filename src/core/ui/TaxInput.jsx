export default function TaxInput({
  label,
  value,
  onChange,
  type = 'number',
  prefix,
  suffix,
  hint,
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-[#0F2A44] mb-1">{label}</span>
      <div className="flex items-center rounded-[12px] border border-[#E2E8F0] bg-white focus-within:ring-2 focus-within:ring-[#16A34A]/40">
        {prefix && (
          <span className="px-3 text-sm text-slate-500 border-r border-[#E2E8F0]">{prefix}</span>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-3 py-2 bg-transparent text-sm focus:outline-none"
        />
        {suffix && (
          <span className="px-3 text-sm text-slate-500 border-l border-[#E2E8F0]">{suffix}</span>
        )}
      </div>
      {hint && <p className="text-xs text-slate-500 mt-1">{hint}</p>}
    </label>
  )
}