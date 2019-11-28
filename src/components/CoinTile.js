import React from 'react';
import { Context } from './Provider';
import { SelectableTile, DeletableTile, DisabledTile } from '../shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from './CoinImage';

const CoinTile = ({ coinKey, topSection }) => {
  return (
    <Context.Consumer>
      {
        ({ coinList }) => {
          const coin = coinList[coinKey];
          let TileClass = SelectableTile;
          if (topSection) {
            TileClass = DeletableTile;
          }

          return (
            <TileClass>
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