import { all, fork, call, put, takeLatest } from 'redux-saga/effects';

import { URLS, fetchData } from 'api';
import * as types from './types';
import * as actions from './actions';

export function* getShowData(action) {
  try {
    const data = yield call(fetchData, `${URLS.shows}/${action.payload}`);
    yield put(actions.loadShowDetailsSuccess(data));
  } catch (e) {
    yield put(actions.loadShowDetailsFailure(e.message))
  }
}

export function* getEpisodeListData(action) {
  try {
    const data = yield call(fetchData, `${URLS.shows}/${action.payload}/episodes`);
    yield put(actions.loadEpisodeListSuccess(data));
  } catch (e) {
    yield put(actions.loadEpisodeListFailure(e.message))
  }
}

export function* fetchShow() {
  yield takeLatest(types.SHOW_DETAILS_REQUEST, getShowData);
}

export function* fetchEpisodeList() {
  yield takeLatest(types.SHOW_EPISODE_LIST_REQUEST, getEpisodeListData);
}

export default function* showSaga() {
  yield all([
    fork(fetchShow),
    fork(fetchEpisodeList)
  ])
}