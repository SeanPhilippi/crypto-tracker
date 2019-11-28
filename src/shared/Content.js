import React from 'react';
import { Context } from '../components/Provider';

const Content = ({ children }) => (
  <Context.Consumer>
    {
      ({ coinList }) => !coinList
        ? <div>Loading Coins</div>
        : <div>{ children }</div>
    }
  </Context.Consumer>
);

export default Content;