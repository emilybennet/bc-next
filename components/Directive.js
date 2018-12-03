import React from "react";
import styled, { keyframes } from "styled-components";
import IconNavigator from "../static/images/icons/navigator-hollow.svg";

const nudgeNavigator = keyframes`
  0% {
    transform: translateY(0px) rotate(90deg);
  }
  50% {
      transform: translateY(-4px) rotate(90deg);
  }
  100% {
      transform: translateY(0px) rotate(90deg);
  }
`;

const StyledDiv = styled.div`
  align-items: center;
  color: ${props => props.theme.aqua};
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.1em;
  letter-spacing: 4px;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  span {
    display: block;
    margin-bottom: 1.1em;
  }
  svg {
    animation: ${nudgeNavigator} 4s cubic-bezier(0, 0.54, 0.58, 1) infinite;
    fill: ${props => props.theme.aqua};
    transform: rotate(90deg);
    width: 1.77em;
  }
`;

const Directive = props => (
  <StyledDiv aria-hidden="true">
    <span>{props.children}</span>
    <IconNavigator />
  </StyledDiv>
);

export default Directive;
