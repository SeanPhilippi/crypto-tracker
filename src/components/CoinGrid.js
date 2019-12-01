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

const getLowerSectionCoins = (coinList, filteredCoins) => {
  // if filteredCoins exist, return the keys, else return first 100 of coinList keys array
  return (filteredCoins && Object.keys(filteredCoins)) || Object.keys(coinList).slice(0, 100);
};

const getCoinsToDisplay = (
  coinList,
  filteredCoins,
  topSection,
  favorites,
) => {
  return topSection ? favorites : getLowerSectionCoins(coinList, filteredCoins);
};

const CoinGrid = ({ topSection }) => (
  <Context.Consumer>
    {
      ({ coinList, filteredCoins, favorites }) => (
        <CoinGridStyled>
          {
            getCoinsToDisplay(coinList, filteredCoins, topSection, favorites).map(
              coinKey => <CoinTile key={ coinKey } topSection={ topSection } coinKey={ coinKey } />
            )
          }
        </CoinGridStyled>
      )
    }
  </Context.Consumer>
);

export default CoinGrid;