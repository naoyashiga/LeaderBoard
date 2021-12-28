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

let rankCache: { [key: string]: number } = {};

const getRanks = (scores: number[]): number[] => {
  const sortedScores = scores.slice().sort((a, b) => b - a);

  return scores.map((score) => sortedScores.findIndex((e) => e === score));
};

function App() {
  // const [data, setData] = useState(streamers.map((d: Streamer, i) => {
  //   d.score = 0;
  //   return d;
  // }));
  const [data, setData] = useState(streamers);
  const initialScores = streamers.map((d: Streamer) => d.score);
  const [scores, setScores] = useState(initialScores);
  const [ranks, setRanks] = useState(getRanks(initialScores));
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
      const tmpScores: number[] = scores.map((d: number, i) => {
        const flag = Math.floor(Math.random() * 10) % 3;

        if (flag) {

          if (Math.random() * 10 < 5) {
            d += Math.floor(Math.random() * -5000);

          } else {
            d += Math.floor(Math.random() * 5000);
          }
        }
        // rankCache[d.userID] = i + 1;
        return d;
      })

      setScores(tmpScores);

    }, 1500);

    return () => clearInterval(timer);

  }, []);

  useEffect(() => {
    setRanks(getRanks(scores));
  }, [scores]);

  //   const timer = setInterval(() => {
  //     const tmpData: Streamer[] = [...data].map((d: Streamer, i) => {
  //       const flag = Math.floor(Math.random() * 10) % 3;

  //       if (flag) {

  //         if (Math.random() * 10 < 5) {
  //           d.score += Math.floor(Math.random() * -5000);

  //         } else {
  //           d.score += Math.floor(Math.random() * 5000);
  //         }
  //       }


  //       // rankCache[d.userID] = i + 1;
  //       return d;
  //     })
  //       .sort((a: Streamer, b: Streamer) => b.score - a.score);

  //     tmpData.forEach((d, i) => {
  //       d.rank = i + 1;
  //       return d;
  //       // rankCache[d.userID] = i + 1;
  //     });
  //     // console.log(rankCache);




  //     setData(tmpData);

  //   }, 1500);

  //   return () => clearInterval(timer);

  // }, [data]);


  // console.log(streamers);

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
