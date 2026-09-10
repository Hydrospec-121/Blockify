// Currency + number formatting helpers.
// Centralized so a future API integration (real currency, locale) only
// touches this file, not every component that displays a price.
//
// Default currency is BDT (Bangladeshi Taka) to match the store's price
// hierarchy example (৳499 / ৳599) and typical local retail convention of
// omitting decimal paisa on whole-taka prices. Amounts are still passed
// as the smallest unit (poisha, i.e. taka * 100) so every call site keeps
// the same "priceCents" shape regardless of currency.

export function formatPrice(amountInCents, currency = 'BDT', locale = 'en-BD') {
  const amount = amountInCents / 100
  const isWhole = Number.isInteger(amount)
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: isWhole ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

export function formatDiscountPercent(originalCents, saleCents) {
  if (!originalCents || originalCents <= saleCents) return null
  const pct = Math.round(((originalCents - saleCents) / originalCents) * 100)
  return `${pct}% off`
}

export function formatOrderDate(isoDate, locale = 'en-BD') {
  return new Date(isoDate).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
