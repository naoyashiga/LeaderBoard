import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import './App.css';

import ItemWrapper, { Streamer } from './components/StreamerItem';
import BarChart from './components/BarChart';
import XAxisDescription from './components/XAxisDescription';
import Row from './components/Row';

import styled from 'styled-components';
import streamers from './data/data.json';

import { getRanks, addRandomScore } from './helpers/Helpers';


const StreamersList = styled.div`
  margin: 0 auto;
  position: relative;
  width: 320px;
`

/*
Implementation Overview.

・Score update animation（components/Score.tsx）

・Order rearrange animation（components/Row.tsx）

・Additional animation or visual effect（components/BarChart.tsx）
Shows the Streamer score as a bar graph.

*/

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

  const calculateXAxisMax = () => {
    /*
    Shows the Streamer score as a bar graph.
    Dynamically change the maximum value of the X axis.
    The maximum value of the X-axis is calculated based on the score of the first place.

    ex)
    1st score: 3500
    x axis max value: 4000
    */

    let m = Math.max(...scores);
    let count = 0;

    while (m > 10) {
      m /= 10;
      count = count + 1;
    }

    return Math.ceil(m) * 10 ** count;
  };


  return (
    <div>
      <XAxisDescription xAxisMax={calculateXAxisMax()}></XAxisDescription>
      <StreamersList>
        {data.map((streamer: Streamer, index: number) => {

          return <Row rank={ranks[index]} key={streamer.userID}>
            <ItemWrapper streamer={streamer} score={scores[index]} prevScore={prevScores[index]} rank={ranks[index]}></ItemWrapper>
            <BarChart score={scores[index]} xAxisMax={calculateXAxisMax()}></BarChart>
          </Row>

        })}
      </StreamersList>

    </div>
  );
}

export default App;
