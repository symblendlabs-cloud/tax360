import { useEffect } from 'react'
import { SITE_NAME } from '../../config/site'

export default function Seo({ title, description, jsonLd }) {
  useEffect(() => {
    // 1. Set Title
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME

    // 2. Set Meta Description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', description || '')

    // 3. Set Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', window.location.origin + window.location.pathname)

    // 4. Set OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]')
    if (!ogUrl) {
      ogUrl = document.createElement('meta')
      ogUrl.setAttribute('property', 'og:url')
      document.head.appendChild(ogUrl)
    }
    ogUrl.setAttribute('content', window.location.origin + window.location.pathname)

    // 5. Set OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (!ogTitle) {
      ogTitle = document.createElement('meta')
      ogTitle.setAttribute('property', 'og:title')
      document.head.appendChild(ogTitle)
    }
    ogTitle.setAttribute('content', title ? `${title} | ${SITE_NAME}` : SITE_NAME)

    // 6. Set OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (!ogDesc) {
      ogDesc = document.createElement('meta')
      ogDesc.setAttribute('property', 'og:description')
      document.head.appendChild(ogDesc)
    }
    ogDesc.setAttribute('content', description || '')

    // 7. Inject JSON-LD (Optional)
    let scriptJsonLd = document.getElementById('json-ld-script')
    if (scriptJsonLd) {
      scriptJsonLd.remove()
    }
    if (jsonLd) {
      scriptJsonLd = document.createElement('script')
      scriptJsonLd.id = 'json-ld-script'
      scriptJsonLd.type = 'application/ld+json'
      scriptJsonLd.text = JSON.stringify(jsonLd)
      document.head.appendChild(scriptJsonLd)
    }

  }, [title, description, jsonLd])

  return null
}