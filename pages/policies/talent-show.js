import styled from "styled-components";

import BasicLayout from "../../components/BasicLayout";
import Directive from "../../components/Directive";
import PolicyView from "../../components/PolicyView";

import Content from "../../content/policy_talentshow.mdx";

const PressPolicies = props => (
  <BasicLayout pageTitle="Press Policy">
    <Directive>Will Not Self Destruct After Reading</Directive>
    <PolicyView heading="policies" Content={Content} />
  </BasicLayout>
);

export default PressPolicies;
