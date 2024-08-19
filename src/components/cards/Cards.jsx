import React from "react";
import { useTranslation } from "react-i18next";
import "./Cards.css";
import Imgone from "../../images/imgone.png";
import Imgtwo from "../../images/imgtwo.png";

const Cards = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <div className="container">
        <div className="wrapper-cards">
          <ul className="wrapper-cards-ul">
            <li className="wrapper-li-cards">{t("all")}</li>
            <li className="wrapper-li-cards">{t("uidesign")}</li>
            <li className="wrapper-li-cards">{t("uxdesign")}</li>
            <li className="wrapper-li-cards">{t("productDesign")}</li>
            <li className="wrapper-li-cards">{t("articles")}</li>
            <li className="wrapper-li-cards">{t("tutorials")}</li>
            <li className="wrapper-li-cards">{t("news")}</li>
          </ul>

          <div className="wrapper-laptop">
            <div className="about-cards">
              <img src={Imgone} alt="" />
              <p className="now">{t("now")}</p>
              <h3 className="wrong">{t("wrong")}</h3>
              <p className="quick">{t("quick")}</p>
              <h4 className="wrong">{t("readmore")}</h4>
            </div>
            <div className="about-cards">
              <img src={Imgtwo} alt="" />
              <p className="now">{t("now")}</p>
              <h3 className="wrong">{t("wrong")}</h3>
              <p className="quick">{t("quick")}</p>
              <h4 className="wrong">{t("readmore")}</h4>
            </div>
          </div>
          <div className="wrapper-laptop">
            <div className="about-cards">
              <img src={Imgone} alt="" />
              <p className="now">{t("now")}</p>
              <h3 className="wrong">{t("wrong")}</h3>
              <p className="quick">{t("quick")}</p>
              <h4 className="wrong">{t("readmore")}</h4>
            </div>
            <div className="about-cards">
              <img src={Imgtwo} alt="" />
              <p className="now">{t("now")}</p>
              <h3 className="wrong">{t("wrong")}</h3>
              <p className="quick">{t("quick")}</p>
              <h4 className="wrong">{t("readmore")}</h4>
            </div>
          </div>
          <div className="wrapper-laptop">
            <div className="about-cards">
              <img src={Imgone} alt="" />
              <p className="now">{t("now")}</p>
              <h3 className="wrong">{t("wrong")}</h3>
              <p className="quick">{t("quick")}</p>
              <h4 className="wrong">{t("readmore")}</h4>
            </div>
            <div className="about-cards">
              <img src={Imgtwo} alt="" />
              <p className="now">{t("now")}</p>
              <h3 className="wrong">{t("wrong")}</h3>
              <p className="quick">{t("quick")}</p>
              <h4 className="wrong">{t("readmore")}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
