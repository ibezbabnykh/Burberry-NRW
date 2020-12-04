import { takeLatest } from 'redux-saga/effects';
import { fetchShow, fetchEpisodeList, getShowData, getEpisodeListData } from './saga';

describe('show Saga', () => {
  it('should dispatch action "SHOW/SHOW_DETAILS_REQUEST" ', () => {
    const generator = fetchShow();
    expect(generator.next().value)
      .toEqual(takeLatest('SHOW/SHOW_DETAILS_REQUEST', getShowData));
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "SHOW/SHOW_EPISODE_LIST_REQUEST" ', () => {
    const generator = fetchEpisodeList();
    expect(generator.next().value)
      .toEqual(takeLatest('SHOW/SHOW_EPISODE_LIST_REQUEST', getEpisodeListData));
    expect(generator.next().done).toBeTruthy();
  });
});