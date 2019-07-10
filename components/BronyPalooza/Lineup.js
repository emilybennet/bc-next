import React from "react";
import styled from "styled-components";

import BasicLayout from "../common/BasicLayout";
import Directive from "../common/Directive";

const PerformerList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
`;

const Performer = styled.li`
  height: 50vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  font-size: 3em;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: .5em;

  @media (max-width: 1300px) {
    width: auto;
    height: 3em;
    font-size: 2em;
    letter-spacing: .15em;
  }
`;

const PerformerHeader = styled.li`
  height: 50vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  font-size: 2em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: .15em;

  @media (max-width: 1300px) {
    width: auto;
    height: 6em;
    font-size: 1.4em;
    letter-spacing: .15em;
  }
`;

const Lineup = props => (
  <PerformerList>
    <Performer>Hollowpoint</Performer>
    <Performer>Seventh Element</Performer>
    <Performer>John Kenza</Performer>
    <Performer>YourEnigma</Performer>
    <Performer>Geek</Performer>
    <Performer>Loophoof</Performer>
    <Performer>Elevative</Performer>
    <Performer>FLIGHTRUSH</Performer>
    <Performer>R3CTIFIER</Performer>
    <Performer>Chang31ing</Performer>
    <Performer>Strach</Performer>
    <Performer>VinylTastic</Performer>
    <Performer>Vylet</Performer>
    <Performer>Garnika</Performer>
    <Performer>Silva Hound</Performer>
    <PerformerHeader>Plus the BronyPalooza Superband, featuring: </PerformerHeader>
    <Performer>Luck Rock</Performer>
    <Performer>Crusader</Performer>
    <Performer>4everfree brony </Performer>
    <Performer>Cyril</Performer>
    <Performer>P1K</Performer>
    <Performer>The Wonderbolts</Performer>
  </PerformerList>
);

export default Lineup;