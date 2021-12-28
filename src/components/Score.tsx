
import React, { useState, VFC, useRef, useEffect, useCallback, useLayoutEffect } from 'react';

// const Score = styled.div`
//   text-align: right:
// `


type ScoreProps = {
  score: number,
  prevScore: number
};

const useScoreAnimationFrame = (isAnimating: boolean, callback = () => { }) => {
  const idRef = useRef<ReturnType<typeof requestAnimationFrame>>(0);

  const loop = useCallback(() => {

    if (isAnimating) {
      idRef.current = requestAnimationFrame(loop);
    }

    callback();

  }, [isAnimating, callback]);

  useEffect(() => {

    idRef.current = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(idRef.current);
  }, [loop]);

};

const Score: VFC<ScoreProps> = (props) => {
  // const idRef = useRef<number>(0);
  const [counter, setCounter] = useState<number>(0);
  const [delta, setDelta] = useState<number>(props.score - props.prevScore);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  // const nStep: number = 10;
  // const delta: number = Math.min((props.score - props.prevScore) / nStep, 1)

  // useEffect(() => {
  //   console.log(props.score === props.prevScore);


  // }, []);

  // useEffect(() => {
  //   // if (counter < props.score - props.prevScore) {
  //   if (counter < 10) {
  //     setIsAnimating(true);
  //   } else {
  //     setIsAnimating(false);
  //   }

  // }, [counter]);

  const countUp = useCallback(() => {

    if (props.score - props.prevScore === 0) {
      // console.log("ok");

      setIsAnimating(false);
      // setCounter(prev => 0);
    } else {
      if (counter < 10) {
        setIsAnimating(true);
        setCounter(prev => prev + 1);
      } else {
        setIsAnimating(false);
        // setCounter(prev => 0);
      }
    }

  }, [delta]);

  // const countUp = useCallback(() => {
  //   setCounter(prev => prev + 1);
  // }, []);

  const countFinish = useCallback(() => {
    setCounter(prev => 0);
  }, []);

  // const scoreIsSame = useCallback(() => {
  //   if(props.score === props.prevScore) {
  //     setCounter(prev => 0);
  //   }
  // }, []);

  // useScoreAnimationFrame(isAnimating, countUp);

  // useScoreAnimationFrame(isAnimating, isAnimating ? countUp : countFinish);

  // useEffect(() => {
  //   idRef.current = requestAnimationFrame(loop);
  //   return () => cancelAnimationFrame(idRef.current);
  // }, []);

  return <div>{props.score}pt</div>
  // return <div>{props.score} : {props.prevScore} : {Math.abs(props.score - props.prevScore)} : {counter}pt</div>

};

// const Score: VFC<ScoreProps> = (props) => {
//   const idRef = useRef<number>(0);
//   const [counter, setCounter] = useState<number>(0);
//   const nStep: number = 10;
//   const delta: number = Math.min((props.score - props.prevScore) / nStep, 1);

//   const loop = () => {


//     // console.log(counter < props.score - props.prevScore);

//     if (counter < Math.abs(props.score - props.prevScore)) {
//       // if (counter < 10) {
//       setCounter(prev => prev + 1);
//       idRef.current = requestAnimationFrame(loop);
//       // console.log(idRef.current);

//       // setCounter(prev => prev + Math.floor(delta));
//     } else {
//       setCounter((prev) => 0);
//       // cancelAnimationFrame(idRef.current);

//     }
//   };

//   // useEffect(() => {


//   //   if (props.score == props.prevScore) {
//   //     setCounter((prev) => 0);
//   //     // return;
//   //     return () => cancelAnimationFrame(idRef.current);
//   //   }

//   //   setCounter((prev) => 0);
//   //   loop();

//   //   return () => cancelAnimationFrame(idRef.current);

//   // }, [props.score]);

//   useEffect(() => {
//     idRef.current = requestAnimationFrame(loop);
//     return () => cancelAnimationFrame(idRef.current);
//   }, []);

//   return <div>{props.score} : {props.prevScore} : {Math.abs(props.score - props.prevScore)} : {counter}pt</div>

// };

export default Score;