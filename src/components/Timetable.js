import React, { useState } from "react";
import times from "../data/timetable.json";
import translations from "../data/translations.json";
import sprite from "../images/sprite/sprite.svg";

const Timetable = ({ language }) => {
  const [openTable, setOpenTable] = useState(null);

  const toggleTable = (index) => {
    setOpenTable(openTable === index ? null : index);
  };

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
              onClick={() => toggleTable(index)}
              style={{
                borderBottom: openTable === index && "none",
              }}
            >
              <p> {item[language].team}</p>
              <svg
                className={`time__header-svg ${
                  openTable === index ? "arrow-top" : "arrow-bottom"
                }`}
              >
                <use href={`${sprite}#arrow-bottom`}></use>
              </svg>
            </div>
            {openTable === index && (
              <div className="time__content" style={{ borderTop: "none" }}>
                <p>
                  {item[language].day1}
                  <span> {item[language].time1}</span>
                </p>
                <p>
                  {item[language].day2}
                  <span> {item[language].time2}</span>
                </p>
                <p>
                  {item[language].day3}
                  <span> {item[language].time3}</span>
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Timetable;
