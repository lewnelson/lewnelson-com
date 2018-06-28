import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './typeWriter.scss'

export default class TypeWriter extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    el: PropTypes.string.isRequired,
    keepCursor: PropTypes.bool,
    startingIndex: PropTypes.number,
    complete: PropTypes.bool,
    onComplete: PropTypes.func,
    completionDelay: PropTypes.number
  }

  static defaultProps = {
    startingIndex: 0,
    complete: false,
    onComplete: () => {},
    completionDelay: 0,
    keepCursor: false
  }

  constructor (props) {
    super(props)
    this.state = { index: props.startingIndex, complete: this.props.complete }
  }

  getCurrentText () {
    const { text, complete } = this.props
    const { index } = this.state
    if (complete) return text
    return text.length - 1 >= index
      ? text.substr(0, index)
      : text
  }

  onComplete () {
    setTimeout(() => {
      if (!this._isMounted) return
      this.props.onComplete()
      this.setState({ complete: true })
    }, this.props.completionDelay)
  }

  incrementIndex (triggerOnComplete = true) {
    if ((this.state.index >= this.props.text.length || this.state.complete) && triggerOnComplete) {
      return this.onComplete()
    }
    setTimeout(() => {
      if (!this._isMounted) return
      this.setState({ index: this.state.index + 1 })
      this.incrementIndex(triggerOnComplete)
    }, Math.round(Math.random() * 150) + 30)
  }

  componentDidMount () {
    this._isMounted = true
    this.incrementIndex(!this.props.complete)
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  render () {
    const text = this.getCurrentText()
    const { el } = this.props
    const container = { el }
    return (
      <container.el className='type-writer'>
        {text}{(!this.state.complete || this.props.keepCursor) && <span className='blinking-cursor' />}
      </container.el>
    )
  }
}
