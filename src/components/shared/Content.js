import React from 'react';
import styled from 'styled-components';
import { Context } from '../Provider';
import Loading from './Loading';

const FlexCenterLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

const Content = ({ children }) => (
  <Context.Consumer>
    {
      ({ coinList, prices, firstVisit }) => (
        !coinList ?
          <FlexCenterLoading><Loading message='Loading Coins'/></FlexCenterLoading>
        : !firstVisit && !prices ?
            <FlexCenterLoading><Loading message='Loading Prices'/></FlexCenterLoading>
        : <div>{ children }</div>
      )
    }
  </Context.Consumer>
);

export default Content;