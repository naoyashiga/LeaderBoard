import React, { useState } from 'react';
import './App.css';

import Row, { Streamer } from './Row';

import styled from 'styled-components';
import streamers from './data/data.json';




const StreamersList = styled.div`
  margin: 0 auto;
  width: 400px;
`

function App() {
  // const [data, setData] = useState(streamers);


  console.log(streamers);

  return (
    <StreamersList>
      {streamers.map((streamer: Streamer, index: number) => {
        return <Row streamer={streamer} rank={index + 1}></Row>

      })}
    </StreamersList>
  );
}

export default App;
