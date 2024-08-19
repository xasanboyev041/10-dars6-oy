import React from "react";
import LogoOne from "../../images/logoone.png";
import LogoTwo from "../../images/logotwo.png";
import { useTranslation } from "react-i18next";
import "./Header.css";

const Header = () => {
  const [t, i18n] = useTranslation();

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="wrapper-header">
          <div className="wrapper-header-img">
            <img src={LogoOne} alt="" />
            <img src={LogoTwo} alt="" />
          </div>
          <ul className="wrapper-ul">
            <select
              defaultValue={i18n.language}
              onChange={handleChangeLanguage}
            >
              <option value="uz">Uz</option>
              <option value="ru">Ru</option>
              <option value="en">En</option>
            </select>
            <li className="wrapper-li">{t("blog")}</li>
            <li className="wrapper-li">{t("portfolio")}</li>
            <li className="wrapper-li">{t("cv")}</li>
            <li className="wrapper-li">{t("store")}</li>
            <li className="wrapper-li">{t("freelance")}</li>
            <li className="wrapper-li">{t("aboutme")}</li>
            <li className="wrapper-li">{t("contact")}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
