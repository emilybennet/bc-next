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
    text: "Press Policy",
    url: "/policies/press"
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
      <NavLink {...link} />
    ))}
  </StickyMenu>
);

export default PolicyNav;