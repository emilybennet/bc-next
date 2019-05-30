import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";
import DossierCard from "./DossierCard";
import Directive from "../common/Directive";

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
    photo: "/static/images/guests/preview/faust.jpg",
    name: "Lauren Faust",
    id: "faust",
    url: "/guests/lauren-faust"
  },
  {
    photo: "/static/images/guests/preview/shoichet.jpg",
    name: "Rebecca Shoichet",
    id: "shoichet",
    url: "/guests/rebecca-shoichet"
  },
  {
    photo: "/static/images/guests/preview/libman.jpg",
    name: "Andrea Libman",
    id: "libman",
    url: "/guests/andrea-libman"
  },
  {
    photo: "/static/images/guests/preview/oliver.jpg",
    name: "Nicole Oliver",
    id: "oliver",
    url: "/guests/nicole-oliver"
  },
  {
    photo: "/static/images/guests/preview/weseluck.jpg",
    name: "Cathy Weseluck",
    id: "weseluck",
    url: "/guests/cathy-weseluck"
  },
  {
    photo: "/static/images/guests/preview/creber.jpg",
    name: "Michelle Creber",
    id: "creber",
    url: "/guests/michelle-creber"
  },
  {
    photo: "/static/images/guests/placeholders/steve.jpg",
    id: "unknown9",
    pos: 6
  },
  {
    photo: "/static/images/guests/preview/mckillip.jpg",
    name: "Britt McKillip",
    id: "mckillip",
    url: "/guests/britt-mckillip"
  },
  {
    photo: "/static/images/guests/preview/thiessen.jpg",
    name: "Jayson Thiessen",
    id: "thiessen",
    url: "/guests/jayson-thiessen"
  },
  {
    photo: "/static/images/guests/placeholders/eva.jpg",
    id: "unknown11",
    pos: 11
  },
  {
    photo: "/static/images/guests/preview/fleecs.jpg",
    name: "Tony Fleecs",
    id: "fleecs",
    url: "/guests/tony-fleecs"
  },
  {
    photo: "/static/images/guests/preview/price.jpg",
    name: "Andy Price",
    id: "price",
    url: "/guests/andy-price"
  },
  {
    photo: "/static/images/guests/placeholders/ingrid.jpg",
    id: "unknown13",
    pos: 13
  },
  {
    photo: "/static/images/guests/preview/brown.jpg",
    name: "Gabriel Brown",
    id: "brown",
    url: "/guests/gabriel-brown"
  }
];

const GuestTease = props => (
  <Container id="guests">
    <Directive>Encounter High-Value Assets</Directive>
    <Lineup>
      {GUESTS_CONTENT.map(guest => (
        <DossierCard
          srcPath={guest.photo}
          name={guest.name}
          alt={guest.name}
          url={guest.url}
          key={guest.id}
        />
      ))}
    </Lineup>
  </Container>
);

export default GuestTease;
