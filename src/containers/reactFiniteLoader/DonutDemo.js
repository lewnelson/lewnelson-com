import React, { Component } from 'react'
import { DemoComponent } from '.'
import { Donut } from 'react-finite-loader'
import Slider from 'rc-slider'
import './donutDemo.scss'

export default class DonutDemo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      labelAsPercentage: true,
      thickness: 0.1,
      lightLabel: false
    }
  }

  render () {
    const classes = [ 'donut-demo-loader-ui' ]
    if (this.state.lightLabel) classes.push('light-label')
    return (
      <div className={classes.join(' ')}>
        <h3 className='middle'>Donut loader options</h3>
        <div className='inputs'>
          <div className='input-group' onClick={() => this.setState({ labelAsPercentage: !this.state.labelAsPercentage })}>
            <label>Show label as percentage</label>
            <input
              type='checkbox'
              checked={this.state.labelAsPercentage}
              readOnly
            />
          </div>
          <div className='input-group' onClick={() => this.setState({ lightLabel: !this.state.lightLabel })}>
            <label>Light label</label>
            <input
              type='checkbox'
              checked={this.state.lightLabel}
              readOnly
            />
          </div>
          <div className='input-group'>
            <label>Thickness</label>
            <Slider
              value={this.state.thickness}
              min={0.01}
              max={1}
              step={0.01}
              onChange={(val) => this.setState({ thickness: val })}
            />
            <p className='value'>{Math.round(this.state.thickness * 100)} %</p>
          </div>
        </div>
        <Donut
          {...this.props}
          labelAsPercentage={this.state.labelAsPercentage}
          thickness={this.state.thickness}
          style={{
            labelFontSize: !this.state.labelAsPercentage && '0.1em'
          }}
        />
      </div>
    )
  }
}
