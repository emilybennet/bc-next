import styled from "styled-components";

import BasicLayout from "../common/BasicLayout";
import MarketplaceMap from "./MarketplaceMap";
import ExhibitList from "./ExhibitList";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  position: relative;
  width: calc(100vw - 50px);
  @media (max-width: 1050px) {
    display: block;
  }
`;

const MarketplaceDirectory = props => {
  return (
    <BasicLayout title="Blank Canvas's Marketplace">
      <Container>
        <MarketplaceMap />
        <ExhibitList />
      </Container>
    </BasicLayout>
  );
};

export default MarketplaceDirectory;
