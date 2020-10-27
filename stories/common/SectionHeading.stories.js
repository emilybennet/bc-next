import React from "react";
import SectionHeading from "../../components/common/SectionHeading";

export default {
  title: "common/SectionHeading",
  component: SectionHeading
};

const Template = args => <SectionHeading {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: "tl;dr",
    echo: "briefing"
}