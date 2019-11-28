import React from 'react';
import styled from 'styled-components';
import { Context } from './Provider';

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: green;
  cursor: pointer;
`;

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

const ConfirmButton = () => (
  <Context.Consumer>
    {
      ({ confirmFavorites }) => (
        <CenterDiv>
          <ConfirmButtonStyled onClick={ confirmFavorites }>
            Confirm Favorites
          </ConfirmButtonStyled>
        </CenterDiv>
      )
    }
  </Context.Consumer>
);

export default ConfirmButton;