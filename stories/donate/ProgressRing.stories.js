import React from "react";
import ProgressRing from "../../components/Donate/ProgressRing";
import IconDiamond from "../../static/images/icons/sponsor-diamond.svg";

export default {
  title: "donate/ProgressRing",
  component: ProgressRing,
  argTypes: {
      Icon: {
          control: {
              type: null
          }
      }
  }
};

export const Default = ({children, ...args}) => <ProgressRing {...args} />;
Default.args = {
    radius: 100,
    stroke: 6,
    progress: 56,
    barColor: "#1FB3AC",
    Icon: IconDiamond,
    countdown: true,
    message: "Sold Out",
}
