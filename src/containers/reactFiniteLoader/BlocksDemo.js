import React, { Component } from 'react'
import { Blocks } from 'react-finite-loader'
import Slider from 'rc-slider'
import './blocksDemo.scss'

export default class BlocksDemo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      smooth: true,
      rounded: false,
      segments: 20,
      spacing: 2
    }
  }

  render () {
    return (
      <div>
        <h3 className='middle'>Block loader options</h3>
        <div className='inputs'>
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
            <label>Segments count</label>
            <Slider
              value={this.state.segments}
              min={5}
              max={30}
              step={1}
              onChange={(val) => this.setState({ segments: val })}
            />
            <p className='value'>{this.state.segments}</p>
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
        </div>
        <Blocks
          {...this.props}
          smooth={this.state.smooth}
          rounded={this.state.rounded}
          segments={this.state.segments}
          spacing={`${this.state.spacing}px`}
        />
      </div>
    )
  }
}
