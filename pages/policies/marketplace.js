import styled from "styled-components";

import BasicLayout from "../../components/BasicLayout";
import Directive from "../../components/Directive";
import PolicyView from "../../components/PolicyView";

import Content from "../../content/policy_marketplace.mdx";

const MarketplacePolicies = props => (
  <BasicLayout pageTitle="Marketplace Policies">
    <Directive>Merchant Clearance Regulations</Directive>
    <PolicyView heading="policies" Content={Content} />
  </BasicLayout>
);

export default MarketplacePolicies;
