import React from "react";
import styled from "styled-components";
import Link from "next/link";

// import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";
import Directive from "../common/Directive";

import GuestGrid from "../common/GuestGrid";
import { vips } from "../../content/guestList.js";

const Container = styled.section`
  display: block;
  max-width: ${props => props.theme.maxWidth};
  margin: 6em auto;
`;

const Lineup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 30px;
  margin: 2em 0 0 0;
`;

const GuestTease = props => (
  <Container id="guests">
    <Directive>Encounter High-Value Assets</Directive>
    <GuestGrid guests={vips} />
  </Container>
);

export default GuestTease;
