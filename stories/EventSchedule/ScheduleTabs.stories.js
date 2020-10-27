import React from "react";
import ScheduleTabs from "../../components/EventSchedule/ScheduleTabs";

export default {
  title: "eventSchedule/ScheduleTabs",
  component: ScheduleTabs,
  argTypes: {
      setActiveTab: {
          action: 'tab clicked!'
      }
  }
};

// slight css hack since these little labels have a negative left margin
export const Default = args => <ScheduleTabs {...args} />;
Default.args = {
    tabs: [
        {
            name: "Thursday",
            key: "thursday"
        },
        {
            name: "Friday",
            key: "friday"
        },
        {
            name: "Saturday",
            key: "saturday"
        },
        {
            name: "Sunday",
            key: "sunday"
        }
    ],
    activeTab: 0
}