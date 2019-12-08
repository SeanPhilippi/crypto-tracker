import React from 'react';
import { Context } from '../Provider';

const Page = ({ name, children }) => (
  <Context.Consumer>
    {
      ({ page }) => page !== name ? null : <div>{ children }</div>
    }
  </Context.Consumer>
);

export default Page;