import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  font-size: 1.5rem;
`;

const Nav = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`;

export default function() {
  return (
    <Nav>
      <Logo>Crypto Tracker</Logo>
      <div/>
      <div>Dashboard</div>
      <div>Settings</div>
    </Nav>
  );
};