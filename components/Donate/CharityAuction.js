import React from "react";
import styled from "styled-components";
import Link from "next/link";

import SectionHeading from "../common/SectionHeading";

const Section = styled.section`
  margin: 0 auto;
  padding: 4em 0;
`;

const LeadParagraph = styled.p`
  font-size: 1.5em;
  font-weight: 300;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 2em auto 3em;
  text-align: center;
  @media (max-width: ${(props) => props.theme.maxWidth}) {
    padding: 0 20px;
  }
  a {
    color: ${(props) => props.theme.gold};
    text-decoration: underline;
    &:hover {
      color: ${(props) => props.theme.yellow};
    }
  }
`;

const CharityAuction = (props) => (
  <Section>
    <SectionHeading text="Charity Auction" id="charityauction" />
    <LeadParagraph>
      Join us on Sunday afternoon for the convention's penultimate
      event—BronyCon annual Charity Auction. Proceeds will be donated to{" "}
      <a href="https://curesearch.org/" target="_blank">
        CureSearch for Children’s Cancer Research
      </a>
      . Donations can be dropped off at the charity outpost in Blank Canvas's
      Marketplace throughout the weekend. Already know what you'll be donating?{" "}
      <a href="https://goo.gl/forms/QkF9ffKA1N2rl6353" target="_blank">
        Disclose your donation to our Charity team
      </a>
      .
    </LeadParagraph>
  </Section>
);

export default CharityAuction;
