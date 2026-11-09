import { useFY } from '../../context/FYContext'

export default function FYSelector() {
  const { fy, setFy, fyList } = useFY()

  return (
    <label className="flex items-center gap-2 text-xs text-white/80">
      <span>FY</span>
      <select
        value={fy}
        onChange={(e) => setFy(e.target.value)}
        className="bg-navy-light text-white text-xs rounded px-2 py-1 border border-white/20 focus:outline-none"
      >
        {fyList.map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
    </label>
  )
}