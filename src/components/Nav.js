import React from 'react';
import styled, { css } from 'styled-components';
import { Context } from './Provider';
import { color3, textHover } from './shared/styles';

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
  ${ props => props.active && css`
    color: ${ color3 };
    ${ textHover };
  ` }
  ${ props => props.hidden && css`
    display: none;
  ` }
`;

const toProperCase = lower => lower[0].toUpperCase().concat(lower.slice(1));

const ControlButton = ({ name }) => (
  <Context.Consumer>
    {
      ({ page, setPage, firstVisit }) => (
        <ControlButtonElem
          active={ page === name }
          onClick={ () => setPage(name) }
          hidden={ firstVisit && name === 'dashboard' }
        >
          { toProperCase(name) }
        </ControlButtonElem>
      )
    }
  </Context.Consumer>
);

const ThemeControl = () => (
  <Context.Consumer>
    {
      ({ darkTheme, changeTheme }) => (
        <ControlButtonElem
          onClick={ changeTheme }
        >
          { darkTheme ? 'Light Theme' : 'Dark Theme' }
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
      <ThemeControl/>
    </Nav>
  );
};