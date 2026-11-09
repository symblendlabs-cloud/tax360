import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const require = createRequire(import.meta.url)

// Read site URL from env (fallback to localhost)
const SITE_URL = process.env.VITE_SITE_URL || 'https://symblend.in'

// Manually add all tool slugs (since we can't import JSX/ESM easily into Node)
const TOOL_SLUGS = [
  'gst-calculator', 'hra-calculator', 'income-tax-calculator', '80c-calculator',
  'advance-tax-calculator', 'gratuity-calculator', 'professional-tax-calculator', 'late-itr-calculator',
  'tds-salary-calculator', '44ad-calculator', '44ada-calculator', 'freelancer-tax-calculator',
  'cg-property-calculator', 'cg-stocks-calculator', 'cg-crypto-calculator', 'tds-rate-finder',
  'gst-freelancer-calculator', 'gst-rcm-calculator', 'gst-itc-calculator', 'indexation-calculator',
  'sec54-calculator', 'tax-planner-calculator', 'gst-late-fee-calculator', 'business-tax-calculator',
  'gold-tax-calculator', 'fd-tax-calculator', '80d-calculator', 'tds-rent-calculator',
  'tds-fd-calculator', 'tds-professional-calculator', 'tds-contractor-calculator', 'tds-property-calculator',
  '80ccd-calculator', '80gg-calculator', '80tta-calculator', '24b-calculator',
  '234a-calculator', '234b-calculator', '234c-calculator', 'gst-search-calculator',
  'car-loan-calculator', 'home-loan-calculator', 'personal-loan-calculator', 'swp-calculator',
  'sip-calculator', 'lumpsum-calculator', 'epf-calculator', 'ppf-calculator',
  'youtube-tax-calculator'
]

// Manually add all node URLs
const NODE_URLS = [
  '/tax360/question/hra-exemption-calculation',
  '/tax360/question/section-80c-limit',
  '/tax360/question/income-tax-new-vs-old',
  '/tax360/tool/gst-overview',
  '/tax360/tool/advance-tax-overview',
  '/tax360/tool/gratuity-overview',
  '/tax360/tool/professional-tax-overview',
  '/tax360/tool/late-itr-overview',
  '/tax360/tool/tds-salary-overview',
  '/tax360/tool/44ad-overview',
  '/tax360/tool/44ada-overview',
  '/tax360/tool/freelancer-tax-overview',
  '/tax360/tool/cg-property-overview',
  '/tax360/tool/cg-stocks-overview',
  '/tax360/tool/cg-crypto-overview',
  '/tax360/tool/tds-rate-overview',
  '/tax360/tool/gst-freelancer-overview',
  '/tax360/tool/gst-rcm-overview',
  '/tax360/tool/gst-itc-overview',
  '/tax360/tool/indexation-overview',
  '/tax360/tool/sec54-overview',
  '/tax360/tool/tax-planner-overview',
  '/tax360/tool/gst-late-fee-overview',
  '/tax360/tool/business-tax-overview',
  '/tax360/tool/gold-tax-overview',
  '/tax360/tool/fd-tax-overview',
  '/tax360/tool/80d-overview',
  '/tax360/tool/tds-rent-overview',
  '/tax360/tool/tds-fd-overview',
  '/tax360/tool/tds-professional-overview',
  '/tax360/tool/tds-contractor-overview',
  '/tax360/tool/tds-property-overview',
  '/tax360/tool/80ccd-overview',
  '/tax360/tool/80gg-overview',
  '/tax360/tool/80tta-overview',
  '/tax360/tool/24b-overview',
  '/tax360/tool/234a-overview',
  '/tax360/tool/234b-overview',
  '/tax360/tool/234c-overview',
  '/tax360/tool/gst-search-overview',
  '/tax360/tool/car-loan-overview',
  '/tax360/tool/home-loan-overview',
  '/tax360/tool/personal-loan-overview',
  '/tax360/tool/swp-overview',
  '/tax360/tool/sip-overview',
  '/tax360/tool/lumpsum-overview',
  '/tax360/tool/epf-overview',
  '/tax360/tool/ppf-overview',
  '/tax360/tool/youtube-tax-overview'
]

// Static pages
const STATIC_PAGES = [
  '/',
  '/tools',
  '/questions',
  '/budget',
  '/compare',
  '/calendar',
  '/checklist',
  '/penalty',
  '/myths',
  '/official',
  '/forms',
  '/glossary',
  '/ask',
  '/case-studies',
  '/tax360/about',
  '/tax360/contact',
  '/tax360/privacy',
  '/tax360/terms'
]

const allUrls = [
  ...STATIC_PAGES,
  ...TOOL_SLUGS.map(slug => `/tools/${slug}`),
  ...NODE_URLS
]

const today = new Date().toISOString().split('T')[0]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), xml)
console.log(`✅ Sitemap generated: ${allUrls.length} URLs → public/sitemap.xml`)