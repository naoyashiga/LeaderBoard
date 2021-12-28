import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import './App.css';

import ItemWrapper, { Streamer } from './components/StreamerItem';
import Row from './components/Row';

import styled from 'styled-components';
import streamers from './data/data.json';
import Score from './components/Score';


const StreamersList = styled.div`
  margin: 0 auto;
  position: relative;
  width: 400px;
`

const getRanks = (scores: number[]): number[] => {
  const sortedScores = scores.slice().sort((a, b) => b - a);

  return scores.map((score) => sortedScores.findIndex((e) => e === score)).map((x) => x + 1);
};

const addRandomScore = (scores: number[]): number[] => {
  return scores.map((d: number, i) => {
    const flag = Math.floor(Math.random() * 10) % 3;

    if (flag) {
      d += Math.floor(Math.random() * 5000);
    }
    return d;
  });
};

function App() {
  const [data, setData] = useState(streamers);
  const initialScores = streamers.map((d: Streamer) => d.score);
  const [scores, setScores] = useState(initialScores);
  const [ranks, setRanks] = useState(getRanks(initialScores));

  const [prevScores, setPrevScores] = useState(initialScores);

  useEffect(() => {

    const timer = setInterval(() => {


      setScores((prev: number[]) => {

        setPrevScores(prev);

        return addRandomScore(prev);
      }
      );

    }, 1500);

    return () => clearInterval(timer);

  }, []);

  useEffect(() => {
    setRanks(getRanks(scores));
  }, [scores]);


  return (
    <StreamersList>
      {/* {console.log(data)} */}
      {data.map((streamer: Streamer, index: number) => {

        return <Row rank={ranks[index]} key={streamer.userID}>
          <ItemWrapper streamer={streamer} score={scores[index]} prevScore={prevScores[index]} rank={ranks[index]}></ItemWrapper>
        </Row>

      })}
    </StreamersList>
  );
}

export default App;
