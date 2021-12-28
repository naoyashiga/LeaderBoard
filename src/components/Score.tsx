
import React, { useState, VFC, useRef, useEffect, useCallback, useLayoutEffect } from 'react';

// const Score = styled.div`
//   text-align: right:
// `

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

  useEffect(() => {
    const startTime = Date.now();
    idRef.current = requestAnimationFrame(() => loop(startTime));

  });
  // useEffect(() => {
  //   idRef.current = requestAnimationFrame(loop);
  //   return () => cancelAnimationFrame(idRef.current);
  // }, []);

  return <div>{displayScore}</div>
  // return <div>{props.score} : {props.prevScore} : {Math.abs(props.score - props.prevScore)} : {counter}pt</div>

};

export default Score;