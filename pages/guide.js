import styled from "styled-components";

import BasicLayout from "../components/common/BasicLayout";
import Directive from "../components/common/Directive";
import SectionHeading from "../components/common/SectionHeading";

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
    <Directive>Access Imminent</Directive>
    <Container>
      <SectionHeading text="Mobile Schedule" echo="Schedule" />
      <p>Mobile app access will begin Aug 1 @ 12:30am.</p>
    </Container>
  </BasicLayout>
);

export default PlaceholderPage;
