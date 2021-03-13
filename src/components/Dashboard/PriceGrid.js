import React from 'react';
import styled from 'styled-components';
import { Context } from '../Provider';
import PriceTile from './PriceTile';

const PriceGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 20px;
`;

const PriceGrid = () => (
  <Context.Consumer>
    {({ prices }) => (
      <PriceGridStyled>
        {prices.map((price, idx) => (
          <PriceTile key={`Price-Tile-${idx}`} idx={idx} price={price} />
        ))}
      </PriceGridStyled>
    )}
  </Context.Consumer>
);

export default PriceGrid;
