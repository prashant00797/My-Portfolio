//dependency
import React from "react";

//local dependency
import close from "../../asset/close.svg";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { NavbarConstant } from "../../Data/constant";

//css imports
import "./hamburgermenu.scss";

export const HamburgerMenu = (props) => {
  return (
    <div className="ui-hamburger">
      <div className="ui-hamburger__closeIconWrapper">
        <img
          onClick={() => props.setToggle(false)}
          className="ui-hamburger__closeIconWrapper__icon"
          src={close}
          alt="close"
        />
      </div>
      <div className="ui-hamburger__linksWrapper">
        <Link className="ui-hamburger__linksWrapper__links" to="/about">
          {NavbarConstant.ABOUT}
        </Link>
        <LinkScroll
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          to="work"
          onClick={() => props.setToggle(false)}
          className="ui-hamburger__linksWrapper__links"
        >
          {NavbarConstant.WORK}
        </LinkScroll>
        <LinkScroll
          spy={true}
          smooth={true}
          offset={1500}
          duration={500}
          to="contact"
          onClick={() => props.setToggle(false)}
          className="ui-hamburger__linksWrapper__links"
        >
          {NavbarConstant.CONTACT}
        </LinkScroll>
      </div>
    </div>
  );
};
