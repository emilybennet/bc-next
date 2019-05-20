import styled from "styled-components";

import BasicLayout from "../../components/BasicLayout";
import Directive from "../../components/Directive";
import PolicyView from "../../components/PolicyView";

import Content from "../../content/policy_artshow.mdx";

const MarketplacePolicies = props => (
  <BasicLayout pageTitle="Art Show Policies">
    <Directive>Priceless Artifact Protocol</Directive>
    <PolicyView heading="policies" Content={Content} />
  </BasicLayout>
);

export default MarketplacePolicies;
