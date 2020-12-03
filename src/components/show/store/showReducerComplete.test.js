import reducer from './showReducer';
import * as types from './types';

const initialState = {
  details: {
    data: null,
    error: null,
    loading: false
  },
  episodeList: {
    data: null,
    error: null,
    loading: false
  }
};

describe('show reducer', () => {
  describe('show details reducer', () => {
    it('should handle SHOW_DETAILS_REQUEST and return state', () => {
      const requestAction = {
        type: types.SHOW_DETAILS_REQUEST,
        payload: 1
      }

      const result = reducer(initialState, requestAction);
      expect(result).toMatchSnapshot();
    });

    it('should handle SHOW_DETAILS_SUCCESS and return state', () => {
      const mockResponse = {
        image: {
          medium: 'https://via.placeholder.com/250x140',
          original: 'https://via.placeholder.com/1280x720'
        },
        name: 'show name',
        summary: 'show summary'
      }
      const successAction = {
        type: types.SHOW_DETAILS_SUCCESS,
        payload: mockResponse
      }

      const result = reducer(initialState, successAction);
      expect(result).toMatchSnapshot();
    });

    it('should handle SHOW_DETAILS_FAILURE and return state', () => {
      const mockError = 'Something went wrong';
      const failureAction = {
        type: types.SHOW_DETAILS_FAILURE,
        payload: mockError
      }

      const result = reducer(initialState, failureAction);
      expect(result).toMatchSnapshot();
    });
  });

  describe('episode list reducer', () => {
    it('should handle SHOW_EPISODE_LIST_REQUEST and return state', () => {
      const requestAction = {
        type: types.SHOW_EPISODE_LIST_REQUEST,
        payload: 1
      }

      const result = reducer(initialState, requestAction);
      expect(result).toMatchSnapshot();
    });

    it('should handle SHOW_EPISODE_LIST_SUCCESS and return state', () => {
      const mockResponse = [
        {
          season: '1',
          values: [
            { id: 1, number: 1, season: 1, name: 'episode 1x1', airdate: '2016-04-11' },
            { id: 2, number: 2, season: 1, name: 'episode 1x2', airdate: '2016-04-15' }
          ]
        },
        {
          season: '2',
          values: [
            { id: 3, number: 1, season: 2, name: 'episode 2x1', airdate: '2017-04-11' },
            { id: 4, number: 2, season: 2, name: 'episode 2x2', airdate: '2017-04-15' }
          ]
        }
      ];
      const successAction = {
        type: types.SHOW_EPISODE_LIST_SUCCESS,
        payload: mockResponse
      }

      const result = reducer(initialState, successAction);
      expect(result).toMatchSnapshot();
    });

    it('should handle SHOW_EPISODE_LIST_FAILURE and return state', () => {
      const mockError = 'Something went wrong';
      const failureAction = {
        type: types.SHOW_EPISODE_LIST_FAILURE,
        payload: mockError
      }

      const result = reducer(initialState, failureAction);
      expect(result).toMatchSnapshot();
    });
  });
});