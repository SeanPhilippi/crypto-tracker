import React from 'react';
import { Context } from './Provider';

const Welcome = () => (
  <Context.Consumer>
    {({ firstVisit }) =>
      firstVisit ? (
        <h3>
          Welcome to CryptoTracker, please select your favorite coins to begin.
        </h3>
      ) : null
    }
  </Context.Consumer>
);

export default Welcome;
