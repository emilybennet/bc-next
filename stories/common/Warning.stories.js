import React from "react";
import Warning from "../../components/common/Warning";

export default {
  title: "common/Warning",
  component: Warning
};

const Template = ({children, ...args}) => <Warning {...args}>{children}</Warning>;

export const Default = Template.bind({});
Default.args = {
    children: "I'm used for something important we need to tell you about.",
    actions: [
        {
            text: "Book Hotel",
            url: "https://hilton.com"
        }
    ]
}