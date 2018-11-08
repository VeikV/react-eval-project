import axios from 'axios'
import {put} from 'redux-saga/effects'

import {getReposStart, setRepos} from 'store/actions/reposActions'

export function * getReposSaga () {
  yield put(getReposStart())
  try {
    const response = yield axios.get('json/repos.json')
    yield put(setRepos(response.data))
  } catch (error) {
    console.error('error')
  }
}
