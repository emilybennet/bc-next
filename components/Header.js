import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Button from "./styled/HollowButton";
import Logo from "../static/images/bronycon-logo.svg";

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.7em 2.2em;
  width: 100%;
`;

const LogoWrap = styled.a`
  display: flex;
  width: 240px;

  svg {
    fill: ${props => props.theme.aqua};
    transition: fill 0.15s;
    width: 100%;
  }
  &:hover {
    svg {
      fill: ${props => props.theme.turquoise};
    }
  }
`;

const Header = props => (
  <StyledHeader>
    <Link href="/">
      <LogoWrap>
        <Logo />
      </LogoWrap>
    </Link>
    <Button href="/">Enlist</Button>
  </StyledHeader>
);

export default Header;
