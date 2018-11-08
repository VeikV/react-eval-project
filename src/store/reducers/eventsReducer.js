import {SET_EVENTS} from 'store/actions/actionTypes'

const initialState = []

export default function events (state = initialState, action) {
  switch (action.type) {
    case SET_EVENTS:
      return action.data
    default:
      return state
  }
}
