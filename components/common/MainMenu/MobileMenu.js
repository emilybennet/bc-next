import React from "react";
import styled from "styled-components";
import Router from "next/router";

import MenuItem from "./MenuItem";
import CloseButton from "./CloseButton";

const MobileContainer = styled.menu`
  background: ${props => props.theme.turquoise};
  bottom: 0;
  display: flex;
  font-size: 1.75em;
  flex-direction: column;
  justify-content: center;
  left: 0;
  margin: 0;
  padding: 0;
  position: fixed;
  right: 0;
  transform: translateZ(100px);
  top: 0;
  z-index: 15015;

  a {
    &:before {
      background: ${props => props.theme.abyss};
    }
    svg path {
      fill: ${props => props.theme.abyss};
    }
  }
`;

const MobileMenu = ({ menuItems, toggleMobileMenu, mobileMenuOpen }) => {
  if (mobileMenuOpen) {
    return (
      <MobileContainer>
        <CloseButton action={toggleMobileMenu} />
        {menuItems.map(item => (
          <MenuItem
            {...item}
            key={item.name}
            onClick={() => {
              Router.push(item.url);
              toggleMobileMenu();
            }}
          />
        ))}
      </MobileContainer>
    );
  }

  return false;
};

export default MobileMenu;
