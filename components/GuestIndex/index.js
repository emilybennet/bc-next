import styled from "styled-components";

import BasicLayout from "../common/BasicLayout";
import Directive from "../common/Directive";
import SectionHeading from "../common/SectionHeading";
import GuestGrid from "../common/GuestGrid";

import { vips, community } from "../../content/guestList.js";

const Container = styled.section`
  display: block;
  max-width: ${props => props.theme.maxWidth};
  margin: 3em auto 6em;
`;

const GuestIndex = props => (
  <BasicLayout pageTitle="Guests">
    <Directive>High Value Assets</Directive>
    <div style={{ marginTop: "3em" }}>
      <SectionHeading text="Special Agents" />
      <Container>
        <GuestGrid guests={vips} />
      </Container>
      <SectionHeading text="Covert Agents" />
      <Container>
        <GuestGrid guests={community} />
      </Container>
    </div>
  </BasicLayout>
);

export default GuestIndex;
