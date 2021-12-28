import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import './App.css';

import ItemWrapper, { Streamer } from './components/StreamerItem';
import Row from './components/Row';

import styled from 'styled-components';
import streamers from './data/data.json';

import { getRanks, addRandomScore } from './helpers/Helpers';


const StreamersList = styled.div`
  margin: 0 auto;
  position: relative;
  width: 400px;
`

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
      {data.map((streamer: Streamer, index: number) => {

        return <Row rank={ranks[index]} key={streamer.userID}>
          <ItemWrapper streamer={streamer} score={scores[index]} prevScore={prevScores[index]} rank={ranks[index]}></ItemWrapper>
        </Row>

      })}
    </StreamersList>
  );
}

export default App;
