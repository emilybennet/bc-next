import styled from "styled-components";

import BasicLayout from "../../components/BasicLayout";
import Directive from "../../components/Directive";
import ProfileView from "../../components/ProfileView";

import Bio from "../../content/guest-bios/britt-mckillip.mdx";

// test

const GuestBioPage = props => (
  <BasicLayout pageTitle="Britt McKillip">
    <Directive>Declassified Intel</Directive>
    <ProfileView
      name="Britt McKillip"
      headshot="/static/images/guests/headshot/mckillip.jpg"
      Bio={Bio}
    />
  </BasicLayout>
);

export default GuestBioPage;
