import styled from 'styled-components';
import { backgroundColor2, fontSizeS } from '../shared/GlobalStyles';

const ChartSelect = styled.select`
  ${ backgroundColor2 };
  ${ fontSizeS };
  color: #1163c9;
  border: 1px solid;
  float: right;
  outline: none;
  position: absolute;
  right: 15px;
  top: 15px
`;

export default ChartSelect;