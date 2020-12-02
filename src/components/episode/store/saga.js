import { all, fork, call, put, takeLatest } from 'redux-saga/effects';

import { fetchData } from '../../../api';
import * as types from './types';
import * as actions from './actions';

import { URLS } from '../../../api';

function* getEpisodeData(action) {
  try {
    const data = yield call(fetchData, `${URLS.episodes}/${action.payload}`);
    yield put(actions.loadEpisodeDetailsSuccess(data));
  } catch (e) {
    yield put(actions.loadEpisodeDetailsFailure(e.message))
  }
}

function* fetchEpisode() {
  yield takeLatest(types.EPISODE_DETAILS_REQUEST, getEpisodeData);
}

export function* showEpisode() {
  yield all([
    fork(fetchEpisode)
  ])
}