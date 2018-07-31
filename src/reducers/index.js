import { combineReducers } from 'redux'
import device from './device'
import home from './home'
import navigation from './navigation'
import projects from './projects'

export default combineReducers({
  device,
  home,
  navigation,
  projects
})
