import { WIDTHS_TYPES } from '../constants/device'

export function getDeviceType (width) {
  const categories = Object.keys(WIDTHS_TYPES)
    .map(k => parseInt(k))
    .filter(k => k > 0)
    .sort((a, b) => a > b ? 1 : a < b ? -1 : 0)

  let type = null
  while (type === null && categories.length > 0) {
    let next = categories.shift()
    if (width <= parseInt(next)) type = WIDTHS_TYPES[next]
  }

  return type !== null ? type : WIDTHS_TYPES[-1]
}
