import styled from "styled-components";

import BasicLayout from "../common/BasicLayout";
import Directive from "../common/Directive";
import PolicyView from "./PolicyView";

const PolicyPage = ({ pageTitle, Content }) => (
  <BasicLayout pageTitle="Art Show Policies">
    <Directive>Priceless Artifact Protocol</Directive>
    <PolicyView heading="policies" Content={Content} />
  </BasicLayout>
);

export default PolicyPage;
