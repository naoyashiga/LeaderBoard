import React, { useState, VFC } from 'react';
import styled from 'styled-components';


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

const Score = styled.div`
  text-align: right:
`

const Avator = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`

// type Props = Streamer & Rank;

const ItemWrapper: VFC<Props> = (props) => {
  const { streamer, rank } = props;

  return (
    <Item key={streamer.userID}>
      <Rank>{rank}</Rank>
      <Avator src={streamer.picture} alt={streamer.displayName} />
      <DisplayName>{streamer.displayName}</DisplayName>
      <Score>{streamer.score}pt</Score>
    </Item>
  )
};

export default ItemWrapper;