import { takeLatest } from 'redux-saga/effects';
import { fetchEpisode, getEpisodeData } from './saga';

describe('episode Saga', () => {
  it('should dispatch action "EPISODE/EPISODE_DETAILS_REQUEST" ', () => {
    const generator = fetchEpisode();
    expect(generator.next().value)
      .toEqual(takeLatest('EPISODE/EPISODE_DETAILS_REQUEST', getEpisodeData));
    expect(generator.next().done).toBeTruthy();
  });
});