import { combineReducers } from 'redux'
import device from './device'
import home from './home'
import navigation from './navigation'

export default combineReducers({
  device,
  home,
  navigation
})
