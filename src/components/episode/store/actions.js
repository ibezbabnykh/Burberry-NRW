import * as types from './types';

export const loadEpisodeDetails = (id) => ({
  type: types.EPISODE_DETAILS_REQUEST,
  payload: id
});

export const loadEpisodeDetailsSuccess = (details) => ({
  type: types.EPISODE_DETAILS_SUCCESS,
  payload: details
});

export const loadEpisodeDetailsFailure = (error) => ({
  type: types.EPISODE_DETAILS_FAILURE,
  payload: error
});