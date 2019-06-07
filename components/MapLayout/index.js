import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";

import Header from "../common/Header";
import Sheet from "./Sheet";
import hotels from "../../content/poi/hotels";
import thursday from "../../content/poi/thursday";

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

const TAB_DATA = [
  {
    name: "Hotels",
    data: hotels
  },
  {
    name: "Thursday Activities",
    data: thursday
  }
];

class MapLayout extends React.Component {
  state = {
    activeTab: 1
  };

  changeTab = index => {
    console.log("set active tab" + index);
    this.setState({ activeTab: index });
  };

  render() {
    return (
      <div>
        <FixedHeader />
        <DynamicMap test="test" />
        <Sheet
          tabs={TAB_DATA}
          activeTab={this.state.activeTab}
          changeTab={this.changeTab}
        />
      </div>
    );
  }
}

export default MapLayout;
