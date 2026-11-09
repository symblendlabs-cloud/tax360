import { Link, Outlet } from 'react-router-dom'
import FYSelector from './FYSelector'
import NavMenu from './NavMenu'
import MobileMenu from './MobileMenu'
import { useFY } from '../../context/FYContext'

export default function Layout() {
  const { fy } = useFY()

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* HEADER */}
      <header className="bg-[#0F2A44] text-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between gap-4 relative">
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:opacity-90 transition flex items-center">
              <img src="/logo.png" alt="Tax360 by Symblend" className="h-10 w-auto" />
            </Link>
            <NavMenu />
          </div>
          <div className="flex items-center gap-4">
            <FYSelector />
            <span className="text-xs text-white/70 hidden sm:inline">by Symblend</span>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* MAIN WRAPPER - Clean, no side ad wrappers */}
      <div className="flex-1 w-full flex justify-center">
        <main className="w-full max-w-[1200px] px-4 py-6">
          <Outlet />
        </main>
      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t border-[#E2E8F0] mt-8">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-bold text-[#0F2A44] mb-2 text-lg">Tax360</h3>
            <p className="text-sm text-slate-500 mb-4 max-w-sm">
              All your tax data in one website. 100% local — your data never leaves your browser. Built by Symblend.
            </p>
            <p className="text-xs text-slate-400">
              Active Financial Year: <strong className="text-[#16A34A]">{fy}</strong>
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Contact: <a href="mailto:symblend.labs@gmail.com" className="text-[#16A34A] hover:underline">symblend.labs@gmail.com</a>
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#0F2A44] mb-2 text-sm">Resources</h4>
            <ul className="space-y-1.5 text-sm text-slate-500">
              <li><Link to="/tools" className="hover:text-[#16A34A]">Calculators</Link></li>
              <li><Link to="/questions" className="hover:text-[#16A34A]">Question Hub</Link></li>
              <li><Link to="/official" className="hover:text-[#16A34A]">Official Links</Link></li>
              <li><Link to="/calendar" className="hover:text-[#16A34A]">Tax Calendar</Link></li>
              <li><Link to="/glossary" className="hover:text-[#16A34A]">Glossary</Link></li>
              <li><Link to="/forms" className="hover:text-[#16A34A]">ITR Forms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#0F2A44] mb-2 text-sm">Legal</h4>
            <ul className="space-y-1.5 text-sm text-slate-500">
              <li><Link to="/tax360/about" className="hover:text-[#16A34A]">About</Link></li>
              <li><Link to="/tax360/contact" className="hover:text-[#16A34A]">Contact</Link></li>
              <li><Link to="/tax360/privacy" className="hover:text-[#16A34A]">Privacy</Link></li>
              <li><Link to="/tax360/terms" className="hover:text-[#16A34A]">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E2E8F0] py-4 text-center text-xs text-slate-400">
          Disclaimer: Tax360 is for educational purposes only. Verify with a CA or the Income Tax Department.
        </div>
      </footer>
    </div>
  )
}