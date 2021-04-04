import React, { useState } from 'react';
import { Context } from './Provider';
import { SelectableTile, DeletableTile, DisabledTile } from './shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from './CoinImage';

const clickCoinHandler = (topSection, coinKey, addCoin, removeCoin) => {
  return topSection ? removeCoin(coinKey) : addCoin(coinKey);
};

const CoinTile = ({ coinKey, topSection }) => {
  const [hover, setHover] = useState(false);
  return (
    <Context.Consumer>
      {({ coinList, addCoin, removeCoin, isInFavorites }) => {
        const coin = coinList[coinKey];
        let TileClass = SelectableTile;
        if (topSection) {
          TileClass = DeletableTile;
        } else if (isInFavorites(coinKey)) {
          TileClass = DisabledTile;
        }

        return (
          <TileClass
            onClick={() =>
              clickCoinHandler(topSection, coinKey, addCoin, removeCoin)
            }
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            <CoinHeaderGrid
              topSection={topSection}
              name={coin.CoinName}
              symbol={coin.Symbol}
              hover={hover}
            />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </Context.Consumer>
  );
};

export default CoinTile;
