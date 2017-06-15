import {GET_RANDOM_MAKEUP, GET_RANDOM_COLOR} from './actions'

const DEFAULT_STATE = {
  makeupData: {},
  color: {}
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_RANDOM_MAKEUP:
      debugger;
      return Object.assign({}, state, {makeupData: action.makeupData})
    case GET_RANDOM_COLOR:
      debugger;
      return Object.assign({}, state, {color: action.payload})
    default:
      debugger;
      return state
  }
}

export default rootReducer
