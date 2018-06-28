import { LOCATION_CHANGE } from 'connected-react-router'
import { closeNavigation } from '../actions/device'

export default function navigationMiddleware ({ getState, dispatch }) {
  return next => action => {
    if (action.type === LOCATION_CHANGE && getState().device.open) dispatch(closeNavigation())
    return next(action)
  }
}
