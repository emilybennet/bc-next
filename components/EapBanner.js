import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Snowflake from "../static/images/icons/snowflake.svg";

const Container = styled.div`
  background: ${props => props.theme.gold};
  color: ${props => props.theme.deepAbyss};
  display: block;
  font-weight: 600;
  letter-spacing: 0.08em;
  position: relative;
  text-transform: uppercase;
  transition: background 0.15s;
  width: 100%;
  z-index: 500;
  &:hover {
    background: ${props => props.theme.yellow};
  }
  a {
    align-items: center;
    color: ${props => props.theme.deepAbyss};
    display: flex;
    padding: 0.5em 1em;
    width: 100%;
    svg {
      margin-left: auto;
    }
    path {
      fill: white;
    }
  }
`;

const EapBanner = props => (
  <Container>
    <Link href="/baltimore">
      <a>
        <span>// Incoming Transmission → Book Discounted Hotels Now</span>
      </a>
    </Link>
  </Container>
);

export default EapBanner;
