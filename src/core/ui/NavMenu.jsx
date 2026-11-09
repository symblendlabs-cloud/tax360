import { NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/tools', label: 'Calculators' },
  { to: '/questions', label: 'Questions' },
  { to: '/budget', label: 'Budget 2026' },
  { to: '/compare', label: 'Compare' },
  { to: '/calendar', label: 'Calendar' },
]

export default function NavMenu() {
  return (
    <nav className="hidden md:flex items-center gap-1">
      {LINKS.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          end={l.end}
          className={({ isActive }) =>
            `text-sm px-3 py-1.5 rounded-[10px] ${
              isActive
                ? 'bg-white/15 text-white font-semibold'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`
          }
        >
          {l.label}
        </NavLink>
      ))}
      <NavLink
        to="/ask"
        className={({ isActive }) =>
          `ml-2 text-sm px-3 py-1.5 rounded-[10px] border border-[#16A34A] font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] ${
            isActive ? 'ring-2 ring-white/50' : ''
          }`
        }
      >
        Ask
      </NavLink>
            <NavLink
        to="/tax360/contact"
        className={({ isActive }) =>
          `ml-1 text-sm px-3 py-1.5 rounded-[10px] border border-white/30 text-white hover:bg-white/10 ${
            isActive ? 'bg-white/15' : ''
          }`
        }
      >
        Contact
      </NavLink>
    </nav>
  )
}