import { ADD_FEATURE } from '../constants/actions'

const initialState = {}

export default (currentState = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      let nextState = { ...currentState }
      nextState[action.payload.feature] = action.payload.value
      return nextState
    default:
      return currentState
  }
}
