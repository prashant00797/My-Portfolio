//dependency
import React from "react";

//local dependency
import { OtherProjectsData } from "../../Data/constant";

//css imports
import "./otherProjects.scss";

export const OtherProjects = () => {
  return (
    <div id="otherprojects" className="ui-otherprojects">
      {OtherProjectsData.map((items, index) => {
        return (
          <div key={index} className="ui-otherprojects__imagewrapper">
            <img
              className="ui-otherprojects__imagewrapper__logo"
              src={items.img}
              alt={items.title}
            />
            <div className="ui-otherprojects__imagewrapper__title">
              <a
                className="ui-otherprojects__imagewrapper__title__url"
                href={items.url}
                target="_blank"
                rel="noreferrer nofollow"
              >
                {items.title}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
