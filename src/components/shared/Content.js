import React from 'react';
import { Context } from '../Provider';
import Loading from './Loading';

const Content = ({ children }) => (
  <Context.Consumer>
    {
      ({ coinList, prices, firstVisit }) => {
        if (!coinList) {
          return (
            <Loading message='Loading Coins'/>
          );
        }
        if (!firstVisit && !prices) {
          return (
            <Loading message='Loading Prices'/>
          );
        }
        return <div>{ children }</div>;
      }
    }
  </Context.Consumer>
);

export default Content;