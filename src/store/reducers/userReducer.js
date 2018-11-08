import {SET_USER} from 'store/actions/actionTypes'

const initialState = {}

export default function users (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.data
    default:
      return state
  }
}
