import React, { useState, VFC, useRef, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
  score: number,
  maxScore: number
};

const BarChart = styled.div.attrs<Props>((props) => ({
  myScore: props.score
})) <Props>`
width: ${props => ((props.score / props.maxScore) * 300)}px;
height: 3px;
background: #f72585;
transition: all 0.3s ease 0s;
`

// const BarChartWrapper: VFC<Props> = (props) => {
//   const { score, maxScore } = props;

//   return (
//     <BarChart>
//     </BarChart>
//   )
// };

export default BarChart;