import React, { useState, useEffect } from "react";
import times from "../data/timetable.json";
import translations from "../data/translations.json";
import sprite from "../images/sprite/sprite.svg";

const Timetable = ({ language }) => {
  const [openTable, setOpenTable] = useState(null);
  const [isMobile, setIsMobile] = useState(true);
  const toggleTable = (index) => {
    setOpenTable(openTable === index ? null : index);
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  if (!isMobile) {
    return (
      <section className="time container" id="time_table">
        <h2 className="teams__title">
          {translations[language].time_table.title}
        </h2>

        <ul className="teams__weekdays-list">
          <li className="teams__weekdays-item">
            {translations[language].time_table.teams}
          </li>
          <li className="teams__weekdays-item">
            {translations[language].weekdays.MO}
          </li>
          <li className="teams__weekdays-item">
            {translations[language].weekdays.TU}
          </li>
          <li className="teams__weekdays-item">
            {translations[language].weekdays.WE}
          </li>
          <li className="teams__weekdays-item">
            {translations[language].weekdays.TH}
          </li>
          <li className="teams__weekdays-item">
            {translations[language].weekdays.FR}
          </li>
        </ul>
        {times.map((item, index) => (
          <ul className="teams__weekdays-table" key={index}>
            <li className="teams__weekdays-day">{item[language].team}</li>
            {[
              { en: "MO", ua: "ПН" },
              { en: "TU", ua: "ВТ" },
              { en: "WE", ua: "СР" },
              { en: "TH", ua: "ЧТ" },
              { en: "FR", ua: "ПТ" },
            ].map((day, dayIndex) => {
              const matchedDay = item[language].days.find(
                (weekday) => weekday.day === day[language]
              );

              return (
                <li className="teams__weekdays-day" key={dayIndex}>
                  {matchedDay ? matchedDay.time : " "}
                </li>
              );
            })}
          </ul>
        ))}
      </section>
    );
  }

  return (
    <section className="time container" id="time_table">
      <h2 className="teams__title">
        {translations[language].time_table.title}
      </h2>
      <p className="teams__subtitle">
        {translations[language].time_table.teams}
      </p>
      <ul className="time__list">
        {times.map((item, index) => (
          <li key={index} className="time__item">
            <div
              className="time__header"
              onClick={() => isMobile && toggleTable(index)}
              style={{
                borderBottom: openTable === index && "none",
              }}
            >
              <p> {item[language].team}</p>
              {isMobile && (
                <svg
                  className={`time__header-svg ${
                    openTable === index ? "arrow-top" : "arrow-bottom"
                  }`}
                >
                  <use href={`${sprite}#arrow-bottom`}></use>
                </svg>
              )}
            </div>
            <div
              className="time__content"
              style={{
                borderTop: "none",
                display: !isMobile || openTable === index ? "block" : "none",
              }}
            >
              {item[language].days.map((weekday, index) => (
                <p key={index}>
                  {weekday.day}
                  <span> {weekday.time}</span>
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Timetable;
