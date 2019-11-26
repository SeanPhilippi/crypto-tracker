import React from 'react';
import styled, { css } from 'styled-components';

const Logo = styled.div`
  font-size: 1.5rem;
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
    text-shadow: 0 0 60px cyan;
  `}
`;

const ControlButton = ({ name, active }) => (
  <ControlButtonElem active={ active }>
    { name }
  </ControlButtonElem>
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