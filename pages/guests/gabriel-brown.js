import styled from "styled-components";

import BasicLayout from "../../components/BasicLayout";
import Directive from "../../components/Directive";
import ProfileView from "../../components/ProfileView";

import Bio from "../../content/guest-bios/brown.mdx";

const GabrielBrown = props => (
  <BasicLayout pageTitle="Gabriel Brown">
    <Directive>Declassified Intel</Directive>
    <ProfileView
      name="Gabriel Brown"
      headshot="/static/images/guests/headshot/brown.jpg"
      Bio={Bio}
    />
  </BasicLayout>
);

export default GabrielBrown;
