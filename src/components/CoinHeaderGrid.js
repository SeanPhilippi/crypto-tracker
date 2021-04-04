import React from 'react';
import styled from 'styled-components';

export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

const CoinHeaderGrid = ({ name, symbol, topSection, hover }) => {
  return (
    <CoinHeaderGridStyled>
      <div>{name}</div>
      <CoinSymbol>
        {topSection && hover ? (
          <span style={{ color: 'red', fontSize: '1rem', lineHeight: '1.5rem' }}>✕</span>
        ) : !topSection && hover ? (
          <span style={{ fontSize: '2rem', lineHeight: '1rem' }}>+</span>
        ) : (
          symbol
        )}
      </CoinSymbol>
    </CoinHeaderGridStyled>
  );
};

export default CoinHeaderGrid;
