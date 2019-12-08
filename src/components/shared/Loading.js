import React from 'react';
import styled from 'styled-components';
import loading from '../../images/loading.gif';

const LoadingStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const GifStyled = styled.img`
  display: block;
  margin-right: 1rem;
`;

const Loading = ({ message }) => (
  <LoadingStyled>
    <GifStyled src={ loading } alt='loading gif'/>
    <div>
      { message }
    </div>
  </LoadingStyled>
);

export default Loading;