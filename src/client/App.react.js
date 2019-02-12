import PropTypes from 'prop-types';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { renderRoutes } from 'react-router-config';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

const defaultTitle = '';

const App = (props) => {
  const { route } = props;

  return (
    <>
      <Helmet defaultTitle={defaultTitle} />
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          {renderRoutes(route.routes)}
        </React.Fragment>
      </ThemeProvider>
    </>
  );
};

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  route: PropTypes.object.isRequired,
};

export default {
  component: App,
};
