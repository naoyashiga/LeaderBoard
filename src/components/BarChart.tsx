import styled from 'styled-components';

type Props = {
  score: number,
  xAxisMax: number
};

const BarChart = styled.div.attrs<Props>((props) => ({
  myScore: props.score
})) <Props>`
width: ${props => ((props.score / props.xAxisMax) * 320)}px;
height: 3px;
background: #f72585;
transition: all 0.3s ease 0s;
`
export default BarChart;