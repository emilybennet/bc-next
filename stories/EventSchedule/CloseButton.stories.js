import React from "react";
import CloseButton from "../../components/EventSchedule/CloseButton";

export default {
  title: "eventSchedule/CloseButton",
  component: CloseButton,
  argTypes: {
      action: {
          action: "CloseButton clicked!"
      }
  }
};

export const Default = args => <CloseButton {...args} />;
