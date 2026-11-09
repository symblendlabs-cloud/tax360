import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getAllNodes } from '../data/nodeLoader'
import { useSearchStore } from '../store/searchStore'

export default function OfficialFinder() {
  const { query } = useSearchStore()

  const grouped = useMemo(() => {
    const withOfficial = getAllNodes().filter((n) => n.official?.directLink)
    const filtered = query.trim()
      ? withOfficial.filter((n) => {
          const t = query.toLowerCase()
          return (
            (n.title || '').toLowerCase().includes(t) ||
            (n.official?.site || '').toLowerCase().includes(t)
          )
        })
      : withOfficial

    const map = {}
    for (const n of filtered) {
      const site = n.official.site || 'Other'
      if (!map[site]) map[site] = []
      map[site].push(n)
    }
    return map
  }, [query])

  const sites = Object.keys(grouped)

  return (
    <div className="space-y-4">
      <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
        <h1 className="text-2xl mb-1">Official Page Finder</h1>
        <p className="text-sm text-slate-600">
          Direct links to government .gov.in pages. {sites.length} site{sites.length === 1 ? '' : 's'} grouped.
        </p>
      </header>

      {sites.length === 0 && (
        <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-4 text-sm text-slate-600">
          No official links match your search.
        </div>
      )}

      {sites.map((site) => (
        <section key={site} className="bg-white rounded-[12px] border border-[#E2E8F0] p-4">
          <h2 className="text-base font-semibold text-navy mb-2">{site}</h2>
          <ul className="divide-y divide-slate-100">
            {grouped[site].map((n) => (
              <li key={n.id} className="py-2 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <Link
                    to={`/tax360/${n.type}/${n.slug}`}
                    className="text-sm font-semibold text-[#0F2A44] hover:text-[#16A34A]"
                  >
                    {n.title}
                  </Link>
                  <p className="text-xs text-slate-500 truncate">{n.official.directLink}</p>
                </div>
                <a
                  href={n.official.directLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold whitespace-nowrap"
                >
                  Open ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}