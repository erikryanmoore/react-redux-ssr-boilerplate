import bodyParser from 'body-parser';
import express from 'express';
import { matchRoutes } from 'react-router-config';

import { routeConfig } from '../client/routeConfig';
import { renderer } from './renderer';
import { configureStore } from '../store';

const app = express();
const PORT = process.env.PORT || 3000;

const buildFolder = (process.env.NODE_ENV === 'development' ? 'build' : 'dist');
app.use(express.static(`${buildFolder}/client`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  const { path } = req;

  const { store } = configureStore(path);

  const promises = matchRoutes(routeConfig, path)
    .map(({ route }) => (
      route.loadData ? route.loadData(store) : null
    ))
    .map(promise => (
      promise
        ? new Promise(resolve => promise.then(resolve).catch(resolve))
        : null
    ));

  Promise.all(promises).then(() => {
    const context = {};
    const {
      notFound,
      url,
    } = context;
    const content = renderer(path, store, context);

    if (url) {
      return res.redirect(301, context.url);
    }
    if (notFound) {
      res.status(404);
    }
    return res.send(content);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
