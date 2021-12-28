import React, { useState, VFC } from 'react';
import styled from 'styled-components';


type RowPositionProps = {
  rank: number;
  // prevRank: number;
};

const Row = styled.div.attrs<RowPositionProps>((props) => ({
  positionY: props.rank
})) <RowPositionProps>`
  position: absolute;
  // left: ${props => -50 * (props.rank - 1)}px;
  left: 0px;
  top: ${props => 60 * (props.rank - 1)}px;
  transition: all 0.3s ease 0s;

  width: 320px;
  // height: 00px;
  border-bottom: 1px solid #ccc;

  // background: #aaa;
`;

// const Row = styled.div.attrs<RowPositionProps>((props) => ({
//   positionY: props.rank
// })) <RowPositionProps>`
//   transform: translate(0, ${props => 40 * (props.prevRank - props.rank)}px);
//   background: #ccc;
//   animation-fill-mode: forwards;
//   transition-duration: 800ms;
// `;

// const Row = styled.div<RowPositionProps>`
// translate(0, 100 * ${rank}px);
// background: #ccc;
// transition-duration: 300ms;
// `;


export default Row;