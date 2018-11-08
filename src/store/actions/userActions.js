import * as actionTypes from './actionTypes'

export const getUser = () => ({
  type: actionTypes.GET_USER
})

export const getUserStart = () => ({
  type: actionTypes.GET_USER_START
})

export const setUser = data => ({
  type: actionTypes.SET_USER,
  data
})
