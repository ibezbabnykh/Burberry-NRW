import { combineReducers } from 'redux';

import * as types from './types';

const initialDetailsState = {
  data: null,
  error: null,
  loading: false
};

const initialEpisodeListState = {
  data: null,
  error: null,
  loading: false
};

const detailsReducer = (state = initialDetailsState, action) => {
  switch (action.type) {
    case types.SHOW_DETAILS_REQUEST:
      return {
        data: null,
        error: null,
        loading: true
      }

    case types.SHOW_DETAILS_SUCCESS:
      return {
        data: action.payload,
        error: null,
        loading: false
      }

    case types.SHOW_DETAILS_FAILURE:
      return {
        data: null,
        error: action.payload,
        loading: false
      }

    default:
      return state;
  }
}

const episodeListReducer = (state = initialEpisodeListState, action) => {
  switch (action.type) {
    case types.SHOW_EPISODE_LIST_REQUEST:
      return {
        data: null,
        error: null,
        loading: true
      }

    case types.SHOW_EPISODE_LIST_SUCCESS:
      return {
        data: action.payload,
        error: null,
        loading: false
      }

    case types.SHOW_EPISODE_LIST_FAILURE:
      return {
        data: null,
        error: action.payload,
        loading: false
      }

    default:
      return state;
  }
}

export default combineReducers({
  details: detailsReducer,
  episodeList: episodeListReducer
});