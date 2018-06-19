import setup from './setup.dev'
import liveReload from './liveReload.dev'
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'

setup()
liveReload()
ReactDOM.render(<App />, document.getElementById('app'))
