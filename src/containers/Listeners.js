import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateDeviceType } from '../actions/device'
import { getDeviceType } from '../helpers/device'

export class Listeners extends Component {
  static propTypes = {
    updateDeviceType: PropTypes.func.isRequired,
    deviceType: PropTypes.number.isRequired
  }

  onResize = () => {
    const deviceType = getDeviceType(window.innerWidth)
    if (deviceType !== this.props.deviceType) this.props.updateDeviceType(deviceType)
  }

  componentDidMount () {
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
  deviceType: state.device.type,
  navigationOpen: state.device.open
})

export const mapDispatchToProps = (dispatch) => ({
  updateDeviceType: (deviceType) => dispatch(updateDeviceType(deviceType))
})

export default connect(mapStateToProps, mapDispatchToProps)(Listeners)
