import React, { useEffect, useState, useLayoutEffect } from 'react';
import './App.css';

import ItemWrapper, { Streamer } from './components/StreamerItem';
import Row from './components/Row';

import styled from 'styled-components';
import streamers from './data/data.json';




const StreamersList = styled.div`
  margin: 0 auto;
  position: relative;
  width: 400px;
`

let rankCache: { [key: string]: number } = {};

function App() {
  // const [data, setData] = useState(streamers.map((d: Streamer, i) => {
  //   d.score = 0;
  //   return d;
  // }));
  const [data, setData] = useState(streamers);
  const initialData = [...data];

  useEffect(() => {
    // const timer = setInterval(() => {
    //   setData((prevData: Streamer) => {
    //     const flag = Math.floor(Math.random() * 3) % 3;

    //     if (flag) {
    //       prevData.score += Math.floor(Math.random() * 10000);
    //     }


    //     // rankCache[d.userID] = i + 1;
    //     return prevData;

    //   });
    // }, 1000);

    const timer = setInterval(() => {
      const tmpData: Streamer[] = [...data].map((d: Streamer, i) => {
        const flag = Math.floor(Math.random() * 3) % 3;

        if (flag) {
          d.score += Math.floor(Math.random() * 10000);
        }


        // rankCache[d.userID] = i + 1;
        return d;
      })
        .sort((a: Streamer, b: Streamer) => b.score - a.score);

      // tmpData.forEach((d, i) => {
      //   rankCache[d.userID] = i + 1;
      // });
      // console.log(rankCache);


      setData(tmpData);

    }, 1000);

    return () => clearInterval(timer);

  }, [data]);


  // console.log(streamers);

  return (
    <StreamersList>
      {data.map((streamer: Streamer, index: number) => {
        return <Row rank={index + 1} key={streamer.userID}>
          <ItemWrapper streamer={streamer} rank={index + 1}></ItemWrapper>
        </Row>

      })}
    </StreamersList>
  );
}

export default App;
