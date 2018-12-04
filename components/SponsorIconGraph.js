import React from "react";
import styled from "styled-components";
import ProgressRing from "./ProgressRing";

const GraphLockup = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`

const SponsorIconGraph = ({ Icon, percent, color, ...props }) => (
  <GraphLockup>
    <ProgressRing radius={100} stroke={6} progress={percent} barColor={color} Icon={Icon} countdown={true} message="Sold Out" />
  </GraphLockup>
);

export default SponsorIconGraph;
