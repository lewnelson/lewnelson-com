import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateDeviceType } from '../actions/device'
import { getDeviceType } from '../helpers/device'
import { CLASSES } from '../constants/device'

export class Listeners extends Component {
  static propTypes = {
    updateDeviceType: PropTypes.func.isRequired,
    deviceType: PropTypes.number.isRequired
  }

  getBodyClasses (deviceType) {
    // const classes = CLASSES.slice(0, deviceType + 1)
    // classes.reverse()
    return [ CLASSES[deviceType] ]
  }

  setBodyClasses (oldDeviceType = null, newDeviceType) {
    if (oldDeviceType !== null) {
      this.getBodyClasses(oldDeviceType).forEach(className => {
        window.document.body.classList.remove(className)
      })
    }

    this.getBodyClasses(newDeviceType).forEach(className => {
      window.document.body.classList.add(className)
    })
  }

  onResize = () => {
    const deviceType = getDeviceType(window.innerWidth)
    if (deviceType !== this.props.deviceType) {
      this.setBodyClasses(this.props.deviceType, deviceType)
      this.props.updateDeviceType(deviceType)
    }
  }

  componentDidMount () {
    this.setBodyClasses(null, this.props.deviceType)
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize)
  }

  render () {
    return null
  }
}

export const mapStateToProps = (state) => ({
  deviceType: state.device.type
})

export const mapDispatchToProps = (dispatch) => ({
  updateDeviceType: (deviceType) => dispatch(updateDeviceType(deviceType))
})

export default connect(mapStateToProps, mapDispatchToProps)(Listeners)
