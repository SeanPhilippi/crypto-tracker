import React from 'react';
import styled from 'styled-components';
import { Context } from './Provider';
import { SelectableTile } from '../shared/Tile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;

const CoinGrid = () => (
  <Context.Consumer>
    {
      ({ coinList }) => (
        <CoinGridStyled>
          { Object.keys(coinList).map(coinKey => (
            <SelectableTile>
              { coinKey }
            </SelectableTile>
          )) }
        </CoinGridStyled>
      )
    }
  </Context.Consumer>
);

export default CoinGrid;