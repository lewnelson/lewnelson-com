import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addFeature } from '../actions/features'
import Modernizr from '../../.modernizrrc'

export class FeatureDetection extends Component {
  static propTypes = {
    addFeature: PropTypes.func.isRequired
  }

  componentDidMount () {
    Object.keys(Modernizr).forEach(feature => {
      this.props.addFeature(feature, Modernizr[feature])
    })
  }

  render () {
    return null
  }
}

const mapDispatchToProps = dispatch => ({
  addFeature: (feature, value) => dispatch(addFeature(feature, value))
})

export default connect(null, mapDispatchToProps)(FeatureDetection)
