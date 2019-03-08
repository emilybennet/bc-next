import styled from "styled-components";

import BasicLayout from "../../components/BasicLayout";
import Directive from "../../components/Directive";
import ProfileView from "../../components/ProfileView";

import Bio from "../../content/guest-bios/nicole-oliver.mdx";

const NicoleOliver = props => (
  <BasicLayout pageTitle="Nicole Oliver">
    <Directive>Declassified Intel</Directive>
    <ProfileView
      name="Nicole Oliver"
      headshot="/static/images/guests/headshot/oliver.jpg"
      Bio={Bio}
    />
  </BasicLayout>
);

export default NicoleOliver;
