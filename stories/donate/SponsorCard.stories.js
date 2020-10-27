import React from "react";
import SponsorTier from "../../components/Donate/SponsorTier";
import IconDiamond from "../../static/images/icons/sponsor-diamond.svg";

export default {
  title: "donate/SponsorTier",
  component: SponsorTier,
  argTypes: {
      Icon: {
          control: {
              type: null
          }
      }
  }
};

export const Default = ({children, ...args}) => <SponsorTier {...args} />;
Default.args = {
    name: "Diamond",
    Icon: IconDiamond,
    price: 2000,
    url: "https://bronycon2019.eventbrite.com",
    color: "#1FB3AC",
    axLevel: 3,
    percent: 42,
    note: "Partner hotel accommodations."
}