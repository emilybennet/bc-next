import styled from "styled-components";

import BasicLayout from "../common/BasicLayout";
import Directive from "../common/Directive";
import ProfileView from "./ProfileView";

const GuestProfile = props => (
  <BasicLayout pageTitle={`${props.name}`}>
    <Directive>Declassified Intel</Directive>
    <ProfileView {...props} />
  </BasicLayout>
);

export default GuestProfile;
