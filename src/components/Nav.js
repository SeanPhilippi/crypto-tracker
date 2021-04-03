import React from 'react';
import styled, { css } from 'styled-components';
import { Context } from './Provider';
import { color3, textHover } from './shared/styles';

const Logo = styled.div`
  font-size: 1.7rem;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between
  margin-bottom: 40px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  margin-left: 40px;
  ${props =>
    props.active &&
    css`
      color: ${color3};
      ${textHover};
    `}
  ${props =>
    props.hidden &&
    css`
      display: none;
    `}
`;

const toProperCase = lower => lower[0].toUpperCase().concat(lower.slice(1));

const ControlButton = ({ name }) => (
  <Context.Consumer>
    {({ page, setPage, firstVisit }) => (
      <ControlButtonElem
        active={page === name}
        onClick={() => setPage(name)}
        hidden={firstVisit && name === 'dashboard'}
      >
        {toProperCase(name)}
      </ControlButtonElem>
    )}
  </Context.Consumer>
);

const ThemeControl = () => (
  <Context.Consumer>
    {({ darkTheme, changeTheme }) => (
      <ControlButtonElem onClick={changeTheme}>
        {darkTheme ? 'Light Theme' : 'Dark Theme'}
      </ControlButtonElem>
    )}
  </Context.Consumer>
);

export default () => (
  <Nav>
    <Logo>Crypto Tracker</Logo>
    <div style={{ display: 'flex' }}>
      <ControlButton name='dashboard' active />
      <ControlButton name='settings' />
    </div>
    {/* <ThemeControl /> */}
  </Nav>
)
