import React from 'react';
import styled from 'styled-components';

const ThemeSwitchContainer = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
`;

const ButtonStyled = styled.button`
  cursor: pointer;
  position: relative;
`;

const ThemeSwitch = () => (
  <ThemeSwitchContainer>
    <ButtonStyled />
  </ThemeSwitchContainer>
);

export default ThemeSwitch;