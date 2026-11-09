export default function TagPills({ tags = [], aliases = [] }) {
  const all = [...new Set([...tags, ...aliases])]
  if (all.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2">
      {all.map((t) => (
        <span
          key={t}
          className="text-xs bg-[#F1F5F9] text-slate-700 px-2.5 py-1 rounded-full"
        >
          {t}
        </span>
      ))}
    </div>
  )
}