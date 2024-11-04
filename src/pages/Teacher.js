import React from "react";
import teachers from "../data/teachers.json";
import sprite from "../images/sprite/sprite.svg";
import { useParams } from "react-router-dom";
import ButtonReturn from "../components/ButtonReturn";

const Teacher = ({ language }) => {
  const { teacherId } = useParams();
  const teacher = teachers.find((teacher) => teacher.teacherId === teacherId);

  if (!teacher) {
    return <p className="container">Choreographer not found.</p>;
  }
  return (
    <section className="teacher container">
      <ButtonReturn language={language} />
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
      <nav className="teacher__social">
        <ul className="teacher__social-list">
          <li className="teacher__social-item">
            <a
              className="teacher__social-link"
              href={teacher[language].instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="teacher__social-svg">
                <use href={`${sprite}#instagram`}></use>
              </svg>
            </a>
          </li>
          <li className="teacher__social-item">
            <a
              className="teacher__social-link"
              href={teacher[language].facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="teacher__social-svg">
                <use href={`${sprite}#facebook`}></use>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Teacher;
