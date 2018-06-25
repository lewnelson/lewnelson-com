import { UPDATE_DEVICE_TYPE, OPEN_NAVIGATION, CLOSE_NAVIGATION } from '../constants/actions'

export const openNavigation = () => ({
  type: OPEN_NAVIGATION
})

export const closeNavigation = () => ({
  type: CLOSE_NAVIGATION
})

export const updateDeviceType = (deviceType) => ({
  type: UPDATE_DEVICE_TYPE,
  payload: deviceType
})
