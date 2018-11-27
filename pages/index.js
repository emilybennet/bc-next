import React from "react";
import styled from "styled-components";

import Directive from "../components/Directive";
import Cover from "../components/Cover";
import StandardRegistration from "../components/StandardRegistration";

const EnlistFlow = styled.div`
  section {
    margin-bottom: 8em;
  }
`;

const Index = props => (
  <EnlistFlow>
    <Cover />
    <StandardRegistration />
    <Directive>Continue for Briefing</Directive>
  </EnlistFlow>
);

export default Index;
