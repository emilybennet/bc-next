import styled from "styled-components";

import BasicLayout from "./common/BasicLayout";
import Directive from "./common/Directive";
import SectionHeading from "./common/SectionHeading";

const Container = styled.section`
  padding: 5em 0;
  text-align: center;

  p {
    font-size: 1.2em;
    margin: 3em auto;
    max-width: 800px;
    padding: 0 20px;
  }
`;

const PlaceholderPage = props => (
  <BasicLayout pageTitle={props.pageTitle}>
    <Directive>Access Denied</Directive>
    <Container>
      <SectionHeading text={props.pageTitle} />
      <p>
        We're not quite ready to declassify this intel.
        <br /> Check back closer to the convention.
      </p>
    </Container>
  </BasicLayout>
);

export default PlaceholderPage;
