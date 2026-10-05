// React 18 doesn't know the camelCase `fetchPriority` prop yet, so spread the
// lowercase HTML attribute instead (works in every browser, no dev warning).
export const highPriority = { fetchpriority: 'high' } as Record<string, string>
