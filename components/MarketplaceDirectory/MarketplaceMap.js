import React from "react";
import styled from "styled-components";

import Map from "../../static/images/marketplace-map.svg";

const MapStyles = styled.div`
  flex: 1;
  position: sticky;
  top: 0;
  align-self: flex-start;

  svg {
    height: 90vh;
    width: 100%;
  }

  .exhibit-space-shape {
    cursor: pointer;
    &:hover {
      fill ${props => props.theme.sapphire};
    }
  }

  @media (max-width: 1050px) {
    position: relative;
    svg {
      height: auto;
    }
  }
`;

class MarketplaceMap extends React.Component {
  componentDidMount() {
    let boxesBlk = document.querySelectorAll("svg g#box path, svg g#box rect");
    boxesBlk.forEach(b => b.classList.add("exhibit-space-shape"));

    let hoverBoxes = document.querySelector("g#box-hover");
    hoverBoxes.setAttribute("fill", "transparent");

    hoverBoxes.addEventListener("click", this.handleExhibitClick);
  }

  componentWillUnmount() {
    let hoverBoxes = document.querySelector("g#box-hover");
    hoverBoxes.removeEventListener("click", this.handleExhibitClick);
  }

  handleExhibitClick = ev => {
    const targetSpaceInfo = document.getElementById(
      ev.target.id.replace("space-", "")
    );

    if (targetSpaceInfo) {
      // targetSpaceInfo.scrollIntoView({ behavior: "smooth" });
      const targetPos = targetSpaceInfo.offsetTop;
      window.scrollTo({
        top: targetPos
        // behavior: "smooth"
      });
    } else {
      console.log("Space unassigned.");
    }
  };

  render() {
    return (
      <MapStyles>
        <Map />
      </MapStyles>
    );
  }
}

export default MarketplaceMap;
