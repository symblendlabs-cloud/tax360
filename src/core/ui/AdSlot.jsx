export default function AdSlot({ type = 'side' }) {
  if (type === 'side') {
    return (
      <div className="hidden xl:flex flex-col w-[160px] shrink-0 sticky top-[72px] h-[600px] bg-slate-50 border border-dashed border-slate-300 rounded-[12px] items-center justify-center text-xs text-slate-400">
        <p className="text-center px-2">Advertisement</p>
        <p className="text-[10px] text-center px-2 mt-1">160 × 600</p>
      </div>
    )
  }

  if (type === 'floating-footer') {
    return (
      <div className="hidden md:flex fixed bottom-0 left-0 w-full h-[90px] bg-white border-t border-[#E2E8F0] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40 items-center justify-center">
        <div className="w-full max-w-[728px] h-[90px] bg-slate-50 border border-dashed border-slate-300 rounded flex items-center justify-center text-xs text-slate-400">
          <p>Advertisement</p>
          <p className="text-[10px] ml-2">(728 × 90)</p>
        </div>
      </div>
    )
  }

  return null
}