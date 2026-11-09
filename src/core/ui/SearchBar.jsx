import { useSearchStore } from '../../store/searchStore'

export default function SearchBar({ placeholder = 'Search tools, questions, sections…' }) {
  const { query, setQuery, clearQuery } = useSearchStore()

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-[12px] border border-[#E2E8F0] bg-white px-4 py-3 pr-24 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40"
      />
      {query && (
        <button
          onClick={clearQuery}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-[#0F2A44]"
        >
          Clear
        </button>
      )}
    </div>
  )
}