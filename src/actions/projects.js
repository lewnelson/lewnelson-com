import { TOGGLE_PROJECTS_FILTER, TOGGLE_ALL_PROJECTS_FILTERS } from '../constants/actions'

export const toggleFilter = filter => ({
  type: TOGGLE_PROJECTS_FILTER,
  payload: filter
})

export const toggleAllFilters = () => ({
  type: TOGGLE_ALL_PROJECTS_FILTERS
})
