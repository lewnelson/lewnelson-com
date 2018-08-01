import React, { Component } from 'react'
import { DemoComponent } from '.'
import { Bar } from 'react-finite-loader'
import './barDemo.scss'

export default class BarDemo extends Component {
  constructor (props) {
    super(props)
    this.state = { smooth: true }
  }

  render () {
    return (
      <div>
        <h3 className='middle'>Bar loader options</h3>
        <div className='inputs'>
          <div className='input-group' onClick={() => this.setState({ smooth: !this.state.smooth })}>
            <label>Smooth</label>
            <input
              type='checkbox'
              checked={this.state.smooth}
              readOnly
            />
          </div>
        </div>
        <Bar {...this.props} smooth={this.state.smooth} />
      </div>
    )
  }
}
