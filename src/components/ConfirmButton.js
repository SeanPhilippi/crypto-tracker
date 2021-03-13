import React from 'react';
import styled from 'styled-components';
import { Context } from './Provider';
import { fontSizeM, textHover, color3 } from './shared/styles';

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: ${color3};
  ${fontSizeM};
  padding: 5px;
  cursor: pointer;
  &:hover {
    ${textHover}
  }
`;

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

const ConfirmButton = () => (
  <Context.Consumer>
    {({ confirmFavorites }) => (
      <CenterDiv>
        <ConfirmButtonStyled onClick={confirmFavorites}>
          Confirm Favorites
        </ConfirmButtonStyled>
      </CenterDiv>
    )}
  </Context.Consumer>
);

export default ConfirmButton;
