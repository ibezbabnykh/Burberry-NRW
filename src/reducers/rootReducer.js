import { combineReducers } from 'redux';

import { showReducer } from '../components/show';
import { episodeReducer } from '../components/episode';

const rootReducer = combineReducers({
  show: showReducer,
  episode: episodeReducer
});

export default rootReducer;