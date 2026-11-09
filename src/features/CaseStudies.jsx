import { Link } from 'react-router-dom'
import caseStudies from '../data/libraries/caseStudies.json'

export default function CaseStudies() {
  return (
    <div className="space-y-4">
      <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
        <h1 className="text-2xl mb-1">Case Studies</h1>
        <p className="text-sm text-slate-600">
          Real-world examples of how tax rules apply in different situations.
        </p>
      </header>

      <div className="space-y-4">
        {caseStudies.map((c) => (
          <div key={c.id} className="bg-white rounded-[12px] border border-[#E2E8F0] p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-[#F1F5F9] text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
                {c.persona}
              </span>
              <h2 className="text-lg font-bold text-[#0F2A44]">{c.title}</h2>
            </div>
            
            <p className="text-sm text-slate-700 mb-4 font-medium italic">"{c.summary}"</p>
            
            <div className="bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] p-4 mb-4">
              <ul className="space-y-2 text-sm text-slate-700">
                {c.steps.map((step, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[#16A34A] font-bold">•</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-3">
              <p className="text-sm text-[#15803D]">
                <strong className="font-bold">Conclusion: </strong> 
                {c.conclusion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}