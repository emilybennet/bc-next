import styled from "styled-components";

const CloseShape = styled.a`
  align-items: center;
  background: transparent;
  border: 3px solid ${props => props.theme.abyss};
  border-radius: 35px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 40px;
  justify-items: center;
  position: absolute;
  right: 20px;
  transition: background 0.15s;
  top: 20px;
  width: 40px;
  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
  div {
    background: ${props => props.theme.abyss};
    grid-column-start: 1;
    grid-row-start: 1;
    height: 3px;
    width: 25px;
    &:first-child {
      transform: rotate(45deg);
    }
    &:last-child {
      transform: rotate(-45deg);
    }
  }
`;

const CloseBtn = ({ action }) => (
  <CloseShape onClick={() => action()}>
    <div />
    <div />
  </CloseShape>
);

export default CloseBtn;
