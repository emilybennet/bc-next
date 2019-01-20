import React from "react";
import styled from "styled-components";

import Footer from "../Footer";
import PoiList from "./PoiList";
import Warning from "./Warning";

const Container = styled.div`
  margin: 0 auto 0;
  max-width: 1200px;
  position: relative;
  z-index: 10;
`;

const Content = styled.div`
  background: ${props => props.theme.deepAbyss};
  border-top: 4px solid ${props => props.theme.aqua};
  box-shadow: 0 0 2.5em ${props => props.theme.black};
  padding: 3.33em;
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 2.22em;
`;

const Tab = styled.a`
  background: ${props => props.theme.deepAbyss};
  border: 1px solid ${props => props.theme.aqua};
  border-bottom-width: 0;
  border-radius: 3px 3px 0 0;
  color: ${props => props.theme.turquoise};
  display: block;
  font-size: 1.22em;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 0.55em 1.38em 0.33em;
  text-transform: uppercase;
  &:not(:last-child) {
    margin-right: 1.11em;
  }
  em {
    font-size: 0.6em;
    font-style: normal;
  }
  &.active {
    background: ${props => props.theme.aqua};
    color: ${props => props.theme.deepAbyss};
  }
  &.disabled {
    cursor: default;
  }
`;

const Sheet = props => (
  <Container>
    <TabContainer>
      <Tab className="active">Hotels</Tab>
      <Tab className="disabled">
        Food & Fun <em>(Soon)</em>
      </Tab>
    </TabContainer>
    <Content>
      <Warning />
      <PoiList data={props.hotels} />
      <Footer />
    </Content>
  </Container>
);

export default Sheet;
