import axios from 'axios'
import {put} from 'redux-saga/effects'

import {getUserStart, setUser} from 'store/actions/userActions'

export function * getUserSaga () {
  yield put(getUserStart())
  try {
    const response = yield axios.get('json/user.json')
    yield put(setUser(response.data))
  } catch (error) {
    console.error('error')
  }
}
