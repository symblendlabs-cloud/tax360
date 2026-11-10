import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    // Replace with your actual Measurement ID
    const GA_MEASUREMENT_ID = 'G-SNGJV4KQQ5'
    
    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      })
    }
  }, [location])

  return null
}