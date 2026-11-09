import {
  DATA_REPO_BASE,
  QUESTION_FILES,
  TOOL_FILES,
  LIBRARY_FILES,
} from '../config/site'

// Local fallbacks (bundled at build time)
import hra from './nodes/questions/hra.json'
import sec80c from './nodes/questions/80c.json'
import incomeTax from './nodes/questions/income-tax.json'
import gst from './nodes/tools/gst.json'
import advanceTax from './nodes/tools/advance-tax.json'
import gratuity from './nodes/tools/gratuity.json'
import professionalTax from './nodes/tools/professional-tax.json'
import lateItr from './nodes/tools/late-itr.json'
import tdsSalary from './nodes/tools/tds-salary.json'
import sec44AD from './nodes/tools/44ad.json'
import sec44ADA from './nodes/tools/44ada.json'
import freelancerTax from './nodes/tools/freelancer-tax.json'
import cgProperty from './nodes/tools/capital-gains-property.json'
import cgStocks from './nodes/tools/capital-gains-stocks.json'
import cgCrypto from './nodes/tools/capital-gains-crypto.json'
import tdsRateFinder from './nodes/tools/tds-rate-finder.json'
import gstFreelancer from './nodes/tools/gst-freelancer.json'
import gstRcm from './nodes/tools/gst-rcm.json'
import gstItc from './nodes/tools/gst-itc.json'
import indexation from './nodes/tools/indexation.json'
import sec54 from './nodes/tools/sec54.json'
import taxPlanner from './nodes/tools/tax-planner.json'
import gstLateFee from './nodes/tools/gst-late-fee.json'
import businessTax from './nodes/tools/business-tax.json'
import goldTax from './nodes/tools/gold-tax.json'
import fdTax from './nodes/tools/fd-tax.json'
import sec80D from './nodes/tools/80d.json'
import tdsRent from './nodes/tools/tds-rent.json'
import tdsFd from './nodes/tools/tds-fd.json'
import tdsProfessional from './nodes/tools/tds-professional.json'
import tdsContractor from './nodes/tools/tds-contractor.json'
import tdsProperty from './nodes/tools/tds-property.json'
import sec80CCD from './nodes/tools/80ccd.json'
import sec80GG from './nodes/tools/80gg.json'
import sec80TTA from './nodes/tools/80tta.json'
import sec24b from './nodes/tools/24b.json'
import sec234A from './nodes/tools/234a.json'
import sec234B from './nodes/tools/234b.json'
import sec234C from './nodes/tools/234c.json'
import gstSearch from './nodes/tools/gst-search.json'
import carLoan from './nodes/tools/car-loan.json'
import homeLoan from './nodes/tools/home-loan.json'
import personalLoan from './nodes/tools/personal-loan.json'
import swp from './nodes/tools/swp.json'
import sip from './nodes/tools/sip.json'
import lumpsum from './nodes/tools/lumpsum.json'
import epf from './nodes/tools/epf.json'
import ppf from './nodes/tools/ppf.json'
import youtubeTax from './nodes/tools/youtube-tax.json'

const LOCAL_FALLBACK = [
  hra, sec80c, incomeTax,
  gst, advanceTax, gratuity, professionalTax, lateItr,
  tdsSalary, sec44AD, sec44ADA, freelancerTax,
  cgProperty, cgStocks, cgCrypto, tdsRateFinder,
  gstFreelancer, gstRcm, gstItc, indexation, sec54,
  taxPlanner, gstLateFee, businessTax, goldTax, fdTax,
  sec80D, tdsRent, tdsFd, tdsProfessional, tdsContractor, tdsProperty,
  sec80CCD, sec80GG, sec80TTA, sec24b,
  sec234A, sec234B, sec234C, gstSearch,
  carLoan, homeLoan, personalLoan, swp, sip, lumpsum, epf, ppf, youtubeTax,
]

let ALL_NODES = LOCAL_FALLBACK
let loaded = false

async function fetchJson(url) {
  try {
    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

export async function loadNodesFromGitHub() {
  if (loaded) return ALL_NODES

  const urls = [
    ...QUESTION_FILES.map(f => `${DATA_REPO_BASE}/nodes/questions/${f}.json`),
    ...TOOL_FILES.map(f => `${DATA_REPO_BASE}/nodes/tools/${f}.json`),
  ]

  const results = await Promise.all(urls.map(fetchJson))
  const fetched = results.filter(Boolean)

  // Only override if we got a meaningful number of nodes
  if (fetched.length > 10) {
    ALL_NODES = fetched
  }
  loaded = true
  return ALL_NODES
}

export function getAllNodes() {
  return ALL_NODES
}

export function getNodeBySlug(type, slug) {
  return ALL_NODES.find((n) => n.type === type && n.slug === slug) || null
}

export function getNodesByType(type) {
  return ALL_NODES.filter((n) => n.type === type)
}

export { LIBRARY_FILES }