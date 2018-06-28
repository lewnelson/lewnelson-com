import { INCREMENT_LINES_INDEX, INCREMENT_SOCIAL_LINKS_INDEX } from '../constants/actions'

const initialState = {
  linesIndex: 0,
  socialLinksIndex: -1
}

export default (currentState = initialState, action) => {
  switch (action.type) {
    case INCREMENT_LINES_INDEX:
      return {
        ...currentState,
        linesIndex: currentState.linesIndex + 1
      }
    case INCREMENT_SOCIAL_LINKS_INDEX:
      return {
        ...currentState,
        socialLinksIndex: currentState.socialLinksIndex + 1
      }
    default:
      return currentState
  }
}
