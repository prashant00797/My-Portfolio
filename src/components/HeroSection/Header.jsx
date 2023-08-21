//dependency
import React from "react";
import { Image } from "react-shimmer";

//local dependency
import HeroImage from "../../asset/HeroImage.png";
import { HeaderConstant, LanguageLogo } from "../../Data/constant";
import { Spinner } from "../../Modules/Spinner/Spinner";

//css import
import "./header.scss";

export const Header = () => {
  return (
    <div id="header" className="ui-header">
      <div className="ui-header__contentWrapper">
        <div className="ui-header__contentWrapper__descriptionWrapper">
          <div className="ui-header__contentWrapper__descriptionWrapper__salutation">
            {HeaderConstant.SALUTATION}
          </div>
          <div className="ui-header__contentWrapper__descriptionWrapper__myinfo">
            {HeaderConstant.NAME}
          </div>
          <div className="ui-header__contentWrapper__descriptionWrapper__work">
            {HeaderConstant.OCCUPATION}
          </div>
          <div className="ui-header__contentWrapper__descriptionWrapper__impLinks">
            <span style={{ color: "#fff" }}>
              Projects below 👇
            </span>
            <span>
              <a href="" target="_blank" rel="noreferrer nofollow">
                <span style={{ color: "#fff", marginLeft: "50px" }}>
                  Resume 📩
                </span>
              </a>
            </span>
          </div>
        </div>
        <div className="ui-header__contentWrapper__imageWrapper">
          <Image
            className="ui-header__contentWrapper__imageWrapper__image"
            src={HeroImage}
            alt="Hero"
            fallback={<Spinner />}
          />
        </div>
      </div>
      <div className="ui-header__contentWrapper__backgroundWrapper">
        <div className="ui-header__contentWrapper__backgroundWrapper__htmlWrapper">
          <img
            className="ui-header__contentWrapper__backgroundWrapper__htmlWrapper__logo"
            src={LanguageLogo.HTML}
            alt="HTML"
          />
        </div>
        <div className="ui-header__contentWrapper__backgroundWrapper__cssWrapper">
          <img
            className="ui-header__contentWrapper__backgroundWrapper__cssWrapper__logo"
            src={LanguageLogo.CSS}
            alt="CSS"
          />
        </div>
        <div className="ui-header__contentWrapper__backgroundWrapper__jsWrapper">
          <img
            className="ui-header__contentWrapper__backgroundWrapper__jsWrapper__logo"
            src={LanguageLogo.JS}
            alt="JAVASCRIPT"
          />
        </div>
        <div className="ui-header__contentWrapper__backgroundWrapper__reactWrapper">
          <img
            className="ui-header__contentWrapper__backgroundWrapper__reactWrapper__logo"
            src={LanguageLogo.REACT}
            alt="REACT"
          />
        </div>
      </div>
    </div>
  );
};
