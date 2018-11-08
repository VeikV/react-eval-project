import * as actionTypes from './actionTypes'

export const getRepos = () => ({
  type: actionTypes.GET_REPOS
})

export const getReposStart = () => ({
  type: actionTypes.GET_REPOS_START
})

export const setRepos = data => ({
  type: actionTypes.SET_REPOS,
  data
})
