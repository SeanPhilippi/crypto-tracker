import styled from 'styled-components';
import {
  subtleBoxShadow,
  backgroundColor1,
  cyanBoxShadow,
  redBoxShadow
} from './styles';

export const Tile = styled.div`
  ${ subtleBoxShadow };
  ${ backgroundColor1 };
  padding: 10px;
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${ cyanBoxShadow };
  }
`;