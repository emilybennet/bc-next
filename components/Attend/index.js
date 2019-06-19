import React from "react";
import styled from "styled-components";

import Directive from "../common/Directive";
import EapBanner from "../EapBanner";
import Cover from "./Cover";
import StandardRegistration from "./StandardRegistration";
import HomeTease from "./HomeTease";
import PremierEvents from "./PremierEvents";
import GuestTease from "./GuestTease";
import Footer from "../common/Footer";

const EnlistFlow = styled.div`
  section {
    margin-bottom: 8em;
  }
`;

const Attend = props => (
  <EnlistFlow>
    <EapBanner />
    <Cover />
    <StandardRegistration />
    <GuestTease />
    <Directive>Continue for Briefing</Directive>
    {/* <HomeTease /> */}
    <PremierEvents />
    <Footer />
  </EnlistFlow>
);

export default Attend;
