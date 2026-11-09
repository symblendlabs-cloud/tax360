import { useState } from 'react'
import { getNodeBySlug } from '../../data/nodeLoader'
import CalculatorShell from '../../core/ui/CalculatorShell'
import TaxInput from '../../core/ui/TaxInput'
import ResultCard from '../../core/ui/ResultCard'

export default function GSTSearchCalculator() {
  const node = getNodeBySlug('tool', 'gst-search-overview')
  const [hsn, setHsn] = useState('')
  
  // Real dummy database for local use
  const db = {
    '1001': '18% - Wheat',
    '1002': '12% - Rye',
    '0401': '5% - Milk',
    '9983': '18% - IT Services',
    '9972': '18% - Real Estate Services'
  }
  
  const result = db[hsn] || 'Not Found'
  const isFound = result !== 'Not Found'

  return (
    <CalculatorShell node={node} results={<ResultCard label="GST Rate" value={result} variant={isFound ? 'success' : 'warning'} />}>
      <TaxInput label="Enter HSN / SAC Code" value={hsn} onChange={setHsn} type="text" hint="Try 1001, 0401, or 9983" />
    </CalculatorShell>
  )
}