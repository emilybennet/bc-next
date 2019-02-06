import React from "react";
import styled from "styled-components";

import Directive from "../components/Directive";
import EapBanner from "../components/EapBanner";
import Cover from "../components/Cover";
import StandardRegistration from "../components/StandardRegistration";
import HomeTease from "../components/HomeTease";
import GuestTease from "../components/GuestGrid";
import Footer from "../components/Footer";

const EnlistFlow = styled.div`
  section {
    margin-bottom: 8em;
  }
`;

const Index = props => (
  <EnlistFlow>
    <EapBanner />
    <Cover />
    <StandardRegistration />
    <GuestTease />
    <Directive>Continue for Briefing</Directive>
    <HomeTease />
    <Footer />
  </EnlistFlow>
);

export default Index;
