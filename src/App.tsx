import React, { useEffect, useState } from 'react';
import './App.css';

import Row, { Streamer } from './Row';

import styled from 'styled-components';
import streamers from './data/data.json';




const StreamersList = styled.div`
  margin: 0 auto;
  width: 400px;
`

function App() {
  const [data, setData] = useState(streamers);

  useEffect(() => {

    const timer = setInterval(() => {
      const tmpData = [...data].map((d, i) => {
        const flag = Math.floor(Math.random() * 3) % 3;

        if (flag) {
          d.score += Math.floor(Math.random() * 1000);
        }
        return d;
      });

      tmpData.sort((a, b) => b.score - a.score);

      setData(tmpData);

    }, 1000);

    return () => clearInterval(timer);

  }, [data]);


  // console.log(streamers);

  return (
    <StreamersList>
      {data.map((streamer: Streamer, index: number) => {
        return <Row streamer={streamer} rank={index + 1}></Row>

      })}
    </StreamersList>
  );
}

export default App;
