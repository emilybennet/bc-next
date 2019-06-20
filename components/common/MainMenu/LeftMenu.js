import React from "react";
import styled from "styled-components";
import Link from "next/link";

import MenuItem from "./MenuItem";

const MenuContainer = styled.menu`
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  position: fixed;
  color: ${props => props.theme.aqua};
  z-index: 15000;

  a.mobile-menu-toggle {
    display: none;
  }

  @media (max-width: 1300px) {
    a:not(.mobile-menu-toggle) {
      display: none;
    }

    a.mobile-menu-toggle {
      display: block;
    }
  }
`;

const MenuObject = props => (
  <Link href={props.url} passHref>
    <MenuItem {...props} />
  </Link>
);

const LeftMenu = ({ menuItems, toggleMobileMenu, mobileMenuOpen }) => (
  <MenuContainer>
    {menuItems.map(item => (
      <MenuObject {...item} key={item.name} />
    ))}

    <MenuItem
      name="Menu"
      onClick={() => toggleMobileMenu()}
      key="mobileMenuToggle"
      className="mobile-menu-toggle"
    />
  </MenuContainer>
);

export default LeftMenu;
