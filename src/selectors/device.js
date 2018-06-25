import { TYPES } from '../constants/device'

export const isExtraSmall = (state) => state.device.type <= TYPES.EXTRA_SMALL
export const isSmall = (state) => state.device.type <= TYPES.SMALL
export const isMedium = (state) => state.device.type <= TYPES.MEDIUM
export const isLarge = (state) => state.device.type <= TYPES.LARGE
