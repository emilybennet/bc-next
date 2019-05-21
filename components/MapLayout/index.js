import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";

import Header from "../common/Header";
import Sheet from "./Sheet";
import hotels from "../../content/poi/hotels";

// Skipping server-side for Map import due to mapbox-gl issue.
const DynamicMap = dynamic(() => import("./Map"), {
  loading: () => <p>Loading Map...</p>,
  ssr: false
});

const FixedHeader = styled(Header)`
  /* position: fixed; */
  position: relative;
  top: 0;
  z-index: 10;
  .btn {
    background: ${props => props.theme.black};
  }
`;

class MapLayout extends React.Component {
  render() {
    return (
      <div>
        <FixedHeader />
        <DynamicMap test="test" />
        <Sheet hotels={hotels} />
      </div>
    );
  }
}

export default MapLayout;
