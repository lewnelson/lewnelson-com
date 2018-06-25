import { getDeviceType } from '../helpers/device'
import { UPDATE_DEVICE_TYPE, OPEN_NAVIGATION, CLOSE_NAVIGATION } from '../constants/actions'

const initialState = {
  type: getDeviceType(window.innerWidth),
  open: false
}

export default (currentState = initialState, action) => {
  switch (action.type) {
    case UPDATE_DEVICE_TYPE:
      return {
        ...currentState,
        type: action.payload
      }
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
