/**
 * This action type will be dispatched when your history
 * receives a location change.
 */
export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE'

export function createRoutingReducer(history) {
  const initialState = {}
  // #6, #193, #207, a00acfd
  history.listen(loc => initialState.locationBeforeTransitions = loc)()

  /**
   * This reducer will update the state with the most recent location history
   * has transitioned to. This may not be in sync with the router, particularly
   * if you have asynchronously-loaded routes, so reading from and relying on
   * this state it is discouraged.
   */
  return function routingReducer(state = initialState, { type, payload }) {
    if (type === LOCATION_CHANGE) {
      return { ...state, locationBeforeTransitions: payload }
    }
    return state
  }
}
