import React from "react";
import TimeDymo from "../../components/EventSchedule/TimeDymo";

export default {
  title: "eventSchedule/TimeDymo",
  component: TimeDymo
};

// slight css hack since these little labels have a negative left margin
export const Default = args => <div style={{left: 200, position: "absolute"}}><TimeDymo {...args} /></div>;
Default.args = {
    time: "3:15pm"
}