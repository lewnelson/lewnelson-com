import React, { Component } from 'react'
import {
  ReactFiniteLoader
} from 'react-finite-loader'
import BarDemo from './BarDemo'
import BlocksDemo from './BlocksDemo'
import DonutDemo from './DonutDemo'
import GridDemo from './GridDemo'
import Slider from 'rc-slider'
import { SourceCodeLink } from '../../components'
import './reactFiniteLoaderComponent.scss'
import 'rc-slider/assets/index.css'

const demoComponents = [
  {
    component: BarDemo,
    title: 'Bar'
  },
  {
    component: BlocksDemo,
    title: 'Blocks'
  },
  {
    component: DonutDemo,
    title: 'Donut'
  },
  {
    component: GridDemo,
    title: 'Grid'
  }
]

export class ReactFiniteLoaderContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0,
      demoComponent: 0,
      loop: true,
      random: false,
      inProgress: true,
      transitionTime: 40,
      increment: 0.8
    }
  }

  getDemoComponent () {
    return demoComponents[this.state.demoComponent] || demoComponents[0]
  }

  componentDidMount () {
    this.start()
  }

  incrementValue () {
    setTimeout(() => {
      if (!this.state.inProgress) return
      if (this.state.value >= 100) {
        if (!this.state.loop) return
        this.setState({ value: 0 })
        return this.incrementValue()
      }

      const value = this.state.value + (this.state.random ? this.getRand(1, 12) : this.state.increment)
      if (value >= 100) {
        this.setState({ value: 100 })
        this.incrementValue()
      } else {
        this.setState({ value })
        this.incrementValue()
      }
    }, this.state.random ? this.getRand(600, 1800) : this.state.transitionTime)
  }

  getRand (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  start = () => {
    this.setState({ inProgress: true })
    this.incrementValue()
  }

  stop = () => {
    this.setState({ inProgress: false })
  }

  reset = () => {
    this.setState({ value: 0 })
  }

  render () {
    const { component: DemoComponent } = this.getDemoComponent()
    return (
      <div className='react-finite-loader-container'>
        <h3 className='middle'>Global options</h3>
        <div className='inputs'>
          <div className='input-group'>
            <label>Loader type</label>
            <select
              onChange={(e) => this.setState({ demoComponent: e.target.value })}
              value={this.state.demoComponent}
            >
              {
                demoComponents.map((demoComponent, index) => (
                  <option
                    key={demoComponent.title}
                    value={index}
                  >
                    {demoComponent.title}
                  </option>
                ))
              }
            </select>
          </div>
          <div className='input-group' onClick={() => this.setState({ loop: !this.state.loop })}>
            <label>Loop</label>
            <input
              type='checkbox'
              checked={this.state.loop}
              readOnly
            />
          </div>
          <div className='input-group' onClick={() => this.setState({ random: !this.state.random })}>
            <label>Random</label>
            <input
              type='checkbox'
              checked={this.state.random}
              readOnly
            />
          </div>
          <div className='input-group'>
            <label>Transition time (ms)</label>
            <Slider
              value={this.state.transitionTime}
              min={30}
              max={400}
              step={10}
              onChange={(val) => this.setState({ transitionTime: val })}
            />
            <p className='value'>{this.state.transitionTime} ms</p>
          </div>
          <div className='input-group'>
            <label>Increment (%)</label>
            <Slider
              value={this.state.increment}
              min={0.1}
              max={2}
              step={0.1}
              onChange={(val) => this.setState({ increment: val })}
            />
            <p className='value'>{this.state.increment} %</p>
          </div>
        </div>
        <ReactFiniteLoader value={this.state.value}>
          <DemoComponent transitionTime={this.state.transitionTime} />
        </ReactFiniteLoader>
        <SourceCodeLink
          link='https://github.com/lewnelson/react-finite-loader'
          title='React finite loader'
        />
        <div className='actions'>
          <div className='button-container'>
            <button
              className='primary'
              onClick={() => this.start()}
            >
              start
            </button>
          </div>
          <div className='button-container'>
            <button
              className='primary'
              onClick={() => this.stop()}
            >
              stop
            </button>
          </div>
          <div className='button-container'>
            <button
              className='primary'
              onClick={() => this.reset()}
            >
              reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
