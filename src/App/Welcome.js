import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  color: red;
  border: solid black 1px;
  width: 5rem;
  ${props => props.primary && css`
    color: palevioletred;
  `}
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const Welcome = () => (
<>
    <h1>
      Welcome to Crypto-Tracker
    </h1>
    <Button>Yo</Button>
    <Button primary>Yo dawg</Button>
    <TomatoButton>Tomato</TomatoButton>
</>
);

export default Welcome;