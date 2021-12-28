
import React, { useState, VFC, useRef, useLayoutEffect } from 'react';

import styled from 'styled-components';

/*
The score numbers change frequently. By using a monospaced font, the numbers are in a consistent position and easy to read.
*/
const ScoreStyle = styled.div`
  font-family:monospace, serif;
  text-align: right:
`
type ScoreProps = {
  score: number,
  prevScore: number
};

const Score: VFC<ScoreProps> = (props) => {
  const idRef = useRef<number>(0);
  const [displayScore, setDisplayScore] = useState<number>(props.prevScore);

  const DURATION = 300;
  const loop = (startTime: number) => {
    const progress = (Date.now() - startTime) / DURATION;

    if (progress < 1) {
      let s: number = Math.floor(props.prevScore + progress * (props.score - props.prevScore));

      if (s > props.score) {
        s = props.score;
      }
      setDisplayScore(s);
    } else {
      setDisplayScore(props.score);

      cancelAnimationFrame(idRef.current);
    }
  };

  useLayoutEffect(() => {
    const startTime = Date.now();
    idRef.current = requestAnimationFrame(() => loop(startTime));
  });

  return <ScoreStyle>{displayScore} pt</ScoreStyle>
};

export default Score;