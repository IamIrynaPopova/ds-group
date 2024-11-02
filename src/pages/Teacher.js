import React from "react";
import teachers from "../data/teachers.json";
import sprite from "../images/sprite/sprite.svg";
import { useParams } from "react-router-dom";

const Teacher = ({ language, backToMain }) => {
  const { teacherId } = useParams();
  const teacher = teachers.find((teacher) => teacher.teacherId === teacherId);

  if (!teacher) {
    return <p>Choreographer not found.</p>;
  }
  return (
    <section className="teacher container">
      <button className="teacher__button" type="button" onClick={backToMain}>
        <svg className="teacher__svg">
          <use href={`${sprite}#arrow-left`}></use>
        </svg>
        {teacher[language].button}
      </button>
      <h2 className="teacher__name">{teacher[language].name}</h2>
      <div className="teacher__image-wrapper">
        <img
          src={teacher[language].image}
          alt="teacher"
          className="teacher__image"
        ></img>
        <div className="teacher__frame"></div>
      </div>
      <p className="teacher__text"> {teacher[language].text1}</p>
      <p className="teacher__text"> {teacher[language].text2}</p>
      <p className="teacher__text"> {teacher[language].text3}</p>
      <p className="teacher__text"> {teacher[language].text4}</p>
      <p className="teacher__text"> {teacher[language].phone}</p>
    </section>
  );
};

export default Teacher;
