import React from 'react';
import styled from 'styled-components';
import { Context } from './Provider';
import CoinTile from '../components/CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;

const getCoinsToDisplay = coinList => {
  return Object.keys(coinList).slice(0, 100);
};

const CoinGrid = () => (
  <Context.Consumer>
    {
      ({ coinList }) => (
        <CoinGridStyled>
          { getCoinsToDisplay(coinList).map(coinKey => <CoinTile coinKey={ coinKey } />) }
        </CoinGridStyled>
      )
    }
  </Context.Consumer>
);

export default CoinGrid;