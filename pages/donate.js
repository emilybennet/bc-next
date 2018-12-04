import styled from "styled-components";

import BasicLayout from "../components/BasicLayout";
import Directive from "../components/Directive";
import SponsorRegistration from "../components/SponsorRegistration";

const DonatePage = props => (
  <BasicLayout>
    <Directive>For Your Eyes Only</Directive>
    <SponsorRegistration />
  </BasicLayout>
);

export default DonatePage;
