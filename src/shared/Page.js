import React from 'react';
import { Context } from '../components/Provider';

const Page = ({ name, children }) => (
  <Context.Consumer>
    {
      ({ page }) => page !== name ? null : <div>{ children }</div>
    }
  </Context.Consumer>
);

export default Page;