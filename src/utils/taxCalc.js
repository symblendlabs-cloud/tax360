import slabs from '../data/libraries/slabs.json'

export function getSlabConfig(fy, regime) {
  const fyData = slabs[fy]
  if (!fyData) return null
  return fyData[regime] || null
}

export function computeSlabTax(taxableIncome, config) {
  if (!config || !Array.isArray(config.slabs)) return 0
  let tax = 0
  let prev = 0
  for (const { upto, rate } of config.slabs) {
    const cap = upto === null ? Infinity : upto
    if (taxableIncome > prev) {
      const slabIncome = Math.min(taxableIncome, cap) - prev
      tax += slabIncome * (rate / 100)
      prev = cap
    } else break
  }
  return tax
}

export function applySurchargeAndCess(baseTax, taxableIncome, config) {
  if (!config) return { baseTax, surcharge: 0, cess: 0, total: baseTax }

  let taxAfterRebate = baseTax
  
  // 1. Apply Rebate (87A)
  if (config.rebateLimit && taxableIncome <= config.rebateLimit) {
    taxAfterRebate = Math.max(0, taxAfterRebate - (config.rebateAmount || 0))
  }

  // 2. Apply Surcharge (Simplified: 10% > 50L, 15% > 1Cr, 25% > 2Cr)
  let surchargeRate = 0
  if (taxableIncome > 20000000) surchargeRate = 0.25
  else if (taxableIncome > 10000000) surchargeRate = 0.15
  else if (taxableIncome > 5000000) surchargeRate = 0.10

  const surcharge = taxAfterRebate * surchargeRate

  // 3. Apply Cess (4%)
  const cess = (taxAfterRebate + surcharge) * ((config.cessPercent || 0) / 100)

  return {
    baseTax: taxAfterRebate,
    surcharge,
    cess,
    total: taxAfterRebate + surcharge + cess
  }
}

export function computeRegimeTax(grossIncome, extraDeductions, fy, regime) {
  const config = getSlabConfig(fy, regime)
  if (!config) return { tax: 0, taxable: 0, base: 0, surcharge: 0, cess: 0, config: null }

  const stdDed = config.standardDeduction || 0
  const oldExtra = regime === 'old' ? (Number(extraDeductions) || 0) : 0
  const taxable = Math.max(0, grossIncome - stdDed - oldExtra)

  const base = computeSlabTax(taxable, config)
  const breakdown = applySurchargeAndCess(base, taxable, config)

  return { 
    tax: breakdown.total, 
    taxable, 
    base: breakdown.baseTax,
    surcharge: breakdown.surcharge,
    cess: breakdown.cess,
    config 
  }
}