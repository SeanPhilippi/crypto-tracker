import React from 'react';
import { Context } from './Provider';

const Welcome = () => (
  <Context.Consumer>
    {
      ({ firstVisit }) => firstVisit ? (
        <div>
          Welcome to CryptoTracker, please select your favorite coins to begin.
        </div>
      ) : null
    }
  </Context.Consumer>
);

export default Welcome;