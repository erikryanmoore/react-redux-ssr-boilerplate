import * as React from 'react';

import { scrollTop } from '../../hoc/scrollTop';

const NotFound = () => (
  <h1>
    Not Found
  </h1>
);

export default {
  component: scrollTop(NotFound),
};
