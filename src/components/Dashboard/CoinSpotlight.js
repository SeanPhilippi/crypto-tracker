import React from 'react';
import styled from 'styled-components';
import { Tile } from '../shared/Tile';
import { Context } from '../Provider';
import CoinImage from '../CoinImage';

const SpotlightName = styled.h2`
  text-align: center;
`;

const CoinSpotlight = () => (
  <Context.Consumer>
    {({ currentFavorite, coinList }) => (
      <Tile>
        <SpotlightName>{coinList[currentFavorite].CoinName}</SpotlightName>
        <CoinImage spotlight coin={coinList[currentFavorite]} />
      </Tile>
    )}
  </Context.Consumer>
);

export default CoinSpotlight;
