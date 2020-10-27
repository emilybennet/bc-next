import React from "react";
import BasicLayout from "../../components/common/BasicLayout";

export default {
  title: "common/BasicLayout",
  component: BasicLayout,
  /**
   * manually adding descriptions since the HOC Router wrapper 
   * may be getting in the way.
   */
  argTypes: {
      pageTitle: {
          type: {
              name: "string"
          },
          description: "Text for tab/title bar"
      },
      children: {
          type: {
              name: 'node',
              required: true
          },
          description: "Markup to render in layout, use StyledComponents to create appropriate wrapping/alignment"
      }
  }
};

export const Default = ({children, ...args}) => <BasicLayout {...args}>{children}</BasicLayout>;
Default.args = {
    pageTitle: "Storybook Demo",
    children: "I am some text on a page using BasicLayout."
}