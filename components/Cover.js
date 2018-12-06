import React from "react";
import styled from "styled-components";

import Masthead from "./Masthead";
import Directive from "./Directive";
import Annual from "../static/images/bronycon-2019-annual_logo-website.svg";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 20px;
  width: 100vw;
  @media (max-width: 700px) {
    min-height: unset;
  }
`;

const Hero = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const HeroDisplay = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;

  svg {
    margin-left: -1em;
    grid-column: 1 / 6;
    transform: rotate(-10deg);
    width: 110%;
    #structure {
      fill: ${props => props.theme.turquoise};
    }
    #bc-abbreviated {
      fill: ${props => props.theme.white};
    }
    #arrows {
      fill: ${props => props.theme.gold};
    }
    #dots {
      fill: ${props => props.theme.aqua};
    }
  }

  .invite {
    grid-column: 7 / 12;
  }

  h2 {
    font-size: 1.4em;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  p {
    color: ${props => props.theme.aqua};
    font-size: 1em;
    line-height: 2;
    margin-bottom: 15px;
  }

  @media (max-width: 700px) {
    display: flex;
    margin-bottom: 5em;
    padding: 0 5em;
    svg {
      display: none;
    }
  }
`;

const Dymo = styled.span`
  /* font-feature-settings: "ss01"; */
  font-variant-numeric: slashed-zero;

  background: ${props => props.theme.black};
  border-radius: 2px;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2);
  color: ${props => props.theme.gold};
  display: inline-block;
  font-family: ${props => props.theme.plex};
  font-size: 2em;
  font-style: italic;
  font-weight: 300;
  line-height: 1;
  letter-spacing: initial;
  margin: 0.5em -5em 0.5em 0;
  padding: 0.3em 0.5em;
  position: relative;
  transform: rotate(-3deg) perspective(200px) translateZ(47px) translateY(-10px);
  transition: transform 0.25s ease-out;
  white-space: nowrap;

  @media (max-width: 1000px) {
    font-size: 1.5em;
    white-space: normal;
  }
`;

const BlockSpan = styled.span`
  display: block;
`;

const Cover = props => (
  <Container>
    <Masthead />
    <Hero>
      <HeroDisplay>
        <Annual />
        <div className="invite">
          <h2>
            <BlockSpan>Join us on</BlockSpan> <Dymo>Aug 1-4, 2019</Dymo>
            <BlockSpan>for a fandom celebration unlike any other.</BlockSpan>
          </h2>
          <p>
            All good things must come to an end. BronyCon returns one final time
            to the Baltimore Convention Center in Baltimore, Maryland, USA.
          </p>
        </div>
      </HeroDisplay>
    </Hero>
    <Directive>Proceed to Initiation</Directive>
  </Container>
);

export default Cover;
