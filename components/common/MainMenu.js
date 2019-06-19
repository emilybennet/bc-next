import React from "react";
import styled from "styled-components";
import Link from "next/link";

import agenda from "../../static/images/icons/menu/agenda.svg";
import guest from "../../static/images/icons/menu/guest.svg";
import registration from "../../static/images/icons/menu/registration.svg";
import signboard from "../../static/images/icons/menu/signboard.svg";
import wayfinding from "../../static/images/icons/menu/wayfinding-hollow.svg";

const MenuContainer = styled.menu`
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  position: fixed;
  color: ${props => props.theme.aqua};
  z-index: 15000;

  svg {
    margin-right: 10px;
    path {
      fill: ${props => props.theme.turquoise};
      transition: 0.15s;
    }
  }

  a {
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    &:before {
      background: ${props => props.theme.turquoise};
      border-radius: 0 3px 3px 0;
      content: " ";
      display: inline-block;
      height: 3px;
      margin-right: 10px;
      transition: 0.15s;
      width: 22px;
    }
    &:hover {
      &:before {
        background: ${props => props.theme.aqua};
      }
      path {
        fill: ${props => props.theme.aqua};
      }
    }
  }
`;

const LabelStyle = styled.span`
  background: ${props => props.theme.black};
  border-radius: 2px;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);
  color: ${props => props.theme.gold};
  display: inline-block;
  font-family: ${props => props.theme.plex};
  font-size: 0.88em;
  letter-spacing: 1px;
  line-height: 1;
  padding: 10px 14px;
`;

const MENU_ITEMS = [
  {
    name: "Attend",
    url: "/",
    Icon: registration,
    rotation: -4.41
  },
  {
    name: "Guests",
    url: "/guests",
    Icon: guest,
    rotation: 3
  },
  {
    name: "Baltimore",
    url: "/baltimore",
    Icon: wayfinding,
    rotation: -2
  },
  {
    name: "Marketplace",
    url: "/marketplace",
    Icon: signboard,
    rotation: -3.78
  },
  {
    name: "Schedule",
    url: "/events",
    Icon: agenda,
    rotation: 1.14
  }
];

const MenuItem = ({ name, url, Icon, rotation = 0 }) => (
  <Link href={url}>
    <a>
      <Icon />
      <LabelStyle style={{ transform: `rotate(${rotation}deg` }}>
        {name}
      </LabelStyle>
    </a>
  </Link>
);

const MainMenu = () => (
  <MenuContainer>
    {MENU_ITEMS.map(item => (
      <MenuItem {...item} />
    ))}
  </MenuContainer>
);

export default MainMenu;
