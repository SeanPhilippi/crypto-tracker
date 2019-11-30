import React from 'react';
import styled from 'styled-components';
import { Context } from './Provider';
import CoinTile from '../components/CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 15px;
  margin-top: 20px;
`;

const getCoinsToDisplay = (
  coinList,
  topSection,
  favorites,
) => {
  return topSection ? favorites : Object.keys(coinList).slice(0, 100);
};

const CoinGrid = ({ topSection }) => (
  <Context.Consumer>
    {
      ({ coinList, favorites }) => (
        <CoinGridStyled>
          { getCoinsToDisplay(coinList, topSection, favorites).map(
              coinKey => <CoinTile topSection={ topSection } coinKey={ coinKey } />
            )
          }
        </CoinGridStyled>
      )
    }
  </Context.Consumer>
);

export default CoinGrid;