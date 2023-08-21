//depedency
import React, { useState } from "react";
import classNames from "classnames";

//local dependency
import { NavbarConstant } from "../../Data/constant";
import { HamburgerMenu } from "../../Modules/HamburgerMenu/HamburgerMenu";

//css imports
import "./sidebar.scss";

export const SideBar = () => {
  const [toggle, setToggle] = useState(false);
  const sidebarClassName = classNames("ui-sidebar", {
    "ui-sidebar--active": toggle === true,
  });
  return (
    <div className={sidebarClassName}>
      {toggle ? (
        <HamburgerMenu toggle={toggle} setToggle={setToggle} />
      ) : (
        <div className="ui-navbar__sidebar__logoWrapper">
          <img
            onClick={() => setToggle(true)}
            className="ui-navbar__sidebar__logoWrapper__logo"
            src={NavbarConstant.HAMBURGER_MENU}
            alt="menu"
          />
        </div>
      )}
    </div>
  );
};
