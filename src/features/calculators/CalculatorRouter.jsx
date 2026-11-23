import { useParams, Link } from 'react-router-dom'
import GSTCalculator from './GSTCalculator'
import HRACalculator from './HRACalculator'
import IncomeTaxCalculator from './IncomeTaxCalculator'
import Sec80CCalculator from './Sec80CCalculator'
import AdvanceTaxCalculator from './AdvanceTaxCalculator'
import GratuityCalculator from './GratuityCalculator'
import ProfessionalTaxCalculator from './ProfessionalTaxCalculator'
import LateITRCalculator from './LateITRCalculator'
import TDSSalaryCalculator from './TDSSalaryCalculator'
import Sec44ADCalculator from './Sec44ADCalculator'
import Sec44ADACalculator from './Sec44ADACalculator'
import FreelancerTaxCalculator from './FreelancerTaxCalculator'
import CGPropertyCalculator from './CGPropertyCalculator'
import CGStocksCalculator from './CGStocksCalculator'
import CGCryptoCalculator from './CGCryptoCalculator'
import TDSRateFinder from './TDSRateFinder'
import GSTFreelancerCalculator from './GSTFreelancerCalculator'
import GSTRCMCalculator from './GSTRCMCalculator'
import GSTITCCalculator from './GSTITCCalculator'
import IndexationCalculator from './IndexationCalculator'
import Sec54Calculator from './Sec54Calculator'
import TaxPlannerCalculator from './TaxPlannerCalculator'
import GSTLateFeeCalculator from './GSTLateFeeCalculator'
import BusinessTaxCalculator from './BusinessTaxCalculator'
import GoldTaxCalculator from './GoldTaxCalculator'
import FDTaxCalculator from './FDTaxCalculator'
import Sec80DCalculator from './Sec80DCalculator'
import TDSRentCalculator from './TDSRentCalculator'
import TDSFDCalculator from './TDSFDCalculator'
import TDSProfessionalCalculator from './TDSProfessionalCalculator'
import TDSContractorCalculator from './TDSContractorCalculator'
import TDSPropertyCalculator from './TDSPropertyCalculator'
import Sec80CCDCalculator from './Sec80CCDCalculator'
import Sec80GGCalculator from './Sec80GGCalculator'
import Sec80TTACalculator from './Sec80TTACalculator'
import Sec24bCalculator from './Sec24bCalculator'
import Sec234ACalculator from './Sec234ACalculator'
import Sec234BCalculator from './Sec234BCalculator'
import Sec234CCalculator from './Sec234CCalculator'
import GSTSearchCalculator from './GSTSearchCalculator'
import CarLoanCalculator from './CarLoanCalculator'
import HomeLoanCalculator from './HomeLoanCalculator'
import PersonalLoanCalculator from './PersonalLoanCalculator'
import SWPCalculator from './SWPCalculator'
import SIPCalculator from './SIPCalculator'
import LumpsumCalculator from './LumpsumCalculator'
import EPFCalculator from './EPFCalculator'
import PPFCalculator from './PPFCalculator'
import YouTubeTaxCalculator from './YouTubeTaxCalculator'

export const CALCULATORS = {
  'gst-calculator': { component: GSTCalculator, title: 'GST Calculator', nodeSlug: 'gst' },
  'hra-calculator': { component: HRACalculator, title: 'HRA Calculator', nodeSlug: 'hra' },
  'income-tax-calculator': { component: IncomeTaxCalculator, title: 'Income Tax (New vs Old)', nodeSlug: 'income-tax' },
  '80c-calculator': { component: Sec80CCalculator, title: '80C Calculator', nodeSlug: '80c' },
  'advance-tax-calculator': { component: AdvanceTaxCalculator, title: 'Advance Tax', nodeSlug: 'advance-tax' },
  'gratuity-calculator': { component: GratuityCalculator, title: 'Gratuity Calculator', nodeSlug: 'gratuity' },
  'professional-tax-calculator': { component: ProfessionalTaxCalculator, title: 'Professional Tax', nodeSlug: 'professional-tax' },
  'late-itr-calculator': { component: LateITRCalculator, title: 'Late ITR Penalty', nodeSlug: 'late-itr' },
  'tds-salary-calculator': { component: TDSSalaryCalculator, title: 'TDS on Salary', nodeSlug: 'tds-salary' },
  '44ad-calculator': { component: Sec44ADCalculator, title: 'Section 44AD', nodeSlug: '44ad' },
  '44ada-calculator': { component: Sec44ADACalculator, title: 'Section 44ADA', nodeSlug: '44ada' },
  'freelancer-tax-calculator': { component: FreelancerTaxCalculator, title: 'Freelancer Tax', nodeSlug: 'freelancer-tax' },
  'cg-property-calculator': { component: CGPropertyCalculator, title: 'Capital Gains: Property', nodeSlug: 'capital-gains-property' },
  'cg-stocks-calculator': { component: CGStocksCalculator, title: 'Capital Gains: Stocks', nodeSlug: 'capital-gains-stocks' },
  'cg-crypto-calculator': { component: CGCryptoCalculator, title: 'Capital Gains: Crypto', nodeSlug: 'capital-gains-crypto' },
  'tds-rate-finder': { component: TDSRateFinder, title: 'TDS Rate Finder', nodeSlug: 'tds-rate-finder' },
  'gst-freelancer-calculator': { component: GSTFreelancerCalculator, title: 'GST for Freelancers', nodeSlug: 'gst-freelancer' },
  'gst-rcm-calculator': { component: GSTRCMCalculator, title: 'GST RCM', nodeSlug: 'gst-rcm' },
  'gst-itc-calculator': { component: GSTITCCalculator, title: 'GST ITC', nodeSlug: 'gst-itc' },
  'indexation-calculator': { component: IndexationCalculator, title: 'Indexation Benefit', nodeSlug: 'indexation' },
  'sec54-calculator': { component: Sec54Calculator, title: 'Section 54 Exemption', nodeSlug: 'sec54' },
  'tax-planner-calculator': { component: TaxPlannerCalculator, title: 'Tax Saving Planner', nodeSlug: 'tax-planner' },
  'gst-late-fee-calculator': { component: GSTLateFeeCalculator, title: 'GST Late Fee', nodeSlug: 'gst-late-fee' },
  'business-tax-calculator': { component: BusinessTaxCalculator, title: 'Business Tax', nodeSlug: 'business-tax' },
  'gold-tax-calculator': { component: GoldTaxCalculator, title: 'Gold Tax', nodeSlug: 'gold-tax' },
  'fd-tax-calculator': { component: FDTaxCalculator, title: 'FD Tax', nodeSlug: 'fd-tax' },
  '80d-calculator': { component: Sec80DCalculator, title: 'Section 80D', nodeSlug: '80d' },
  'tds-rent-calculator': { component: TDSRentCalculator, title: 'TDS on Rent', nodeSlug: 'tds-rent' },
  'tds-fd-calculator': { component: TDSFDCalculator, title: 'TDS on FD', nodeSlug: 'tds-fd' },
  'tds-professional-calculator': { component: TDSProfessionalCalculator, title: 'TDS on Professional Fees', nodeSlug: 'tds-professional' },
  'tds-contractor-calculator': { component: TDSContractorCalculator, title: 'TDS on Contractor', nodeSlug: 'tds-contractor' },
  'tds-property-calculator': { component: TDSPropertyCalculator, title: 'TDS on Property', nodeSlug: 'tds-property' },
  '80ccd-calculator': { component: Sec80CCDCalculator, title: '80CCD NPS', nodeSlug: '80ccd' },
  '80gg-calculator': { component: Sec80GGCalculator, title: '80GG Rent', nodeSlug: '80gg' },
  '80tta-calculator': { component: Sec80TTACalculator, title: '80TTA Savings', nodeSlug: '80tta' },
  '24b-calculator': { component: Sec24bCalculator, title: '24b Home Loan', nodeSlug: '24b' },
  '234a-calculator': { component: Sec234ACalculator, title: 'Interest 234A', nodeSlug: '234a' },
  '234b-calculator': { component: Sec234BCalculator, title: 'Interest 234B', nodeSlug: '234b' },
  '234c-calculator': { component: Sec234CCalculator, title: 'Interest 234C', nodeSlug: '234c' },
  'gst-search-calculator': { component: GSTSearchCalculator, title: 'GST HSN Search', nodeSlug: 'gst-search' },
  'car-loan-calculator': { component: CarLoanCalculator, title: 'Car Loan EMI', nodeSlug: 'car-loan' },
  'home-loan-calculator': { component: HomeLoanCalculator, title: 'Home Loan EMI', nodeSlug: 'home-loan' },
  'personal-loan-calculator': { component: PersonalLoanCalculator, title: 'Personal Loan EMI', nodeSlug: 'personal-loan' },
  'swp-calculator': { component: SWPCalculator, title: 'SWP Calculator', nodeSlug: 'swp' },
  'sip-calculator': { component: SIPCalculator, title: 'SIP Calculator', nodeSlug: 'sip' },
  'lumpsum-calculator': { component: LumpsumCalculator, title: 'Lumpsum Calculator', nodeSlug: 'lumpsum' },
  'epf-calculator': { component: EPFCalculator, title: 'EPF Calculator', nodeSlug: 'epf' },
  'ppf-calculator': { component: PPFCalculator, title: 'PPF Calculator', nodeSlug: 'ppf' },
  'youtube-tax-calculator': { component: YouTubeTaxCalculator, title: 'YouTube Creator Tax', nodeSlug: 'youtube-tax' },
}

export default function CalculatorRouter() {
  const { slug } = useParams()
  const entry = CALCULATORS[slug]

  if (!entry) {
    return (
      <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6">
        <h1 className="text-xl mb-2">Calculator not found</h1>
        <p className="text-slate-600 mb-4">
          No calculator registered for slug <code>{slug}</code> yet.
        </p>
        <Link to="/tools" className="font-semibold">← Back to tools</Link>
      </div>
    )
  }

  const Component = entry.component
  return <Component />
}