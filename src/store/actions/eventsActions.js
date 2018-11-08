import * as actionTypes from './actionTypes'

export const getEvents = () => ({
  type: actionTypes.GET_EVENTS
})

export const getEventsStart = () => ({
  type: actionTypes.GET_EVENTS_START
})

export const setEvents = data => ({
  type: actionTypes.SET_EVENTS,
  data
})
