import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Logo from "../../static/images/bronycon-logo.svg";

const StyledLink = styled.a`
  align-items: center;
  cursor: help;
  display: flex;
  flex-direction: row;
  height: 0;
  justify-content: center;
  margin-bottom: 5vw;
  overflow: visible;
  transform: translateY(40%);
  width: 100%;

  svg {
    height: auto;
    max-width: ${props => props.theme.maxWidth};
    opacity: 0.05;
    position: relative;
    transform: translateY(0px);
    transition: 0.8s cubic-bezier(0, 0.54, 0.58, 1);
    width: 100%;
  }
  #bronycon-logo-mono {
    fill: ${props => props.theme.aqua};
  }
  &:hover {
    svg {
      transform: translateY(10px);
      opacity: 0.15;
    }
  }
  @media (max-width: 700px) {
    align-items: flex-start;
    transform: translateY(-30%);
    height: auto;
    margin-bottom: 0;
  }
`;

const Masthead = () => (
  <Link href="/about">
    <StyledLink>
      <Logo />
    </StyledLink>
  </Link>
);

export default Masthead;
