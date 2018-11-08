import {SET_REPOS} from 'store/actions/actionTypes'

const initialState = []

export default function repos (state = initialState, action) {
  switch (action.type) {
    case SET_REPOS:
      return action.data
    default:
      return state
  }
}
