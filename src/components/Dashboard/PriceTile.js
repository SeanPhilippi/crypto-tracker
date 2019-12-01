import React from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile } from '../../shared/Tile';
import { fontSizeS, fontSizeL } from '../../shared/styles';
import { CoinHeaderGridStyled } from '../CoinHeaderGrid';

const formatNumber = number => +(number + '').slice(0, 7);

const TickerPrice = styled.div`
  ${ fontSizeL };
`;

const ChangePercentStyled = styled.div`
  justify-self: right;
  color: green;
  ${ props => props.red && css`
      color: red;
  ` }
`;

const PriceTileStyled = styled(SelectableTile)`
  ${ props => props.compact && css`
    ${ fontSizeS };
  ` }
`;

const PriceTile = ({ sym, data }) => {
  return (
    <PriceTileStyled>
      <CoinHeaderGridStyled >
        <div>{ sym }</div>
        <ChangePercentStyled red={ data.CHANGEPCT24HOUR < 0 }>
          { formatNumber(data.CHANGEPCT24HOUR) }
        </ChangePercentStyled>
      </CoinHeaderGridStyled>
      <TickerPrice>
        ${ formatNumber(data.PRICE) }
      </TickerPrice>
    </PriceTileStyled>
  );
};

export default function({ price, idx }) {
  const sym = Object.keys(price)[0];
  const data = price[sym]['USD'];

  return (
    <PriceTile sym={ sym } data={ data }>
    </PriceTile>
  )
};