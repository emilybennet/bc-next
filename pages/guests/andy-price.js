import styled from "styled-components";

import BasicLayout from "../../components/BasicLayout";
import Directive from "../../components/Directive";
import ProfileView from "../../components/ProfileView";

import Bio from "../../content/guest-bios/andy-price.mdx";

const AndyPrice = props => (
  <BasicLayout pageTitle="Andy Price">
    <Directive>Declassified Intel</Directive>
    <ProfileView
      name="Andy Price"
      headshot="/static/images/guests/headshot/price.jpg"
      Bio={Bio}
    />
  </BasicLayout>
);

export default AndyPrice;
