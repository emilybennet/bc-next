import React from "react";
import BasicLayout from "../../components/common/BasicLayout";

import Lineup from "../../components/BronyPalooza/Lineup.js";
import Marquee from "../../components/BronyPalooza/Marquee.js";

const BronyPalooza = props => (
  <BasicLayout pageTitle="BronyPalooza">
    <Marquee />
    <Lineup />
  </BasicLayout>
);

export default BronyPalooza;
