import React from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile } from '../../shared/Tile';
import { Context } from '../Provider';
import { fontSizeS, fontSizeL, cyanBoxShadow } from '../../shared/styles';
import { CoinHeaderGridStyled } from '../CoinHeaderGrid';

const formatNumber = number => +(number + '').slice(0, 7);

const TickerPrice = styled.div`
  ${ fontSizeL };
`;

const JustifyLeft = styled.div`
  justify-self: left;
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
    display: grid;
    ${ fontSizeS };
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    justify-items: right;
  ` }
  ${ props => props.currentFavorite && css`
    ${ cyanBoxShadow };
    pointer-events: none;
  ` }
`;

const PriceTile = ({ sym, data, currentFavorite }) => {
  return (
    <PriceTileStyled currentFavorite={ currentFavorite }>
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

const PriceTileCompact = ({ sym, data, currentFavorite }) => {
  return (
    <PriceTileStyled compact currentFavorite={ currentFavorite }>
      <JustifyLeft>{ sym }</JustifyLeft>
      <ChangePercentStyled red={ data.CHANGEPCT24HOUR < 0 }>
        { formatNumber(data.CHANGEPCT24HOUR) }
      </ChangePercentStyled>
      <div>
        ${ formatNumber(data.PRICE) }
      </div>
    </PriceTileStyled>
  );
};

export default function({ price, idx }) {
  const sym = Object.keys(price)[0];
  const data = price[sym]['USD'];
  const TileClass = idx < 5 ? PriceTile : PriceTileCompact;
  return (
    <Context.Consumer>
      {
        ({ currentFavorite }) => (
          <TileClass
            sym={ sym }
            data={ data }
            currentFavorite={ currentFavorite === sym }
          >
          </TileClass>
        )
      }
    </Context.Consumer>
  )
};