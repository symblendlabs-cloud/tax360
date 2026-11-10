import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FYProvider } from './context/FYContext'
import ScrollToTop from './core/ui/ScrollToTop'
import Layout from './core/ui/Layout'

import Home from './features/Home'
import SoloNodePage from './features/SoloNodePage'
import CalculatorRouter from './features/calculators/CalculatorRouter'
import CalculatorHub from './features/CalculatorHub'
import QuestionHub from './features/QuestionHub'
import OfficialFinder from './features/OfficialFinder'
import TaxCalendar from './features/TaxCalendar'
import PenaltyExplainer from './features/PenaltyExplainer'
import MythBuster from './features/MythBuster'
import ITRChecklist from './features/ITRChecklist'
import PersonaHub from './features/PersonaHub'
import CaseStudies from './features/CaseStudies'
import Budget2026 from './features/Budget2026'
import ComparePages from './features/ComparePages'
import AskQuestion from './features/AskQuestion'
import Glossary from './features/Glossary'
import FormsHub from './features/FormsHub'
import About from './features/About'
import Privacy from './features/Privacy'
import Contact from './features/Contact'
import Terms from './features/Terms'
import Analytics from './core/ui/Analytics'

export default function App() {
  return (
    <FYProvider>
      <BrowserRouter>
      <Analytics />
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/questions" element={<QuestionHub />} />
            <Route path="/official" element={<OfficialFinder />} />
            <Route path="/calendar" element={<TaxCalendar />} />
            <Route path="/penalty" element={<PenaltyExplainer />} />
            <Route path="/myths" element={<MythBuster />} />
            <Route path="/checklist" element={<ITRChecklist />} />
            <Route path="/personas/:id" element={<PersonaHub />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/budget" element={<Budget2026 />} />
            <Route path="/compare" element={<ComparePages />} />
            <Route path="/ask" element={<AskQuestion />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/forms" element={<FormsHub />} />
            <Route path="/tax360/about" element={<About />} />
            <Route path="/tax360/privacy" element={<Privacy />} />
            <Route path="/tax360/contact" element={<Contact />} />
            <Route path="/tax360/terms" element={<Terms />} />
            
            <Route path="/tax360/:type/:slug" element={<SoloNodePage />} />
            <Route path="/tools" element={<CalculatorHub />} />
            <Route path="/tools/:slug" element={<CalculatorRouter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FYProvider>
  )
}