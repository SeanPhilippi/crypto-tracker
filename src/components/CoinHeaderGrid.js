import React from 'react';
import styled from 'styled-components';
import { DeletableTile } from './shared/Tile';

export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

const DeleteIcon = styled(CoinSymbol)`
  display: none;
  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
`;

const CoinHeaderGrid = ({ name, symbol, topSection, hover }) => {
  return (
    <CoinHeaderGridStyled>
      <div>{name}</div>
      {topSection ? (
        <DeleteIcon>✕</DeleteIcon>
      ) : (
        <CoinSymbol>
          {hover ? (
            <span style={{ fontSize: '2rem', lineHeight: '1rem' }}>+</span>
          ) : (
            symbol
          )}
        </CoinSymbol>
      )}
    </CoinHeaderGridStyled>
  );
};

export default CoinHeaderGrid;
