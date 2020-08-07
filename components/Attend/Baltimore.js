import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Directive from "../common/Directive";
import RegisterCard from "../common/RegisterCard";
import DarkButton from "../common/DarkButton";

const Container = styled.section`
  margin: 6em 0;
`;

const Lead = styled.p`
  font-size: 1.5em;
  font-weight: 300;
  max-width: ${props => props.theme.maxWidth};
  margin: 2em auto 3em;
  @media (max-width: ${props => props.theme.maxWidth}) {
    padding: 0 20px;
    text-align: center;
  }
`;

const Options = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 3em auto 0;
  max-width: ${props => props.theme.maxWidth};
  & > * {
    flex: 1;
  }
  @media (max-width: 800px) {
    display: block;
  }
`;

const RegOption = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  margin: 0 auto;
  max-width: 365px;
  padding: 10px;
  text-align: center;
  img {
    max-width: 100%;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.aqua};
    grid-column: 1;
    grid-row: 1;
  }
  a {
    margin-top: 50%;
    grid-column: 1;
    grid-row: 1;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const BaltimoreCallout = props => (
  <Container>
    <Directive>Location Declassified</Directive>
    <Options>
      <Lead>
        Baltimore is a rich urban landscape offering much to explore. Discounted
        safehouses are available along with around town activities to help
        agents acclimate to the new environment.
      </Lead>
      <div>
        <RegOption>
          <img
            src={`${process.env.basePath}/static/images/baltimore-map-thumb.jpg`}
            alt="Baltimore Map"
          />
          <DarkButton text="Website" href="/baltimore">
            Explore Baltimore
          </DarkButton>
        </RegOption>
      </div>
    </Options>
  </Container>
);

export default BaltimoreCallout;
