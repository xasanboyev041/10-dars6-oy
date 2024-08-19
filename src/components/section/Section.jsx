import React from "react";
import { useTranslation } from "react-i18next";
import Group from "../../images/group.png";
import "./Section.css";

const Section = () => {
  const [t, i18n] = useTranslation();

  return (
    <>
      <div className="container">
        <div className="wrapper-section">
          <div className="wrapper-blog-post">
            <h1 className="h1-wrapper">{t("posts")}</h1>
            <h2 className="h2-section">{t("think")}</h2>
            <p className="wrapper-text-section">{t("design")}</p>
            <div className="wrapper-button">
              <button className="twitter-button">
                <i class="fa-brands fa-twitter"></i>
                TWITTER
              </button>
              <button className="linkedin-button">
                <i class="fa-brands fa-linkedin"></i>
                LINKEDIN
              </button>
              <button className="medium-button">
                <i class="fa-brands fa-medium"></i>
                MEDIUM
              </button>
            </div>
          </div>
          <img src={Group} alt="" />
        </div>
      </div>
    </>
  );
};

export default Section;
