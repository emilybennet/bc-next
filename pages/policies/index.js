import styled from "styled-components";

import BasicLayout from "../../components/BasicLayout";
import Directive from "../../components/Directive";
import PolicyView from "../../components/PolicyView";

import Content from "../../content/policy_attendee.mdx";

const AttendeePolicies = props => (
  <BasicLayout pageTitle="Attendee Policies">
    <Directive>Store this document in a dry and secure location</Directive>
    <PolicyView heading="policies" Content={Content} />
  </BasicLayout>
);

export default AttendeePolicies;
