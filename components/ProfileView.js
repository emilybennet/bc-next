import React from "react";
import styled from "styled-components";

import SectionHeading from "./styled/SectionHeading";

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: ${props => props.theme.gridGap};
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  margin: 2.22em auto 0;
  img {
    width: 100%;
  }
`;

const StyledH2 = styled.h2`
  color: ${props => props.theme.aqua};
  font-family: ${props => props.theme.poppins};
  font-size: 2.7em;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 2.2em;
  margin-top: 0;
  margin-bottom: 0.5em;
  text-transform: uppercase;
`;

const ProfileView = ({ Bio, ...props }) => (
  <Container>
    <img src={props.headshot} />
    <section>
      <StyledH2>{props.name}</StyledH2>
      <Bio />
    </section>
  </Container>
);

export default ProfileView;
