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

const getLowerSectionCoins = (coinList, filteredCoins, topMarketCapCoins) => {
  if (!filteredCoins) {
    return topMarketCapCoins;
  }

  const coinSymbols = Object.keys(coinList);
  const coinNames = coinSymbols.map(symbol => coinList[symbol].CoinName);
  const coins = coinSymbols.map(symbol => coinList[symbol]);
  const coinsArr = [];
  for (const coin of filteredCoins) {
    if (coinSymbols.includes(coin)) {
      if (!coinsArr.includes(coin)) {
        coinsArr.push(coin);
      }
    } else if (coinNames.includes(coin)) {
      const coinObj = coins.find(obj => {
        return obj.CoinName === coin;
      });
      if (!coinsArr.includes(coinObj.Symbol)) {
        coinsArr.push(coinObj.Symbol);
      }
    }
  }
  return coinsArr;
};

const getCoinsToDisplay = (coinList, filteredCoins, topSection, favorites, topMarketCapCoins) => {
  return topSection ? favorites : getLowerSectionCoins(coinList, filteredCoins, topMarketCapCoins);
};

const CoinGrid = ({ topSection }) => (
  <Context.Consumer>
    {({ coinList, filteredCoins, favorites, topMarketCapCoins }) => (
      <CoinGridStyled>
        {topMarketCapCoins && coinList && getCoinsToDisplay(coinList, filteredCoins, topSection, favorites, topMarketCapCoins).map(
          coinKey => (
            <CoinTile key={coinKey} topSection={topSection} coinKey={coinKey} />
          ),
        )}
      </CoinGridStyled>
    )}
  </Context.Consumer>
);

export default CoinGrid;
