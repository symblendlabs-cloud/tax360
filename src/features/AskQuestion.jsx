import Seo from '../core/ui/Seo'

export default function AskQuestion() {
  return (
    <>
      <Seo 
        title="Ask a Tax Question" 
        description="Can't find what you're looking for? Send your question and we'll add it to the Hub." 
      />
      <div className="max-w-2xl mx-auto space-y-4">
        <header className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 text-center">
          <h1 className="text-2xl mb-2">Ask a Tax Question</h1>
          <p className="text-sm text-slate-600">
            Can't find what you're looking for? Fill out the form below and we'll add it to the Hub.
          </p>
        </header>

        <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-2 overflow-hidden flex justify-center">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSdfdAIaWEUtC3IWVxeVXZdY7y61nVDXQ1YfNd0hwxM-LjtcIg/viewform?embedded=true" 
            width="100%" 
            height="553" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
            className="rounded-lg max-w-full"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </>
  )
}