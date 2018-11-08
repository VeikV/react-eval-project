import axios from 'axios'
import {put} from 'redux-saga/effects'

import {getEventsStart, setEvents} from 'store/actions/eventsActions'

export function * getEventsSaga () {
  yield put(getEventsStart())
  try {
    const response = yield axios.get('json/events.json')
    yield put(setEvents(response.data))
  } catch (error) {
    console.error('error')
  }
}
