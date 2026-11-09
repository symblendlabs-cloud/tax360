import { useState } from 'react'

export default function AskQuestion() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would post to a backend or open a Google Form URL.
    // For local use, we simulate success.
    setSubmitted(true)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 text-center">
        <h1 className="text-2xl mb-2">Ask a Tax Question</h1>
        <p className="text-sm text-slate-600">
          Can't find what you're looking for? Send your question and we'll add it to the Hub.
        </p>
      </header>

      {submitted ? (
        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[12px] p-8 text-center">
          <h2 className="text-lg font-bold text-[#15803D] mb-2">Question Submitted!</h2>
          <p className="text-sm text-[#15803D]/80 mb-4">
            Thank you. Your question has been saved locally (simulated).
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-sm font-semibold underline text-[#15803D]"
          >
            Ask another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#0F2A44] mb-1">Your Name</label>
            <input
              type="text"
              required
              className="w-full rounded-[12px] border border-[#E2E8F0] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40"
              placeholder="e.g. Rahul"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#0F2A44] mb-1">Your Question</label>
            <textarea
              required
              rows={4}
              className="w-full rounded-[12px] border border-[#E2E8F0] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40"
              placeholder="Describe your tax situation or query..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold py-2.5 rounded-[12px] transition"
          >
            Submit Question
          </button>
        </form>
      )}
    </div>
  )
}