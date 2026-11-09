import { createContext, useContext, useState, useMemo } from 'react'

export const FY_LIST = ['2026-27', '2025-26', '2024-25']
export const DEFAULT_FY = '2026-27'

const FYContext = createContext(null)

export function FYProvider({ children }) {
  const [fy, setFy] = useState(DEFAULT_FY)

  const value = useMemo(() => ({ fy, setFy, fyList: FY_LIST }), [fy])

  return <FYContext.Provider value={value}>{children}</FYContext.Provider>
}

export function useFY() {
  const ctx = useContext(FYContext)
  if (!ctx) throw new Error('useFY must be used inside FYProvider')
  return ctx
}