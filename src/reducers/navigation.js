import { OPEN_NAVIGATION, CLOSE_NAVIGATION } from '../constants/actions'

const initialState = {
  open: false
}

export default (currentState = initialState, action) => {
  switch (action.type) {
    case OPEN_NAVIGATION:
      return {
        ...currentState,
        open: true
      }
    case CLOSE_NAVIGATION:
      return {
        ...currentState,
        open: false
      }
    default:
      return currentState
  }
}
