import { routerMiddleware } from 'connected-react-router';
import {
  createBrowserHistory,
  createMemoryHistory,
} from 'history';
import {
  compose,
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { rootReducer } from '../client/reducers';

const isServer = !(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
);

export const configureStore = (url = '/') => {
  const history = isServer
    ? createMemoryHistory({
      initialEntries: [url],
    })
    : createBrowserHistory();

  const devMiddleware = (process.env.NODE_ENV === 'development' ? [logger] : []);

  const enhancers = [];
  const middleware = [
    thunk,
    routerMiddleware(history),
    ...devMiddleware,
  ];

  const composer = (
    typeof window === 'object'
    && process.env.NODE_ENV === 'development'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-underscore-dangle
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-underscore-dangle
      : compose
  );

  const composedEnhancers = composer(
    applyMiddleware(...middleware),
    ...enhancers,
  );

  const initialState = !isServer ? window.INITIAL_STATE : {};

  if (!isServer) {
    delete window.INITIAL_STATE;
  }

  const store = createStore(
    rootReducer(history),
    initialState,
    composedEnhancers,
  );

  return {
    store,
    history,
  };
};
