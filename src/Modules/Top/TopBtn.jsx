//dependency
import React, { useEffect, useState } from "react";

//local dependency
import top from "../../asset/MoveToTop.svg";

//css imports
import "./topbtn.scss";

export const TopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    isVisible && (
      <div onClick={goToBtn} className="ui-top">
        <img className="ui-top__logo" src={top} alt="MoveToTop" />
      </div>
    )
  );
};
