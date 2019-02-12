import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import { routeConfig } from './routeConfig';
import { configureStore } from '../store';

const {
  history,
  store,
} = configureStore();

const rootNode = document.getElementById('root');
if (rootNode == null) {
  throw new Error('No root element to render App.');
}

ReactDOM.hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        {renderRoutes(routeConfig)}
      </div>
    </ConnectedRouter>
  </Provider>,
  rootNode,
);
