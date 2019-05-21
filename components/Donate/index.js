import styled from "styled-components";

import BasicLayout from "../common/BasicLayout";
import Directive from "../common/Directive";
import SponsorRegistration from "./SponsorRegistration";
import SpiritRegistration from "./SpiritRegistration";
import CharityAuction from "./CharityAuction";

const DonatePage = props => (
  <BasicLayout pageTitle="Support the Convention">
    <Directive>For Your Eyes Only</Directive>
    <SponsorRegistration />
    <SpiritRegistration />
    <CharityAuction />
  </BasicLayout>
);

export default DonatePage;
