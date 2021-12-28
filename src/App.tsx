import React, { useEffect, useState, useLayoutEffect } from 'react';
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

// let rankCache: { [key: string]: number } = {};

const getRanks = (scores: number[]): number[] => {
  const sortedScores = scores.slice().sort((a, b) => b - a);

  return scores.map((score) => sortedScores.findIndex((e) => e === score)).map((x) => x + 1);
};

function App() {
  const [data, setData] = useState(streamers);
  const initialScores = streamers.map((d: Streamer) => d.score);
  const [scores, setScores] = useState(initialScores);
  const [ranks, setRanks] = useState(getRanks(initialScores));

  useEffect(() => {

    const timer = setInterval(() => {
      const tmpScores: number[] = scores.map((d: number, i) => {
        const flag = Math.floor(Math.random() * 10) % 3;

        if (flag) {

          if (Math.random() * 10 < 5) {
            d += Math.floor(Math.random() * -5000);

          } else {
            d += Math.floor(Math.random() * 5000);
          }
        }
        return d;
      })

      setScores(tmpScores);

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
          <ItemWrapper streamer={streamer} score={scores[index]} rank={ranks[index]}></ItemWrapper>
        </Row>

      })}
    </StreamersList>
  );
}

export default App;
