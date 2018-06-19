import { TEST } from '../constants/actions'

const initialState = {
  goingSomewhere: true
}

export default (currentState = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...currentState,
        goingSomewhere: !currentState.goingSomewhere
      }
    default:
      return currentState
  }
}
