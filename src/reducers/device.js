import { getDeviceType } from '../helpers/device'
import { UPDATE_DEVICE_TYPE } from '../constants/actions'

const initialState = {
  type: getDeviceType(window.innerWidth)
}

export default (currentState = initialState, action) => {
  switch (action.type) {
    case UPDATE_DEVICE_TYPE:
      return {
        ...currentState,
        type: action.payload
      }
    default:
      return currentState
  }
}
