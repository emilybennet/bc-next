import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { withRouter } from "next/router";

const NAV_LINKS = [
  {
    text: "Attendee Policies",
    url: "/policies"
  },
  {
    text: "Marketplace Policies",
    url: "/policies/marketplace"
  },
  {
    text: "Art Show Policies",
    url: "/policies/artshow"
  },
  {
    text: "Press Policy",
    url: "/policies/press"
  },
  {
    text: "Gala Rules & Dress Code",
    url: "/policies/gala"
  },
  {
    text: "Hall Cosplay Contest Rules",
    url: "/policies/hall-cosplay-contest"
  },
  {
    text: "Cosplay Fashion Show Rules",
    url: "/policies/cosplay-fashion-show"
  },
  {
    text: "Talent Show Rules",
    url: "/policies/talent-show"
  }
];

const StickyMenu = styled.menu`
  padding: 0;
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
  @media (max-width: 800px) {
    position: relative;
  }
`;

const StyledAnchor = styled.a`
  color: ${props => props.theme.aqua};
  display: block;
  margin-bottom: 1em;
  transition: color 0.15s;
  &:hover {
    color: ${props => props.theme.turquoise};
  }
  &.active {
    text-decoration: underline;
  }
  @media (max-width: 800px) {
    display: inline-block;
    margin-top: 1em;
    padding: 0 10px;
  }
`;

const NavLink = withRouter(({ url, text, router }) => (
  <Link href={url}>
    <StyledAnchor className={router.pathname === url ? "active" : ""}>
      {text}
    </StyledAnchor>
  </Link>
));

const PolicyNav = props => (
  <StickyMenu>
    {NAV_LINKS.map(link => (
      <NavLink {...link} key={link.text} />
    ))}
  </StickyMenu>
);

export default PolicyNav;
