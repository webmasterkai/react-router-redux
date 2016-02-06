export syncHistoryWithStore from './sync'
export { LOCATION_CHANGE, createRoutingReducer } from './reducer'

export {
  CALL_HISTORY_METHOD,
  push, replace, go, goBack, goForward,
  routeActions
} from './actions'
export routerMiddleware from './middleware'

export { getInitState } from './utils'
