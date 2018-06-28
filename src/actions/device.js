import { UPDATE_DEVICE_TYPE } from '../constants/actions'

export const updateDeviceType = (deviceType) => ({
  type: UPDATE_DEVICE_TYPE,
  payload: deviceType
})
