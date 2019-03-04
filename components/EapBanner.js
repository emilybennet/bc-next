import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Muffin from "../static/images/icons/muffin.svg";

const Container = styled.div`
  background: rgb(245, 245, 245);
  color: ${props => props.theme.orange};
  display: block;
  font-weight: 600;
  letter-spacing: 0.08em;
  position: relative;
  text-transform: uppercase;
  transition: background 0.15s;
  width: 100%;
  z-index: 500;
  &:hover {
    background: rgb(230, 230, 230);
  }
  a {
    align-items: center;
    color: ${props => props.theme.orange};
    display: flex;
    padding: 0.5em 1em;
    width: 100%;
    svg {
      margin-left: auto;
    }
    path {
      fill: ${props => props.theme.orange};
    }
  }
`;

const EapBanner = props => (
  // <Container>
  //   <Link
  //     href="https://bronycon2019.eventbrite.com/?discount=MUFFIN#tickets"
  //     passHref
  //   >
  //     <a>
  //       <span>
  //         // Save $9.69 on 4-Day & 4-Day PLUS with code "MUFFIN" through Sunday.
  //       </span>
  //       <Muffin />
  //     </a>
  //   </Link>
  // </Container>
  <div />
);

export default EapBanner;
