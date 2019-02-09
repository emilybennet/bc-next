import styled from "styled-components";

import BasicLayout from "../../components/BasicLayout";
import Directive from "../../components/Directive";
import ProfileView from "../../components/ProfileView";

import Bio from "../../content/guest-bios/andrea-libman.mdx";

const AndreaLibman = props => (
  <BasicLayout pageTitle="Andrea Libman">
    <Directive>Declassified Intel</Directive>
    <ProfileView name="Andrea Libman" Bio={Bio} />
  </BasicLayout>
);

export default AndreaLibman;
