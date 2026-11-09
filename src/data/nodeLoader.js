import {
  DATA_REPO_BASE,
  QUESTION_FILES,
  TOOL_FILES,
} from '../config/site'

// --- LOCAL FALLBACKS ---
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

// Map filenames to local JSON data and their expected Type/Slug
const LOCAL_MAP = {
  'hra': { data: hra, type: 'question', slug: 'hra-exemption-calculation' },
  '80c': { data: sec80c, type: 'question', slug: 'section-80c-limit' },
  'income-tax': { data: incomeTax, type: 'question', slug: 'income-tax-new-vs-old' },
  'gst': { data: gst, type: 'tool', slug: 'gst-overview' },
  'advance-tax': { data: advanceTax, type: 'tool', slug: 'advance-tax-overview' },
  'gratuity': { data: gratuity, type: 'tool', slug: 'gratuity-overview' },
  'professional-tax': { data: professionalTax, type: 'tool', slug: 'professional-tax-overview' },
  'late-itr': { data: lateItr, type: 'tool', slug: 'late-itr-overview' },
  'tds-salary': { data: tdsSalary, type: 'tool', slug: 'tds-salary-overview' },
  '44ad': { data: sec44AD, type: 'tool', slug: '44ad-overview' },
  '44ada': { data: sec44ADA, type: 'tool', slug: '44ada-overview' },
  'freelancer-tax': { data: freelancerTax, type: 'tool', slug: 'freelancer-tax-overview' },
  'cg-property': { data: cgProperty, type: 'tool', slug: 'cg-property-overview' },
  'cg-stocks': { data: cgStocks, type: 'tool', slug: 'cg-stocks-overview' },
  'cg-crypto': { data: cgCrypto, type: 'tool', slug: 'cg-crypto-overview' },
  'tds-rate-finder': { data: tdsRateFinder, type: 'tool', slug: 'tds-rate-overview' },
  'gst-freelancer': { data: gstFreelancer, type: 'tool', slug: 'gst-freelancer-overview' },
  'gst-rcm': { data: gstRcm, type: 'tool', slug: 'gst-rcm-overview' },
  'gst-itc': { data: gstItc, type: 'tool', slug: 'gst-itc-overview' },
  'indexation': { data: indexation, type: 'tool', slug: 'indexation-overview' },
  'sec54': { data: sec54, type: 'tool', slug: 'sec54-overview' },
  'tax-planner': { data: taxPlanner, type: 'tool', slug: 'tax-planner-overview' },
  'gst-late-fee': { data: gstLateFee, type: 'tool', slug: 'gst-late-fee-overview' },
  'business-tax': { data: businessTax, type: 'tool', slug: 'business-tax-overview' },
  'gold-tax': { data: goldTax, type: 'tool', slug: 'gold-tax-overview' },
  'fd-tax': { data: fdTax, type: 'tool', slug: 'fd-tax-overview' },
  '80d': { data: sec80D, type: 'tool', slug: '80d-overview' },
  'tds-rent': { data: tdsRent, type: 'tool', slug: 'tds-rent-overview' },
  'tds-fd': { data: tdsFd, type: 'tool', slug: 'tds-fd-overview' },
  'tds-professional': { data: tdsProfessional, type: 'tool', slug: 'tds-professional-overview' },
  'tds-contractor': { data: tdsContractor, type: 'tool', slug: 'tds-contractor-overview' },
  'tds-property': { data: tdsProperty, type: 'tool', slug: 'tds-property-overview' },
  '80ccd': { data: sec80CCD, type: 'tool', slug: '80ccd-overview' },
  '80gg': { data: sec80GG, type: 'tool', slug: '80gg-overview' },
  '80tta': { data: sec80TTA, type: 'tool', slug: '80tta-overview' },
  '24b': { data: sec24b, type: 'tool', slug: '24b-overview' },
  '234a': { data: sec234A, type: 'tool', slug: '234a-overview' },
  '234b': { data: sec234B, type: 'tool', slug: '234b-overview' },
  '234c': { data: sec234C, type: 'tool', slug: '234c-overview' },
  'gst-search': { data: gstSearch, type: 'tool', slug: 'gst-search-overview' },
  'car-loan': { data: carLoan, type: 'tool', slug: 'car-loan-overview' },
  'home-loan': { data: homeLoan, type: 'tool', slug: 'home-loan-overview' },
  'personal-loan': { data: personalLoan, type: 'tool', slug: 'personal-loan-overview' },
  'swp': { data: swp, type: 'tool', slug: 'swp-overview' },
  'sip': { data: sip, type: 'tool', slug: 'sip-overview' },
  'lumpsum': { data: lumpsum, type: 'tool', slug: 'lumpsum-overview' },
  'epf': { data: epf, type: 'tool', slug: 'epf-overview' },
  'ppf': { data: ppf, type: 'tool', slug: 'ppf-overview' },
  'youtube-tax': { data: youtubeTax, type: 'tool', slug: 'youtube-tax-overview' }
}

let ALL_NODES = Object.values(LOCAL_MAP).map(item => item.data)

// Keep track of files we've already fetched so we don't fetch twice
const fetchedFiles = new Set()

async function fetchNodeFromGitHub(file, type) {
  if (fetchedFiles.has(file)) return
  fetchedFiles.add(file)

  const folder = type === 'question' ? 'questions' : 'tools'
  
  try {
    // Add cache-buster to ensure fresh data
    const res = await fetch(`${DATA_REPO_BASE}/nodes/${folder}/${file}.json?t=${Date.now()}`)
    if (!res.ok) return // 404? Just use the local fallback quietly.
    
    const cloudData = await res.json()
    
    // Replace the local version with the cloud version in memory
    const index = ALL_NODES.findIndex(n => n.id === cloudData.id)
    if (index !== -1) {
      ALL_NODES[index] = cloudData
    }
  } catch (err) {
    // Ignore network errors, fallback to local
  }
}

// Called by the page to load ONLY the data it needs
export async function loadNode(type, slug) {
  // Find which file corresponds to this type and slug
  const entry = Object.entries(LOCAL_MAP).find(([_, item]) => item.type === type && item.slug === slug)
  if (entry) {
    const [file, _] = entry
    await fetchNodeFromGitHub(file, type)
  }
}

// Used for the Homepage and Tool Hub to show all links instantly
export function getAllNodes() {
  return ALL_NODES
}

// Get a single node synchronously (returns local first, then updated cloud data)
export function getNodeBySlug(type, slug) {
  return ALL_NODES.find((n) => n.type === type && n.slug === slug) || null
}

export function getNodesByType(type) {
  return ALL_NODES.filter((n) => n.type === type)
}