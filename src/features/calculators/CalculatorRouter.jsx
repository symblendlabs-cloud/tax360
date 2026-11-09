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
  'gst-calculator': { component: GSTCalculator, title: 'GST Calculator' },
  'hra-calculator': { component: HRACalculator, title: 'HRA Calculator' },
  'income-tax-calculator': { component: IncomeTaxCalculator, title: 'Income Tax (New vs Old)' },
  '80c-calculator': { component: Sec80CCalculator, title: '80C Calculator' },
  'advance-tax-calculator': { component: AdvanceTaxCalculator, title: 'Advance Tax' },
  'gratuity-calculator': { component: GratuityCalculator, title: 'Gratuity Calculator' },
  'professional-tax-calculator': { component: ProfessionalTaxCalculator, title: 'Professional Tax' },
  'late-itr-calculator': { component: LateITRCalculator, title: 'Late ITR Penalty' },
  'tds-salary-calculator': { component: TDSSalaryCalculator, title: 'TDS on Salary' },
  '44ad-calculator': { component: Sec44ADCalculator, title: 'Section 44AD' },
  '44ada-calculator': { component: Sec44ADACalculator, title: 'Section 44ADA' },
  'freelancer-tax-calculator': { component: FreelancerTaxCalculator, title: 'Freelancer Tax' },
  'cg-property-calculator': { component: CGPropertyCalculator, title: 'Capital Gains: Property' },
  'cg-stocks-calculator': { component: CGStocksCalculator, title: 'Capital Gains: Stocks' },
  'cg-crypto-calculator': { component: CGCryptoCalculator, title: 'Capital Gains: Crypto' },
  'tds-rate-finder': { component: TDSRateFinder, title: 'TDS Rate Finder' },
  'gst-freelancer-calculator': { component: GSTFreelancerCalculator, title: 'GST for Freelancers' },
  'gst-rcm-calculator': { component: GSTRCMCalculator, title: 'GST RCM' },
  'gst-itc-calculator': { component: GSTITCCalculator, title: 'GST ITC' },
  'indexation-calculator': { component: IndexationCalculator, title: 'Indexation Benefit' },
  'sec54-calculator': { component: Sec54Calculator, title: 'Section 54 Exemption' },
  'tax-planner-calculator': { component: TaxPlannerCalculator, title: 'Tax Saving Planner' },
  'gst-late-fee-calculator': { component: GSTLateFeeCalculator, title: 'GST Late Fee' },
  'business-tax-calculator': { component: BusinessTaxCalculator, title: 'Business Tax' },
  'gold-tax-calculator': { component: GoldTaxCalculator, title: 'Gold Tax' },
  'fd-tax-calculator': { component: FDTaxCalculator, title: 'FD Tax' },
  '80d-calculator': { component: Sec80DCalculator, title: 'Section 80D' },
  'tds-rent-calculator': { component: TDSRentCalculator, title: 'TDS on Rent' },
  'tds-fd-calculator': { component: TDSFDCalculator, title: 'TDS on FD' },
  'tds-professional-calculator': { component: TDSProfessionalCalculator, title: 'TDS on Professional Fees' },
  'tds-contractor-calculator': { component: TDSContractorCalculator, title: 'TDS on Contractor' },
  'tds-property-calculator': { component: TDSPropertyCalculator, title: 'TDS on Property' },
    '80ccd-calculator': { component: Sec80CCDCalculator, title: '80CCD NPS' },
  '80gg-calculator': { component: Sec80GGCalculator, title: '80GG Rent' },
  '80tta-calculator': { component: Sec80TTACalculator, title: '80TTA Savings' },
  '24b-calculator': { component: Sec24bCalculator, title: '24b Home Loan' },
  '234a-calculator': { component: Sec234ACalculator, title: 'Interest 234A' },
  '234b-calculator': { component: Sec234BCalculator, title: 'Interest 234B' },
  '234c-calculator': { component: Sec234CCalculator, title: 'Interest 234C' },
  'gst-search-calculator': { component: GSTSearchCalculator, title: 'GST HSN Search' },
  'car-loan-calculator': { component: CarLoanCalculator, title: 'Car Loan EMI' },
  'home-loan-calculator': { component: HomeLoanCalculator, title: 'Home Loan EMI' },
  'personal-loan-calculator': { component: PersonalLoanCalculator, title: 'Personal Loan EMI' },
  'swp-calculator': { component: SWPCalculator, title: 'SWP Calculator' },
  'sip-calculator': { component: SIPCalculator, title: 'SIP Calculator' },
  'lumpsum-calculator': { component: LumpsumCalculator, title: 'Lumpsum Calculator' },
  'epf-calculator': { component: EPFCalculator, title: 'EPF Calculator' },
  'ppf-calculator': { component: PPFCalculator, title: 'PPF Calculator' },
  'youtube-tax-calculator': { component: YouTubeTaxCalculator, title: 'YouTube Creator Tax' },
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