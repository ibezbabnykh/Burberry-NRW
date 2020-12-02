import * as types from './types';

const initialState = {
  data: null,
  error: null,
  loading: false
};

const episodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EPISODE_DETAILS_REQUEST:
      return {
        data: null,
        error: null,
        loading: true
      }

    case types.EPISODE_DETAILS_SUCCESS:
      return {
        data: action.payload,
        error: null,
        loading: false
      }

    case types.EPISODE_DETAILS_FAILURE:
      return {
        data: null,
        error: action.payload,
        loading: false
      }

    default:
      return state;
  }
}

export default episodeReducer;