import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import nameReducer from './nameReducer';
import boardReducer from './boardReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  name: nameReducer,
  board: boardReducer
});

export default rootReducer;