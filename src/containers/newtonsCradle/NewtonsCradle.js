import React, { Component } from 'react'
import * as Matter from 'matter-js'

export default class NewtonsCradle extends Component {
  componentDidMount () {
    this._isMounted = true
    this.setupAndRender()
  }

  componentWillUmount () {
    this._isMounted = false
  }

  setupAndRender () {
    // create an engine
    const engine = Matter.Engine.create()

    // create a renderer
    const render = Matter.Render.create({
      element: this.ref,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        hasBounds: true,
        wireframes: false,
        background: '#dddddd'
      }
    })

    Matter.World.add(engine.world, this.getNewtonsCradle())

    // add mouse control
    const mouse = Matter.Mouse.create(render.canvas)
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    })

    Matter.World.add(engine.world, mouseConstraint)

    // keep the mouse in sync with rendering
    render.mouse = mouse

    // run the engine
    Matter.Engine.run(engine)

    // run the renderer
    Matter.Render.run(render)
    console.log(Matter, render, engine)
  }

  render () {
    return (
      <div ref={el => (this.ref = el)} />
    )
  }
}
