import React from 'react';
import { Context } from '../components/Provider';

const Content = ({ children }) => (
  <Context.Consumer>
    {
      ({ coinList, prices, firstVisit }) => {
        if (!coinList) {
          return <div>Loading Coins</div>;
        }
        if (!firstVisit && !prices) {
          return <div>Loading Prices</div>;
        }
        return <div>{ children }</div>;
      }
    }
  </Context.Consumer>
);

export default Content;