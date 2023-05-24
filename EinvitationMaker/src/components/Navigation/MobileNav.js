import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { Icon } from "@iconify/react";
import "../Combined.css";

function MobileNav() {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <Icon
      icon="ci:hamburger-md"
      className="HamburgerIcon"
      onClick={() => {
        setOpen(!open);
      }}
    />
  );

  const closeIcon = (
    <Icon
      icon="carbon:close-outline"
      color="white"
      className="CloseIcon"
      onClick={() => {
        setOpen(!open);
      }}
    />
  );
  return (
    <nav className="MobileNavigation">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks />}
    </nav>
  );
}

export default MobileNav;
