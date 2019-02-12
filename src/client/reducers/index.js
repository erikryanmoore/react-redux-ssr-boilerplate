import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

export const rootReducer = history => combineReducers({
  router: connectRouter(history),
});
