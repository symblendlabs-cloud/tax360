import forms from '../data/libraries/forms.json'

export default function FormsHub() {
  return (
    <div className="space-y-4">
      <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-5 sm:p-6">
        <h1 className="text-2xl mb-2">Which ITR Form applies to you?</h1>
        <p className="text-sm text-slate-600">
          A guide to the most common Income Tax Return forms.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {forms.map((form) => (
          <div key={form.id} className="bg-white rounded-[12px] border border-[#E2E8F0] p-5 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-[#0F2A44] mb-3">{form.name}</h2>
              
              <div className="mb-3">
                <p className="text-xs font-semibold text-[#16A34A] uppercase mb-1">Applicable For</p>
                <p className="text-sm text-slate-700">{form.applicableFor}</p>
              </div>
              
              <div>
                <p className="text-xs font-semibold text-red-500 uppercase mb-1">Not For</p>
                <p className="text-sm text-slate-700">{form.notFor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}