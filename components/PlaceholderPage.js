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
    <Directive>~ Spoilers Ahead ~</Directive>
    <Container>
      <SectionHeading text={props.pageTitle} />
      <p>{props.message}</p>
    </Container>
  </BasicLayout>
);

export default PlaceholderPage;
