import React from 'react';
import { Context } from './Provider';
import { SelectableTile, DeletableTile, DisabledTile } from '../shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from './CoinImage';

const clickCoinHandler = (topSection, coinKey, addCoin, removeCoin) => {
  return topSection ? removeCoin(coinKey) : addCoin(coinKey);
};

const CoinTile = ({ coinKey, topSection }) => {
  return (
    <Context.Consumer>
      {
        ({ coinList, addCoin, removeCoin }) => {
          const coin = coinList[coinKey];
          let TileClass = SelectableTile;
          if (topSection) {
            TileClass = DeletableTile;
          }

          return (
            <TileClass onClick={ () => clickCoinHandler(topSection, coinKey, addCoin, removeCoin) }>
              <CoinHeaderGrid topSection={ topSection } name={ coin.CoinName } symbol={ coin.Symbol } />
              <CoinImage coin={ coin } />
            </TileClass>
          )
        }
      }
    </Context.Consumer>
  );
};

export default CoinTile;