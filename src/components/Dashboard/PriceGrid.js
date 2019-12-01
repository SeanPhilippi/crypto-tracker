import React from 'react';
import styled from 'styled-components';
import { Context } from '../Provider';

const PriceGridStyled = styled.div`
  display: grid;
`;

const PriceGrid = () => (
  <Context.Consumer>
    {
      ({ prices }) => (
        <PriceGridStyled>
          {
            prices.map(price => <div>{ Object.keys(price)[0] }</div>)
          }
        </PriceGridStyled>
      )
    }
  </Context.Consumer>
);

export default PriceGrid;