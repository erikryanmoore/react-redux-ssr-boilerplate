import * as React from 'react';

import { scrollTop } from '../../hoc/scrollTop';

const Home = () => (
  <h1>
    Home Page
  </h1>
);

export default {
  component: scrollTop(Home),
};
