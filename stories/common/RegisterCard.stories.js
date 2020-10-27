import React from "react";
import RegisterCard from "../../components/common/RegisterCard";

export default {
  title: "common/RegisterCard",
  component: RegisterCard
};

const Template = args => <RegisterCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "4-Day PLUS",
    price: 150,
    url: "https://bronycon2019.eventbrite.com#tickets",
    lead: "Access + Exclusives",
    description:
        "Badge includes everything that comes with a 4-Day badge, plus an exclusive poster and t-shirt."
}