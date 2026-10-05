/** '#F1D3BE' + 0.4 -> 'rgba(241,211,190,0.4)' */
export function rgba(hex: string, alpha: number): string {
  const h = hex.replace('#', '')
  const n = parseInt(h.length === 3 ? h.replace(/(.)/g, '$1$1') : h, 16)
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${alpha})`
}
