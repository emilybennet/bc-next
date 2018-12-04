import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Button from "./styled/Button";
import SectionHeading from "./styled/SectionHeading";

const Container = styled.section`
  display: block;
  max-width: ${props => props.theme.maxWidth};
  margin: 6em auto;
`;

const H2 = styled.h2`
  color: rgba(57, 255, 246, 0.05);
  font-family: ${props => props.theme.poppins};
  font-size: 6em;
  font-weight: 700;
  margin: 0;
  letter-spacing: 3px;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
`;

const Teaser = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  padding: 0 20px;
  width: 100%;
  > * {
    flex: 1;
  }
  @media (max-width: 800px) {
    display: block;
  }
`;

const TeaserText = styled.div`
  font-family: ${props => props.theme.poppins};
  font-size: 1.55em;
  font-weight: 300;
  line-height: 1.78;
  letter-spacing: 1.5px;
  @media (max-width: 800px) {
    font-size: 1em;
    line-height: initial;
  }
`;

const InlineLink = styled.a`
  color: ${props => props.theme.aqua};
  transition: all 0.15s;
  &:hover {
    color: ${props => props.theme.turquoise};
  }
`;

const Classified = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const DymoTape = styled.span`
  background: ${props => props.theme.abyss};
  border-radius: 2px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(57, 255, 246, 0.1);
  color: ${props => props.theme.gold};
  display: inline-block;
  font-family: ${props => props.theme.poppins};
  font-size: 1.22em;
  line-height: 1;
  letter-spacing: 1px;
  margin: 1em;
  padding: 0.6em 0.8em;
`;

const Dymo = ({ rotate, offsetX, ...props }) => (
  <div
    style={{
      textAlign: "center",
      transform: `rotate(${rotate || 0}deg) translateX(${offsetX || 0}px)`
    }}
  >
    <DymoTape>{props.children}</DymoTape>
  </div>
);

const TEASER_CONTENT = [
  {
    text: "Contests",
    rotate: 4,
    offsetX: 2
  },
  {
    text: "Concerts",
    rotate: -5,
    offsetX: -20
  },
  {
    text: "Lounges",
    rotate: 3,
    offsetX: 10
  },
  {
    text: "Marketplace",
    rotate: 5,
    offsetX: 11
  },
  {
    text: "Tournaments",
    rotate: -2,
    offsetX: -19
  },
  {
    text: "Friendship",
    rotate: -10,
    offsetX: 12
  },
  {
    text: "Gaming",
    rotate: -8,
    offsetX: 7
  },
  {
    text: "Cornhole",
    rotate: -4,
    offsetX: -17
  },
  {
    text: "Voice Actors",
    rotate: 0,
    offsetX: 22
  },
  {
    text: "Workshops",
    rotate: -4,
    offsetX: 8
  },
  {
    text: "Panels",
    rotate: 3,
    offsetX: -17
  },
  {
    text: "Cosplay",
    rotate: 5,
    offsetX: -22
  }
];

const HomeTease = props => (
  <Container>
    <SectionHeading text="Survey the Fun" id="events" />
    <Teaser>
      <TeaserText>
        <p>
          Many of the details for BronyCon 2019 are still in planning and are
          not ready to be declassified.
        </p>
        <Button href="https://airtable.com/shr4tT9iU9woR8rp6" target="_blank">
          Run a Panel/Activity
        </Button>
        <p>
          Wanna change the world?{" "}
          <Link href="/about">
            <InlineLink>Join our volunteer staff</InlineLink>
          </Link>{" "}
          and help us make the final BronyCon even better.
        </p>
      </TeaserText>
      <Classified>
        {TEASER_CONTENT.map(tag => (
          <Dymo rotate={tag.rotate} offsetX={tag.offsetX} key={tag.text}>
            {tag.text}
          </Dymo>
        ))}
      </Classified>
    </Teaser>
  </Container>
);

export default HomeTease;
