import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Button from "./styled/Button";
import SectionHeading from "./styled/SectionHeading";
import DossierCard from "./DossierCard";

const Container = styled.section`
  display: block;
  max-width: ${props => props.theme.maxWidth};
  margin: 6em auto;
`;

const Lineup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px 20px;
`;

const GUESTS_CONTENT = [
  {
    photo: "/static/images/guests/nicole-oliver.jpg",
    name: "Nicole Oliver"
  },
  {
    photo: "/static/images/guests/placeholders/Alex.jpg"
  },
  {
    photo: "/static/images/guests/placeholders/Curtis.jpg"
  },
  {
    photo: "/static/images/guests/placeholders/Jason.jpg"
  },
  {
    photo: "/static/images/guests/placeholders/Justin.jpg"
  },
  {
    photo: "/static/images/guests/placeholders/Whitney.jpg"
  },
  {
    photo: "/static/images/guests/britt-mckillip.jpg",
    name: "Britt McKillip"
  },
  {
    photo: "/static/images/guests/cathy-weseluck.jpg",
    name: "Cathy Weseluck"
  }
];

const GuestTease = props => (
  <Container>
    <SectionHeading text="High-Value Assets" id="guests" />
    <Lineup>
      {GUESTS_CONTENT.map(guest => (
        <DossierCard 
          srcPath={guest.photo} 
          name={guest.name}
          alt={guest.name} 
        />
      ))}
    </Lineup>
  </Container>
);

export default GuestTease;