import React from "react";
import Header from "../../components/common/Header";

export default {
  title: "common/⚠️ foundation/Header",
  component: Header
};

export const Default = args => <Header {...args}/>;
Default.args = {
    className: "optional-but-sometimes-needed-style-classname"
}