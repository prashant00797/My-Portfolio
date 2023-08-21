//dependency
import React from "react";

//local dependency
import { AboutData, socialLinks } from "../../Data/constant";

//css imports
import "./footer.scss";

export const Footer = () => {
  return (
    <div id="footer" className="ui-footer">
      <div className="ui-footer__wrapper">
        <div className="ui-footer__wrapper__copyrightWrapper">
          <p className="ui-footer__wrapper__copyrightWrapper__copyright">
            {AboutData.COPYRIGHT}
          </p>
        </div>
        <div className="ui-footer__wrapper__linksWrapper">
          {socialLinks.map((links) => {
            return (
              <div
                key={links.id}
                className="ui-footer__wrapper__linksWrapper__links"
              >
                <a
                  href={links.mailTo ? `mailTo:${links.url}` : links.url}
                  target="_blank"
                  rel="noreferrer nofollow"
                  className="ui-footer__wrapper__linksWrapper__links__url"
                >
                  <img
                    src={links.src}
                    alt={links._name}
                    className={`ui-footer__wrapper__linksWrapper__links__logo ui-footer__wrapper__linksWrapper__links__logo--${links._name}`}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
