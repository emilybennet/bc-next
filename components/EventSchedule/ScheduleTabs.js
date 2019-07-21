import styled from "styled-components";

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3em;
  padding: 0 2.22em;

  @media (max-width: 600px) {
    padding: 0 0.5em;
  }
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

  @media (max-width: 600px) {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

const ScheduleTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <TabContainer>
      {tabs.map((t, index) => (
        <Tab
          className={activeTab === index ? "active" : ""}
          key={t.key}
          onClick={() => setActiveTab(index)}
        >
          {t.name}
        </Tab>
      ))}
    </TabContainer>
  );
};
export default ScheduleTabs;
