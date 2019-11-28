import React from 'react';
import styled from 'styled-components';
import { Context } from './Provider';
import CoinTile from '../components/CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 20px;
`;

const getCoinsToDisplay = (coinList, topSection) => {
  return Object.keys(coinList).slice(0, topSection ? 10 : 100);
};

const CoinGrid = ({ topSection }) => (
  <Context.Consumer>
    {
      ({ coinList }) => (
        <CoinGridStyled>
          { getCoinsToDisplay(coinList, topSection).map(
              coinKey => <CoinTile topSection={ topSection } coinKey={ coinKey } />
            )
          }
        </CoinGridStyled>
      )
    }
  </Context.Consumer>
);

export default CoinGrid;