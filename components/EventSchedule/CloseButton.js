import styled from "styled-components";
import PropTypes from "prop-types";

const CloseShape = styled.a`
  align-items: center;
  background: transparent;
  border: 2px solid ${props => props.theme.ruby};
  border-radius: 35px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 30px;
  justify-items: center;
  position: absolute;
  right: 20px;
  transition: background 0.15s;
  top: 20px;
  width: 30px;
  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
  div {
    background: ${props => props.theme.ruby};
    grid-column-start: 1;
    grid-row-start: 1;
    height: 2px;
    width: 20px;
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

CloseBtn.propTypes = {
  /**
   * What should happen on click
   */
  action: PropTypes.func.isRequired
}

export default CloseBtn;
