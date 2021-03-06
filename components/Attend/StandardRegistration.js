import React from "react";
import styled from "styled-components";
import Link from "next/link";

import RegisterCard from "../common/RegisterCard";

const Container = styled.section`
  display: block;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const H2 = styled.h2`
  color: ${props => props.theme.aqua};
  display: block;
  font-size: 1.1em;
  font-weight: 400;
  letter-spacing: 4px;
  margin-bottom: 2em;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
`;

const Options = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: row;
  justify-content: center;
  > div {
    flex: 1;
  }
  @media (max-width: 700px) {
    display: block;
  }
`;

const Footer = styled.footer`
  display: block;
  line-height: 1.33em;
  letter-spacing: 2px;
  padding: 2em 0.5em;
  text-align: center;
  text-transform: uppercase;
  a {
    color: ${props => props.theme.aqua};
    font-weight: 700;
    padding: 0 0.25em;
    margin-left: 1.75em;
    transition: color 0.15s;
    &:hover {
      color: ${props => props.theme.turquoise};
    }
    &:focus {
      outline: none;
      background: ${props => props.theme.sapphire};
      color: ${props => props.theme.midnight};
      box-shadow: 0 0 0 3px ${props => props.theme.sapphire};
      border-radius: 1px;
    }
  }
  @media (max-width: 700px) {
    a {
      display: block;
    }
  }
`;

const BADGES = {
  SINGLE_DAY: {
    name: "1-Day",
    price: 50,
    url: "https://bronycon2019.eventbrite.com#tickets",
    lead: "Visit for a Day",
    description: ""
  },
  WEEKEND_YOUTH: {
    name: "4-Day Youth",
    price: 45,
    url: "https://bronycon2019.eventbrite.com#tickets",
    lead: "Junior Agents",
    description: "Ages 0–5 are free!"
  },
  WEEKEND: {
    name: "4-Day",
    price: 80,
    url: "https://bronycon2019.eventbrite.com#tickets",
    lead: "All-Weekend Access",
    description:
      "Access to the event for the entire weekend. Youth, senior, and service member discounts are available."
  },
  WEEKEND_PLUS: {
    name: "4-Day PLUS",
    price: 150,
    url: "https://bronycon2019.eventbrite.com#tickets",
    lead: "Access + Exclusives",
    description:
      "Badge includes everything that comes with a 4-Day badge, plus an exclusive poster and t-shirt."
  }
};

const StandardRegistration = props => (
  <Container id="register">
    <H2>Choose Your Clearance Level</H2>
    <Options>
      <RegisterCard {...BADGES.SINGLE_DAY} />
      <RegisterCard {...BADGES.WEEKEND_YOUTH} />
      <RegisterCard {...BADGES.WEEKEND} />
      {/* <RegisterCard {...BADGES.WEEKEND_PLUS} /> */}
    </Options>
    <Footer>
      Looking to help bankroll our operation?
      <Link href="/donate">
        <a>See how to become a sponsor →</a>
      </Link>
    </Footer>
  </Container>
);

export default StandardRegistration;
