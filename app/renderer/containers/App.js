import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

export default class App extends React.Component {
  render () {
    const { children } = this.props;
    return (
      <Suspense fallback={<Spinner />}>
        <React.Fragment>{children}</React.Fragment>
      </Suspense>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};