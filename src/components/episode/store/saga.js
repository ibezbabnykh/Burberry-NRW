import { all, fork, call, put, takeLatest } from 'redux-saga/effects';

import { URLS, fetchData } from 'api';
import * as types from './types';
import * as actions from './actions';

export function* getEpisodeData(action) {
  try {
    const data = yield call(fetchData, `${URLS.episodes}/${action.payload}`);
    yield put(actions.loadEpisodeDetailsSuccess(data));
  } catch (e) {
    yield put(actions.loadEpisodeDetailsFailure(e.message))
  }
}

export function* fetchEpisode() {
  yield takeLatest(types.EPISODE_DETAILS_REQUEST, getEpisodeData);
}

export default function* showEpisode() {
  yield all([
    fork(fetchEpisode)
  ])
}