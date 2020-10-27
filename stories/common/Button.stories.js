import React from "react";
import Button from "../../components/common/Button";
import DarkButton from "../../components/common/DarkButton";
import HollowButton from "../../components/common/HollowButton";

export default {
  title: "common/Button",
  component: Button
};

export const Default = ({children, ...args}) => <Button {...args}>{children}</Button>;
Default.args = {
    href: "https://bronycon.org",
    children: "I am button"
}

export const Dark = ({children, ...args}) => <DarkButton {...args}>{children}</DarkButton>;
Dark.args = {
    href: "https://bronycon.org",
    children: "I am button dark"
}

export const Hollow = ({children, ...args}) => <HollowButton {...args}>{children}</HollowButton>;
Hollow.args = {
    href: "https://bronycon.org",
    children: "I am button hollow"
}