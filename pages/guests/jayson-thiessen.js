import styled from "styled-components";

import BasicLayout from "../../components/BasicLayout";
import Directive from "../../components/Directive";
import ProfileView from "../../components/ProfileView";

import Bio from "../../content/guest-bios/jayson-thiessen.mdx";

// test

const GuestBioPage = props => (
  <BasicLayout pageTitle="Jayson Thiessen">
    <Directive>Declassified Intel</Directive>
    <ProfileView
      name="Jayson Thiessen"
      headshot="/static/images/guests/headshot/thiessen.jpg"
      Bio={Bio}
    />
  </BasicLayout>
);

export default GuestBioPage;
