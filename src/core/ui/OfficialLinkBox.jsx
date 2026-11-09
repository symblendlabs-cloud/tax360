export default function OfficialLinkBox({ official }) {
  if (!official) return null

  const { site, directLink, pdfLink } = official

  return (
    <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-[12px] p-4">
      <p className="text-xs uppercase tracking-wide text-[#1D4ED8] mb-2 font-semibold">
        Official Source
      </p>
      {site && <p className="text-sm text-[#0F2A44] mb-1">{site}</p>}
      <div className="flex flex-wrap gap-3 text-sm mt-2">
        {directLink && (
          <a
            href={directLink}
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            Open official page →
          </a>
        )}
        {pdfLink && (
          <a href={pdfLink} target="_blank" rel="noreferrer" className="font-semibold">
            Download PDF →
          </a>
        )}
      </div>
    </div>
  )
}