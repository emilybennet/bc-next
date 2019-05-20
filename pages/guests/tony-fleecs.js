import styled from "styled-components";

import BasicLayout from "../../components/BasicLayout";
import Directive from "../../components/Directive";
import ProfileView from "../../components/ProfileView";

import Bio from "../../content/guest-bios/tony-fleecs.mdx";

const TonyFleecs = props => (
  <BasicLayout pageTitle="Tony Fleecs">
    <Directive>Declassified Intel</Directive>
    <ProfileView
      name="Tony Fleecs"
      headshot="/static/images/guests/headshot/fleecs.jpg"
      Bio={Bio}
    />
  </BasicLayout>
);

export default TonyFleecs;
