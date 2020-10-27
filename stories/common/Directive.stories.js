import React from "react";
import Directive from "../../components/common/Directive";

export default {
  title: "common/Directive",
  component: Directive
};

export const Default = args => <Directive>{args.children}</Directive>;
Default.args = {
  children: "situational chronology"
}