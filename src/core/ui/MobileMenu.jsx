import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/tools', label: 'Calculators' },
  { to: '/questions', label: 'Questions' },
  { to: '/budget', label: 'Budget 2026' },
  { to: '/compare', label: 'Compare' },
  { to: '/calendar', label: 'Calendar' },
  { to: '/checklist', label: 'Checklist' },
  { to: '/penalty', label: 'Penalty' },
  { to: '/myths', label: 'Myths' },
  { to: '/official', label: 'Official Links' },
  { to: '/forms', label: 'ITR Forms' },
  { to: '/glossary', label: 'Glossary' },
  { to: '/ask', label: 'Ask a Question' },
  { to: '/tax360/about', label: 'About' },
  { to: '/tax360/contact', label: 'Contact' },
  { to: '/tax360/privacy', label: 'Privacy' },
  { to: '/tax360/terms', label: 'Terms' },
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white hover:bg-white/10 rounded-lg focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0F2A44] border-t border-white/10 shadow-lg">
          <div className="flex flex-col p-2 space-y-1">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setIsOpen(false)} // Close menu on click
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium ${
                    isActive
                      ? 'bg-white/15 text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}