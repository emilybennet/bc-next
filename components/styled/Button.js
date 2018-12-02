import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledAnchor = styled.a`
  background: ${props => props.theme.aqua};
  border-radius: 3px;
  color: ${props => props.theme.midnight};
  cursor: pointer;
  display: block;
  font-family: ${props => props.theme.poppins};
  font-size: 0.88em;
  font-weight: 600;
  letter-spacing: 3.2px;
  line-height: 1;
  padding: 0.88em;
  text-align: center;
  text-transform: uppercase;
  transition: background 0.15s;
  &:hover {
    background: ${props => props.theme.turquoise};
  }
`;

const Button = props => (
  <Link href={props.href} passHref>
    <StyledAnchor target={props.target} className={props.className}>
      {props.children}
    </StyledAnchor>
  </Link>
);

export default Button;
