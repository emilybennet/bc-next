import React from "react";
import styled from "styled-components";

import SectionHeading from "./styled/SectionHeading";
import RegisterCard from "./RegisterCard";

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
  flex-direction: row-reverse;
  justify-content: center;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  & > * {
    flex: 1;
  }
  @media (max-width: 650px) {
    display: block;
  }
`;

const RegOption = styled.div`
  margin: 0 auto;
  max-width: 365px;
  padding: 10px;
  text-align: center;
`;

const SPIRIT_OPTION = {
  name: "Spirit",
  price: 35,
  url: "https://bronycon2019.eventbrite.com#tickets",
  lead: "Remote Swag",
  description:
    "We'll ship you a limited edition Spirit attendee badge, a BronyCon branded orange lanyard, and a program book."
};

const SpiritRegistration = props => (
  <Container>
    <SectionHeading text="Attend in Spirit" id="spirit" />
    <Options>
      <Lead>
        Super fans can now support the convention even if they're unable to join
        us in Baltimore. Spirit packages ship after the event. Free shipping
        within the United States, +$10 for international.
      </Lead>
      <div>
        <RegOption>
          <RegisterCard {...SPIRIT_OPTION} />
        </RegOption>
      </div>
    </Options>
  </Container>
);

export default SpiritRegistration;
