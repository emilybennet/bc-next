import React from "react";
import styled from "styled-components";
import Link from "next/link";

import DossierCard from "./DossierCard";

const Lineup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 30px;
  margin: 2em 0 0 0;
`;

const GuestTease = props => (
  <Lineup>
    {props.guests.map(guest => (
      <DossierCard
        srcPath={guest.photo}
        name={guest.name}
        alt={guest.name}
        url={guest.url}
        key={guest.id}
      />
    ))}
  </Lineup>
);

export default GuestTease;
