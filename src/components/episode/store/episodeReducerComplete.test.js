import reducer from './episodeReducer';
import * as types from './types';

const initialState = {
  data: null,
  error: null,
  loading: false
};

const mockResponse = {
  image: {
    medium: 'https://via.placeholder.com/250x140',
    original: 'https://via.placeholder.com/1280x720'
  },
  name: 'episode name',
  summary: 'episode summary'
}

const mockError = 'Something went wrong';

describe('episode reducer', () => {
  it('should handle EPISODE_DETAILS_REQUEST and return state', () => {
    const requestAction = {
      type: types.EPISODE_DETAILS_REQUEST,
      payload: 1
    }

    const result = reducer(initialState, requestAction);
    expect(result).toMatchSnapshot();
  });

  it('should handle EPISODE_DETAILS_SUCCESS and return state', () => {
    const successAction = {
      type: types.EPISODE_DETAILS_SUCCESS,
      payload: mockResponse
    }

    const result = reducer(initialState, successAction);
    expect(result).toMatchSnapshot();
  });

  it('should handle EPISODE_DETAILS_FAILURE and return state', () => {
    const failureAction = {
      type: types.EPISODE_DETAILS_FAILURE,
      payload: mockError
    }

    const result = reducer(initialState, failureAction);
    expect(result).toMatchSnapshot();
  });
});