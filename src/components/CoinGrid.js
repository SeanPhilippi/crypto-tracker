import React from 'react';
import styled from 'styled-components';
import { Context } from './Provider';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const CoinGrid = () => (
  <Context.Consumer>
    {
      ({ coinList }) => (
        <CoinGridStyled>
          { Object.keys(coinList).map(coinKey => (
            <div>
              { coinKey }
            </div>
          )) }
        </CoinGridStyled>
      )
    }
  </Context.Consumer>
);

export default CoinGrid;