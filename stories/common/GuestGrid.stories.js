import React from "react";
import GuestGrid from "../../components/common/GuestGrid";

export default {
  title: "common/GuestGrid",
  component: GuestGrid
};

export const Default = args => <GuestGrid {...args} />;
Default.args = {
    guests: [
        {
            photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
            name: "Lauren Faust",
            id: "faust",
            url: "/guests/lauren-faust"
        },
        {
            photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
            name: "Rebecca Shoichet",
            id: "shoichet",
            url: "/guests/rebecca-shoichet"
        },
        {
            photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
            name: "Sara Richard",
            id: "richard",
            url: "/guests/sara-richard"
        }
    ]
}