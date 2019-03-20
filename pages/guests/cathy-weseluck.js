import styled from "styled-components";

import BasicLayout from "../../components/BasicLayout";
import Directive from "../../components/Directive";
import ProfileView from "../../components/ProfileView";

import Bio from "../../content/guest-bios/cathy-weseluck.mdx";

const NicoleOliver = props => (
  <BasicLayout pageTitle="Cathy Weseluck">
    <Directive>Declassified Intel</Directive>
    <ProfileView
      name="Cathy Weseluck"
      headshot="/static/images/guests/headshot/weseluck.jpg"
      Bio={Bio}
    />
  </BasicLayout>
);

export default NicoleOliver;
