import React, { useState, VFC, useRef, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
  xAxisMax: number
};

const XAxisDescriptionWrapper = styled.div`
width: 320px;
font-size: 12px;
color: #a0a0a0;
margin: 20px auto 0;
text-align: right;

`

const XAxisDescription: VFC<Props> = (props) => {
  const { xAxisMax } = props;

  return (
    <XAxisDescriptionWrapper>
      <span>xAxis max: {xAxisMax} pt</span>
    </XAxisDescriptionWrapper>
  )
};

export default XAxisDescription;