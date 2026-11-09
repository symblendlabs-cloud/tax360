export const getSiteUrl = () => window.location.origin
export const SITE_NAME = "Tax360 by Symblend"
export const CONTACT_EMAIL = "symblend.labs@gmail.com"

// ⚠️ CHANGE THIS: Your GitHub username + repo name
export const DATA_REPO_BASE = 'https://raw.githubusercontent.com/symblendlabs-cloud/tax360-data/main'

// List of JSON files to fetch from GitHub (just the filename, no .json)
export const QUESTION_FILES = [
  'hra', '80c', 'income-tax',
]

export const TOOL_FILES = [
  'gst', 'advance-tax', 'gratuity', 'professional-tax', 'late-itr',
  'tds-salary', '44ad', '44ada', 'freelancer-tax',
  'cg-property', 'cg-stocks', 'cg-crypto', 'tds-rate-finder',
  'gst-freelancer', 'gst-rcm', 'gst-itc', 'indexation', 'sec54',
  'tax-planner', 'gst-late-fee', 'business-tax', 'gold-tax', 'fd-tax',
  '80d', 'tds-rent', 'tds-fd', 'tds-professional', 'tds-contractor', 'tds-property',
  '80ccd', '80gg', '80tta', '24b',
  '234a', '234b', '234c', 'gst-search',
  'car-loan', 'home-loan', 'personal-loan', 'swp',
  'sip', 'lumpsum', 'epf', 'ppf', 'youtube-tax'
]

export const LIBRARY_FILES = [
  'slabs', 'deductions', 'tdsRates', 'dueDates', 'penalties',
  'myths', 'glossary', 'forms', 'statePT', 'caseStudies',
]