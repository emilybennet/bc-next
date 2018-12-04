import React from "react";
import styled from "styled-components";

const IconWrap = styled.div`
  align-items: center;
  border: 6px solid;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  height: 200px;
  margin: 0 auto;
  width: 200px;
`;

const SponsorIconGraph = ({ Icon, percent, color, ...props }) => (
  <IconWrap style={{ borderColor: color }}>
    <Icon fill={color} className="thesvg" />
  </IconWrap>
);

export default SponsorIconGraph;
