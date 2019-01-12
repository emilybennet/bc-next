import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Snowflake from "../static/images/icons/snowflake.svg";

const Container = styled.div`
  background: ${props => props.theme.ruby};
  color: ${props => props.theme.white};
  display: block;
  font-weight: 600;
  letter-spacing: 0.08em;
  position: relative;
  text-transform: uppercase;
  transition: background 0.15s;
  width: 100%;
  z-index: 500;
  &:hover {
    background: #d33056;
  }
  a {
    align-items: center;
    color: ${props => props.theme.white};
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
  // <Container>
  //   <Link href="/holiday">
  //     <a>
  //       <span>// Incoming Transmission →</span> <Snowflake />
  //     </a>
  //   </Link>
  // </Container>
  <div />
);

export default EapBanner;
