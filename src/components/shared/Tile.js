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

export const ChartTile = styled(Tile)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${ cyanBoxShadow };
    color: cyan;
  }
`;

export const DeletableTile = styled(SelectableTile)`
  &:hover {
    ${ redBoxShadow };
  }
`;

export const DisabledTile = styled(Tile)`
  pointer-events: none;
  opacity: 0.4;
`;