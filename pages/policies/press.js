import styled from "styled-components";

import BasicLayout from "../../components/BasicLayout";
import Directive from "../../components/Directive";
import PolicyView from "../../components/PolicyView";

import Content from "../../content/policy_press.mdx";

const PressPolicies = props => (
  <BasicLayout pageTitle="Press Policy">
    <Directive>Official Protocol</Directive>
    <PolicyView heading="policies" Content={Content} />
  </BasicLayout>
);

export default PressPolicies;
