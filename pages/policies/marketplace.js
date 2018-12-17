import styled from "styled-components";

import BasicLayout from "../../components/BasicLayout";
import Directive from "../../components/Directive";
import PolicyView from "../../components/PolicyView";

// import Content from "../../content/policy_attendee.mdx";

const Content = () => (
  <p>Marketplace policies are being redefined for 2019, stay tuned.</p>
);

const MarketplacePolicies = props => (
  <BasicLayout pageTitle="Marketplace Policies">
    <Directive>Merchant Clearance Regulations</Directive>
    <PolicyView heading="policies" Content={Content} />
  </BasicLayout>
);

export default MarketplacePolicies;
