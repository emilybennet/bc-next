import styled from "styled-components";

const Dymo = styled.span`
  background: ${props => props.theme.black};
  color: ${props => props.theme.gold};
  display: inline-block;
  font-family: ${props => props.theme.plex};
  font-size: 0.8em;
  font-variant-numeric: slashed-zero;
  padding: 0.4em 0.6em;
  position: absolute;
  /* left: -110px; */
  left: -7.64em;

  &:nth-child(2n + 1) {
    transform: rotate(-3.47deg);
  }
  &:nth-child(3n + 2) {
    transform: rotate(6.04deg);
  }
  &:nth-child(5n + 3) {
    transform: rotate(-7.38deg);
  }
  &:nth-child(7n + 5) {
    transform: rotate(2.23deg);
  }
  &:nth-child(11n + 7) {
    transform: rotate(3.14deg);
  }
`;

const TimeDymo = ({ time }) => <Dymo>{time}</Dymo>;

export default TimeDymo;
