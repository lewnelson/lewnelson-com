import React, { Component } from 'react'
import { DemoComponent } from '.'
import { Grid } from 'react-finite-loader'
import Slider from 'rc-slider'
import './gridDemo.scss'

const patterns = [
  'horizontal',
  'horizontalAlt',
  'vertical',
  'verticalAlt',
  'spiral'
]

export default class GridDemo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gridSize: 6,
      smooth: true,
      rounded: false,
      spacing: 0,
      pattern: 0,
      spin: false,
      reverseSpin: false,
      reverse: false
    }
  }

  render () {
    return (
      <div>
        <h3 className='middle'>Grid loader options</h3>
        <div className='inputs'>
          <div className='input-group'>
            <label>Grid size</label>
            <Slider
              value={this.state.gridSize}
              min={2}
              max={16}
              step={1}
              onChange={(val) => this.setState({ gridSize: val })}
            />
            <p className='value'>{this.state.gridSize}</p>
          </div>
          <div className='input-group' onClick={() => this.setState({ smooth: !this.state.smooth })}>
            <label>Smooth</label>
            <input
              type='checkbox'
              checked={this.state.smooth}
              readOnly
            />
          </div>
          <div className='input-group' onClick={() => this.setState({ rounded: !this.state.rounded })}>
            <label>Rounded</label>
            <input
              type='checkbox'
              checked={this.state.rounded}
              readOnly
            />
          </div>
          <div className='input-group'>
            <label>Block spacing (px)</label>
            <Slider
              value={this.state.spacing}
              min={0}
              max={6}
              step={1}
              onChange={(val) => this.setState({ spacing: val })}
            />
            <p className='value'>{this.state.spacing} px</p>
          </div>
          <div className='input-group'>
            <label>Pattern</label>
            <select
              onChange={(e) => this.setState({ pattern: e.target.value })}
              value={this.state.pattern}
            >
              {
                patterns.map((pattern, index) => (
                  <option
                    key={pattern}
                    value={index}
                  >
                    {pattern}
                  </option>
                ))
              }
            </select>
          </div>
          <div className='input-group' onClick={() => this.setState({ spin: !this.state.spin })}>
            <label>Spin</label>
            <input
              type='checkbox'
              checked={this.state.spin}
              readOnly
            />
          </div>
          <div className='input-group' onClick={() => this.setState({ reverseSpin: !this.state.reverseSpin })}>
            <label>Reverse spin</label>
            <input
              type='checkbox'
              checked={this.state.reverseSpin}
              readOnly
            />
          </div>
          <div className='input-group' onClick={() => this.setState({ reverse: !this.state.reverse })}>
            <label>Reverse</label>
            <input
              type='checkbox'
              checked={this.state.reverse}
              readOnly
            />
          </div>
        </div>
        <div className='grid-loader-container'>
          <Grid
            {...this.props}
            gridSize={this.state.gridSize}
            smooth={this.state.smooth}
            rounded={this.state.rounded}
            spacing={`${this.state.spacing}px`}
            pattern={patterns[this.state.pattern] || patterns[0]}
            spin={this.state.spin}
            reverseSpin={this.state.reverseSpin}
            reverse={this.state.reverse}
          />
        </div>
      </div>
    )
  }
}
