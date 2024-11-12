import React, { useEffect} from "react";
import translations from "../data/translations.json";
import ButtonMore from "../components/ButtonMore";
import chicCrew from "../images/img-сhic-crew_main.jpg";
import crashBangCrew from "../images/crash_bang_crew_main.jpg";
import bonBonCrew from "../images/bon_bon_crew_main.jpg";
import titanCrew from "../images/titan_crew_main.jpg";
import honeyCrew from "../images/honey_crew_main.jpg";
import galiBaluvani from "../images/gali_baluvani_main.jpg";


const Teams = ({ language }) => {
 

  return (
    <section className="teams container" id="teams">
      <h2 className="teams__title">{translations[language].teams.title}</h2>
      <ul className="teams__list">
        <li className="teams__item" id="chic_crew">
          <h3 className="teams__name">
            {translations[language].chic_crew.name}
          </h3>
          <img
            src={chicCrew}
            alt="teams_chic-crew"
            className="teams__image"
          ></img>
          <p className="teams__text">{translations[language].chic_crew.text}</p>
          <ButtonMore path="/teams/chic_crew" language={language} />
        </li>
        <li className="teams__item" id="crash_bang_crew">
          <h3 className="teams__name">
            {translations[language].crash_bang_crew.name}
          </h3>
          <img
            src={crashBangCrew}
            alt="teams_crash_bang_crew"
            className="teams__image"
          ></img>
          <p className="teams__text">
            {translations[language].crash_bang_crew.text}
          </p>
          <ButtonMore path="/teams/crash_bang_crew" language={language} />
        </li>
        <li className="teams__item" id="bon_bon_crew">
          <h3 className="teams__name">
            {translations[language].bon_bon_crew.name}
          </h3>
          <img
            src={bonBonCrew}
            alt="teams_bon_bon_crew"
            className="teams__image"
          ></img>
          <p className="teams__text">
            {translations[language].bon_bon_crew.text}
          </p>
          <ButtonMore path="/teams/bon_bon_crew" language={language} />
        </li>
        <li className="teams__item" id="titan_crew">
          <h3 className="teams__name">
            {translations[language].titan_crew.name}
          </h3>
          <img
            src={titanCrew}
            alt="teams_titan_crew"
            className="teams__image"
          ></img>
          <p className="teams__text">
            {translations[language].titan_crew.text}
          </p>
          <ButtonMore path="/teams/titan_crew" language={language} />
        </li>
        <li className="teams__item" id="honey_crew">
          <h3 className="teams__name">
            {translations[language].honey_crew.name}
          </h3>
          <img
            src={honeyCrew}
            alt="teams_honey_crew"
            className="teams__image"
          ></img>
          <p className="teams__text">
            {translations[language].honey_crew.text}
          </p>
          <ButtonMore path="/teams/honey_crew" language={language} />
        </li>
        <li className="teams__item" id="gali_baluvani">
          <h3 className="teams__name">
            {translations[language].gali_baluvani.name}
          </h3>
          <img
            src={galiBaluvani}
            alt="teams_gali_baluvani"
            className="teams__image"
          ></img>
          <p className="teams__text">
            {translations[language].gali_baluvani.text}
          </p>
          <ButtonMore path="/teams/gali_baluvani" language={language} />
        </li>
      </ul>
    </section>
  );
};

export default Teams;
