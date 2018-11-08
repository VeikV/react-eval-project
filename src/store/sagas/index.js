import {getUserSaga} from './userSaga'
import {getEventsSaga} from './eventsSaga'
import {getReposSaga} from './reposSaga'
import {all, takeEvery} from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'

export default function * rootSaga () {
  yield all([
    takeEvery(actionTypes.GET_USER, getUserSaga),
    takeEvery(actionTypes.GET_EVENTS, getEventsSaga),
    takeEvery(actionTypes.GET_REPOS, getReposSaga)
  ])
}
