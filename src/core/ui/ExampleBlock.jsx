export default function ExampleBlock({ example }) {
  if (!example) return null
  const { inputs, calculation, result } = example

  return (
    <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-4">
      <h3 className="text-sm font-semibold text-navy mb-2">Worked Example</h3>

      {inputs && Object.keys(inputs).length > 0 && (
        <div className="mb-3">
          <p className="text-xs uppercase text-slate-500 mb-1">Inputs</p>
          <ul className="text-sm text-slate-700 space-y-0.5">
            {Object.entries(inputs).map(([k, v]) => (
              <li key={k}>
                <span className="text-slate-500">{k}:</span> {String(v)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {calculation && (
        <div className="mb-3">
          <p className="text-xs uppercase text-slate-500 mb-1">Calculation</p>
          <p className="text-sm text-slate-700">{calculation}</p>
        </div>
      )}

      {result && (
        <div className="mt-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-3">
          <p className="text-xs uppercase text-[#15803D] mb-1">Result</p>
          <p className="font-bold text-[#15803D]">{result}</p>
        </div>
      )}
    </div>
  )
}