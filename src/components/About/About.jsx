//dependency
import React from "react";
import { Spinner } from "../../Modules/Spinner/Spinner";

//components
import { Footer } from "../Footer/Footer";
import { AboutData } from "../../Data/constant";

//css files
import "./about.scss";
import { Image } from "react-shimmer";

export const About = () => {
  return (
    <>
      <div className="ui-about">
        <div className="ui-about__infoWrapper">
          <p className="ui-about__infoWrapper__information">
            {AboutData.PERSONAL_INFO_GREETINGS}
          </p>
          <p className="ui-about__infoWrapper__information">
            {AboutData.PERSONAL_INFO_ACADEMIC}
          </p>
          <p className="ui-about__infoWrapper__information">
            {AboutData.PERSONAL_INFO_ACADEMIC__RESUME}
            <span className="ui-about__infoWrapper__information__resumeWrapper">
              <a
                className="ui-about__infoWrapper__information__resumeWrapper__resume"
                href={AboutData.resumeUrl}
                target="_blank"
                rel="noreferrer nofollow"
              >
                {AboutData.RESUME_HERE}
              </a>
            </span>
          </p>
          <p className="ui-about__infoWrapper__information">
            {AboutData.PERSONAL_INFO__HOBBY}
          </p>
          <p className="ui-about__infoWrapper__information">
            {AboutData.PERSONAL_INFO_THANKS}
          </p>
        </div>
        <div className="ui-about__imgWrapper">
          <Image
            className="ui-about__imgWrapper__image"
            src={AboutData.img}
            alt="aboutMe"
            fallback={<Spinner />}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
