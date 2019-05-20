import styled from "styled-components";

import BasicLayout from "../../components/BasicLayout";
import Directive from "../../components/Directive";
import ProfileView from "../../components/ProfileView";

import Bio from "../../content/guest-bios/creber.mdx";

const MichelleCreber = props => (
  <BasicLayout pageTitle="Michelle Creber">
    <Directive>Declassified Intel</Directive>
    <ProfileView
      name="Michelle Creber"
      headshot="/static/images/guests/headshot/creber.jpg"
      Bio={Bio}
    />
  </BasicLayout>
);

export default MichelleCreber;
