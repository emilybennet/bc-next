import React, { useState } from "react";

import LeftMenu from "./LeftMenu";
import MobileMenu from "./MobileMenu";

import agenda from "../../../static/images/icons/menu/agenda.svg";
import guest from "../../../static/images/icons/menu/guest.svg";
import registration from "../../../static/images/icons/menu/registration.svg";
import signboard from "../../../static/images/icons/menu/signboard.svg";
import wayfinding from "../../../static/images/icons/menu/wayfinding-hollow.svg";

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

const MainMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <React.Fragment>
      <LeftMenu
        menuItems={MENU_ITEMS}
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <MobileMenu
        menuItems={MENU_ITEMS}
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
    </React.Fragment>
  );
};

export default MainMenu;
