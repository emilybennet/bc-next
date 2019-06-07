import React from "react";
import styled from "styled-components";

import Footer from "../common/Footer";
import PoiList from "./PoiList";
import Warning from "../common/Warning";

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
  display: flex;
  flex-direction: column;
  font-size: 0.88em;
  font-weight: 600;
  height: 45px;
  justify-content: center;
  letter-spacing: 0.05em;
  padding: 0 1.2em;
  text-transform: uppercase;
  &:not(:last-child) {
    margin-right: 15px;
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
    border-color: ${props => props.theme.turquoise};
    color: ${props => props.theme.turquoise};
    span {
      opacity: 0.3;
    }
  }
`;

const Sheet = ({ tabs, activeTab, changeTab }) => (
  <Container>
    <TabContainer>
      {tabs.map((t, index) => (
        <Tab
          className={activeTab === index ? "active" : ""}
          key={t.name}
          onClick={() => changeTab(index)}
        >
          {t.name}
        </Tab>
      ))}
      <Tab className="disabled">
        <span>
          Food <em>(soon)</em>
        </span>
      </Tab>
      {/* <Tab className="disabled">
        Food & Fun <em>(Soon)</em>
      </Tab> */}
    </TabContainer>
    <Content>
      {activeTab == !0 ? (
        ""
      ) : (
        <Warning>
          <div>
            <p>
              <strong>Demand for discounted rooms is extremely high</strong>,
              book whatever days you can or try another hotel. Contact the hotel
              directly to extend your stay at the standard rate for any days you
              were unable to book at the discounted rate.
            </p>
            <p>
              <strong>Pre-registration pickup</strong> doesn't start until
              Thursday, August 1, so don't stress if you’re unable to get into
              town on Wednesday.
            </p>
          </div>
        </Warning>
      )}

      <PoiList data={tabs[activeTab].data} />
      <Footer />
    </Content>
  </Container>
);

export default Sheet;
