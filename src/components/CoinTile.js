import React from 'react';
import { Context } from './Provider';
import { SelectableTile } from '../shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';

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
            </TileClass>
          )
        }
      }
    </Context.Consumer>
  );
};

export default CoinTile;