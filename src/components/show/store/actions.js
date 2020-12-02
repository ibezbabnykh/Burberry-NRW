import * as types from './types';

export const loadShowDetails = (id) => ({
  type: types.SHOW_DETAILS_REQUEST,
  payload: id
});

export const loadShowDetailsSuccess = (details) => ({
  type: types.SHOW_DETAILS_SUCCESS,
  payload: details
});

export const loadShowDetailsFailure = (error) => ({
  type: types.SHOW_DETAILS_FAILURE,
  payload: error
});

export const loadEpisodeList = (id) => ({
  type: types.SHOW_EPISODE_LIST_REQUEST,
  payload: id
});

export const loadEpisodeListSuccess = (list) => ({
  type: types.SHOW_EPISODE_LIST_SUCCESS,
  payload: list
});

export const loadEpisodeListFailure = (error) => ({
  type: types.SHOW_EPISODE_LIST_FAILURE,
  payload: error
});