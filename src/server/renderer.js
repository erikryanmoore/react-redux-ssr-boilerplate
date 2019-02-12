import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import {
  ServerStyleSheet,
  StyleSheetManager,
} from 'styled-components';
import serialize from 'serialize-javascript';

import { routeConfig } from '../client/routeConfig';

export const renderer = (path, store, context) => {
  const sheet = new ServerStyleSheet();
  const helmet = Helmet.renderStatic();
  const content = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <Provider store={store}>
        <StaticRouter
          location={path}
          context={context}
        >
          <div>
            {renderRoutes(routeConfig)}
          </div>
        </StaticRouter>
      </Provider>
    </StyleSheetManager>
  );

  const styleTags = sheet.getStyleTags();

  return `
  <html lang="en" ${helmet.htmlAttributes.toString()}>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      ${styleTags}
    </head>
    <body>
      <div id="root">${content}</div>
      <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
      <script src="/index.bundle.js"></script>
      <script src="/vendors.bundle.js"></script>
    </body>
  </html>
  `;
};
