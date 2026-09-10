// Tiny classnames combinator — avoids a dependency for conditional class logic.
export function cn(...args) {
  return args
    .flatMap((a) => {
      if (!a) return []
      if (typeof a === 'string') return [a]
      if (Array.isArray(a)) return a
      if (typeof a === 'object') {
        return Object.entries(a)
          .filter(([, v]) => Boolean(v))
          .map(([k]) => k)
      }
      return []
    })
    .join(' ')
}
