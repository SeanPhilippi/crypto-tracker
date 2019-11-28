import React from 'react';
import { Context } from './Provider';
import { SelectableTile } from '../shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from './CoinImage';

const CoinTile = ({ coinKey }) => {
  return (
    <Context.Consumer>
      {
        ({ coinList }) => {
          const coin = coinList[coinKey];
          const TileClass = SelectableTile;
          return (
            <TileClass>
              <CoinHeaderGrid name={ coin.CoinName } symbol={ coin.Symbol } />
              <CoinImage coin={ coin } />
            </TileClass>
          )
        }
      }
    </Context.Consumer>
  );
};

export default CoinTile;