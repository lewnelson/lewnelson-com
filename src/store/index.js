import { createStore, applyMiddleware } from 'redux'
import { thunk } from '../middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import { isDev } from '../helpers'
import reducers from '../reducers'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()
const middleware = [ thunk ]
let appliedMiddleware = applyMiddleware(routerMiddleware(history), ...middleware)
if (isDev()) appliedMiddleware = composeWithDevTools(appliedMiddleware)

export const store = createStore(connectRouter(history)(reducers), appliedMiddleware)
