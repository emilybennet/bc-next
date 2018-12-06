import React from "react";
import styled from "styled-components";

import SectionHeading from "./styled/SectionHeading";
import SponsorTier from "./SponsorTier";

import IconBronze from "../static/images/icons/sponsor-heart.svg";
import IconSilver from "../static/images/icons/sponsor-club.svg";
import IconGold from "../static/images/icons/sponsor-spade.svg";
import IconDiamond from "../static/images/icons/sponsor-diamond.svg";

const Section = styled.section`
  margin: 0 auto;
  padding: 4em 0;
`;

const LeadParagraph = styled.p`
  font-size: 1.5em;
  font-weight: 300;
  max-width: ${props => props.theme.maxWidth};
  margin: 2em auto 3em;
  text-align: center;
`;

const TierWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  @media (max-width: ${props => props.theme.maxWidth}) {
    padding: 0 20px;
  }
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SPONSOR_TIERS = [
  {
    name: "Bronze",
    Icon: IconBronze,
    price: 250,
    url: "https://bronycon2019.eventbrite.com",
    color: "#D291BE",
    axLevel: 1,
    percent: 100,
    note: ""
  },
  {
    name: "Silver",
    Icon: IconSilver,
    price: 500,
    url: "https://bronycon2019.eventbrite.com",
    color: "#6ED2FA",
    axLevel: 2,
    percent: 100,
    note: ""
  },
  {
    name: "Gold",
    Icon: IconGold,
    price: 1000,
    url: "https://bronycon2019.eventbrite.com",
    color: "#FFC30F",
    axLevel: 3,
    percent: 100,
    note: ""
  },
  {
    name: "Diamond",
    Icon: IconDiamond,
    price: 2000,
    url: "https://bronycon2019.eventbrite.com",
    color: "#1FB3AC",
    axLevel: 4,
    percent: 100,
    note: "Partner hotel accommodations."
  }
];

const SponsorRegistration = props => (
  <Section>
    <SectionHeading text="Sponsorships" />
    <LeadParagraph>
      The donations of our sponsors are what make BronyCon possible. When you
      give to our event, you’ll receive upgrades to your attendee
      experience&thinsp;—&thinsp;like swag and perks&thinsp;—&thinsp;as a way
      for us to say “thank you” for your generosity.
    </LeadParagraph>

    <TierWrap>
      {SPONSOR_TIERS.map(t => (
        <SponsorTier {...t} key={t.name} />
      ))}
    </TierWrap>
  </Section>
);

export default SponsorRegistration;
