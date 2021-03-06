import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Button from "./HollowButton";
import Logo from "../../static/images/bronycon-logo.svg";

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.7em 2.2em;
  width: 100%;

  @media (max-width: 800px) {
    justify-content: center;
  }
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
  &:active {
    svg {
      fill: ${props => props.theme.sapphire};
    }
  }
`;

const Header = props => (
  <StyledHeader className={props.className}>
    <Link href="/">
      <LogoWrap>
        <Logo />
      </LogoWrap>
    </Link>
    {/* <Button className="btn" href="/">
      Attend
    </Button> */}
  </StyledHeader>
);

export default Header;
