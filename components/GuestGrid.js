import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Button from "./styled/Button";
import SectionHeading from "./styled/SectionHeading";
import DossierCard from "./DossierCard";
import Directive from "./Directive";

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

const GUESTS_CONTENT = [
  {
    photo: "/static/images/guests/placeholders/Curtis.jpg",
    id: "unknown1"
  },
  {
    photo: "/static/images/guests/placeholders/Alex.jpg",
    id: "unknown2"
  },
  {
    photo: "/static/images/guests/nicole-oliver.jpg",
    name: "Nicole Oliver",
    id: "oliver"
  },
  {
    photo: "/static/images/guests/placeholders/Jason.jpg",
    id: "unknown3"
  },
  {
    photo: "/static/images/guests/placeholders/Justin.jpg",
    id: "unknown4"
  },
  {
    photo: "/static/images/guests/placeholders/Whitney.jpg",
    id: "unknown5"
  },
  {
    photo: "/static/images/guests/placeholders/Tyler.jpg",
    id: "unknown6"
  },
  {
    photo: "/static/images/guests/placeholders/Kris.jpg",
    id: "unknown7"
  }
  // {
  //   photo: "/static/images/guests/britt-mckillip.jpg",
  //   name: "Britt McKillip"
  // },
  // {
  //   photo: "/static/images/guests/cathy-weseluck.jpg",
  //   name: "Cathy Weseluck"
  // }
];

const GuestTease = props => (
  <Container>
    <Directive>Encounter High-Value Assets</Directive>
    <Lineup>
      {GUESTS_CONTENT.map(guest => (
        <DossierCard
          srcPath={guest.photo}
          name={guest.name}
          alt={guest.name}
          key={guest.id}
        />
      ))}
    </Lineup>
  </Container>
);

export default GuestTease;
