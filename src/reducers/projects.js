import { TOGGLE_PROJECTS_FILTER, TOGGLE_ALL_PROJECTS_FILTERS } from '../constants/actions'
import { allFiltersChecked } from '../selectors/projects'

const initialState = {
  filters: {
    'professional': true,
    'tinkering': true
  }
}

export default (currentState = initialState, action) => {
  let filters
  switch (action.type) {
    case TOGGLE_PROJECTS_FILTER:
      filters = { ...currentState.filters }
      filters[action.payload] = !filters[action.payload]
      return {
        ...currentState,
        filters
      }
    case TOGGLE_ALL_PROJECTS_FILTERS:
      filters = { ...currentState.filters }
      if (allFiltersChecked(currentState)) {
        Object.keys(filters).forEach(key => (filters[key] = false))
      } else {
        Object.keys(filters).forEach(key => (filters[key] = true))
      }
      return {
        ...currentState,
        filters
      }
    default:
      return currentState
  }
}
