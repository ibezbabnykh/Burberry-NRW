import { all, fork } from 'redux-saga/effects';

import showSaga from 'components/show/store/saga';
import showEpisode from 'components/episode/store/saga';

export function* rootSaga() {
    yield all([
        fork(showSaga),
        fork(showEpisode)
    ])
}

export default rootSaga;