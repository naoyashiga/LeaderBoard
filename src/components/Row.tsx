import React from 'react';
import styled from 'styled-components';


type RowPositionProps = {
  rank: number;
};

const Row = styled.div.attrs<RowPositionProps>((props) => ({
  positionY: props.rank
})) <RowPositionProps>`
  position: absolute;
  left: 0px;
  top: ${props => 60 * (props.rank - 1)}px;
  transition: all 0.3s ease 0s;

  width: 320px;
  border-bottom: 1px solid #ccc;
`;

export default Row;