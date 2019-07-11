import React from "react";
import styled from "styled-components";

import BasicLayout from "../common/BasicLayout";
import Directive from "../common/Directive";

import RedactedName from "../../static/images/bp-redacted-name.svg";

const PerformerList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
`;

const Performer = styled.li`
  min-height: 50vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  font-size: 3em;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.5em;

  span {
    display: block;
  }

  svg {
    height: 40px;
    margin-bottom: 0.25em;
  }

  path {
    fill: ${props => props.theme.white};
  }

  @media (max-width: 1300px) {
    width: auto;
    min-height: 3em;
    font-size: 2em;
    letter-spacing: 0.15em;

    svg {
      height: 15px;
      margin-bottom: 0.25em;
    }
  }
`;

const SuperBandPerformer = styled.span`
  min-height: 15vh;
`;

const SetTime = styled.span`
  color: ${props => props.theme.gold};
  display: block;
  font-size: 0.25em;
  letter-spacing: 1em;
`;

const PerformerHeader = styled.span`
  display: block;
  margin: 4em;
  font-size: 0.5em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  /* width: 100%: */

  @media (max-width: 1300px) {
    width: auto;
    /* height: 6em; */
    margin-bottom: 1em;
    font-size: 1.4em;
    letter-spacing: 0.15em;
    font-size: 0.5em;
  }
`;

// const PerformerHeader = styled.li`
//   height: 50vh;
//   width: 100vw;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   margin: 0;
//   font-size: 2em;
//   font-weight: bold;
//   text-transform: uppercase;
//   letter-spacing: 0.15em;

//   @media (max-width: 1300px) {
//     width: auto;
//     height: 6em;
//     font-size: 1.4em;
//     letter-spacing: 0.15em;
//   }
// `;

const Lineup = props => (
  <PerformerList>
    <Performer>
      Hollowpoint
      <SetTime>Thursday @ 7:00pm</SetTime>
    </Performer>
    <Performer>
      Seventh Element
      <SetTime>Thursday @ 7:40pm</SetTime>
    </Performer>
    <Performer>
      John Kenza
      <SetTime>Thursday @ 8:20pm</SetTime>
    </Performer>
    <Performer>
      YourEnigma
      <SetTime>Thursday @ 8:55pm</SetTime>
    </Performer>
    <Performer>
      GeekBrony
      <SetTime>Thursday @ 9:30pm</SetTime>
    </Performer>
    <Performer>
      loophoof
      <SetTime>Thursday @ 10:05pm</SetTime>
    </Performer>
    <Performer>
      Elevative
      <SetTime>Thursday @ 10:40pm</SetTime>
    </Performer>
    <Performer>
      FLIGHTRUSH
      <SetTime>Thursday @ 11:15pm</SetTime>
    </Performer>
    <Performer>
      R3CTIFIER
      <SetTime>Thursday @ 11:50pm</SetTime>
    </Performer>
    <Performer>
      Chang31ing
      <SetTime>Friday @ 12:25am</SetTime>
    </Performer>
    <Performer>
      StrachAttack
      <SetTime>Friday @ 1:00am</SetTime>
    </Performer>
    <Performer>
      VinylTastic
      <SetTime>Friday @ 11:00pm</SetTime>
    </Performer>
    <Performer>
      Vylet Pony
      <SetTime>Friday @ 11:35pm</SetTime>
    </Performer>
    <Performer>
      <RedactedName />
      <SetTime>Saturday @ 12:10am</SetTime>
    </Performer>
    <Performer>
      Silva Hound
      <SetTime>Saturday @ 1:00am</SetTime>
    </Performer>
    <Performer>
      Michelle Creber
      <br />
      Black Gryph0n,
      <br />
      &amp; Baasik
      <SetTime>Saturday @ 8:00pm</SetTime>
    </Performer>

    <Performer>
      <PerformerHeader>The BronyPalooza Superband, featuring:</PerformerHeader>
      <span>Luck Rock</span>
      <span>Crusader!</span>
      <span>Cyril the Wolf</span>
      <span>P1K</span>
      <span>The Wonderbolts!</span>
      <SetTime>Saturday @ 9:40pm</SetTime>
    </Performer>

    <Performer>
      Eurobeat Brony
      <SetTime>Sunday @ 1:00am</SetTime>
    </Performer>
  </PerformerList>
);

export default Lineup;
