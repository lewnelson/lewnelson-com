import { INCREMENT_LINES_INDEX } from '../constants/actions'

const initialState = {
  linesIndex: 0
}

export default (currentState = initialState, action) => {
  switch (action.type) {
    case INCREMENT_LINES_INDEX:
      return {
        ...currentState,
        linesIndex: currentState.linesIndex + 1
      }
    default:
      return currentState
  }
}
