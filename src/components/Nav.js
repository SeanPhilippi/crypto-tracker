import React from 'react';
import styled, { css } from 'styled-components';
import { Context } from './Provider';

const Logo = styled.div`
  font-size: 1.7rem;
`;

const Nav = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    color: cyan;
    text-shadow: 0 0 10px cyan;
  `}
`;

const toProperCase = lower => lower[0].toUpperCase().concat(lower.slice(1));

const ControlButton = ({ name }) => (
  <Context.Consumer>
    {
      ({ page, setPage }) => (
        <ControlButtonElem
          active={ page === name }
          onClick={ () => setPage(name) }
        >
          { toProperCase(name) }
        </ControlButtonElem>
      )
    }
  </Context.Consumer>
);

export default function() {
  return (
    <Nav>
      <Logo>Crypto Tracker</Logo>
      <div/>
      <ControlButton name="dashboard" active/>
      <ControlButton name="settings"/>
    </Nav>
  );
};