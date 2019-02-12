import * as React from 'react';

export const scrollTop = Component => (
  class extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
      return <Component {...this.props} />;
    }
  }
);
