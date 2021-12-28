
import React, { useState, VFC, useRef, useEffect, useLayoutEffect } from 'react';

import styled from 'styled-components';
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
      const s: number = Math.floor(props.prevScore + progress * (props.score - props.prevScore));
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