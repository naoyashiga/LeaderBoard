import React, { useState, VFC, useRef, useEffect } from 'react';
import styled from 'styled-components';

import Score from './Score';

export type Streamer = {
  userID: string,
  displayName: string,
  picture: string,
  score: number,
};

type Props = {
  streamer: Streamer,
  rank: number
};

const Item = styled.div`
  display: flex;
  flex-direciton: row;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
`

const Rank = styled.div`
  width: 20px;
`

const DisplayName = styled.div`
  text-align: left;
`


const Avator = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`

const ItemWrapper: VFC<Props> = (props) => {
  const { streamer, rank } = props;
  const prevScoreRef = useRef<number>(streamer.score);

  useEffect(() => {
    prevScoreRef.current = streamer.score;
  })

  const prevScore: number = prevScoreRef.current;

  return (
    <Item key={streamer.userID}>
      <Rank>{rank}</Rank>
      <Avator src={streamer.picture} alt={streamer.displayName} />
      <DisplayName>{streamer.displayName}</DisplayName>
      <Score score={streamer.score} prevScore={prevScore}></Score>
    </Item>
  )
};

export default ItemWrapper;