import { ADD_FEATURE } from '../constants/actions'

export const addFeature = (feature, value) => ({
  type: ADD_FEATURE,
  payload: { feature, value }
})
