import React, { VFC } from 'react';
import styled from 'styled-components';

import Score from './Score';

export type Streamer = {
  userID: string,
  displayName: string,
  picture: string,
  score: number,
  rank?: number
};

type Props = {
  streamer: Streamer,
  rank: number,
  score: number,
  prevScore: number
};

const Item = styled.div`
  display: flex;
  flex-direciton: row;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
`

const Rank = styled.div`
  width: 30px;
`

const DisplayName = styled.div`
  flex-grow: 2;
  text-align: left;
`


const Avator = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
margin-right: 10px;
`

const ItemWrapper: VFC<Props> = (props) => {
  const { streamer, rank, score, prevScore } = props;

  return (
    <Item>
      <Rank>{rank}</Rank>
      <Avator src={streamer.picture} alt={streamer.displayName} />
      <DisplayName>{streamer.displayName}</DisplayName>
      <Score score={score} prevScore={prevScore}></Score>
    </Item>
  )
};

export default ItemWrapper;