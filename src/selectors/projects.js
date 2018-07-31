export const allFiltersChecked = state => {
  return Object.values(state.filters).filter(v => !v).length === 0
}
