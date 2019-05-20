import styled from "styled-components";

import BasicLayout from "../components/BasicLayout";
import Directive from "../components/Directive";
import SponsorRegistration from "../components/SponsorRegistration";
import SpiritRegistration from "../components/SpiritRegistration";
import CharityAuction from "../components/CharityAuction";

const DonatePage = props => (
  <BasicLayout pageTitle="Support the Convention">
    <Directive>For Your Eyes Only</Directive>
    <SponsorRegistration />
    <SpiritRegistration />
    <CharityAuction />
  </BasicLayout>
);

export default DonatePage;
