import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import translations from "../data/translations.json";
import sprite from "../images/sprite/sprite.svg";
import emailjs from "@emailjs/browser";

const Form = ({ language, title, onCloseForm, children }) => {
  const form = useRef();

  const sendEmail = (e, data) => {
    console.log("Sending email...");

    emailjs
      .sendForm(
        "service_1r9qyyx",
        "template_olucgmg",
        form.current,
        "ygNyvuGy1WrEg5acp"
      )
      .then(
        (result) => {
          reset();
          onCloseForm();
          alert("Повідомлення надіслано!");
        },
        (error) => {
          console.log(error.text);
          alert("Сталася помилка при надсиланні повідомлення.");
        }
      );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <section id="form" className="form hidden">
      <div className="form__button-wrapper">
        <button
          type="button"
          className="form__button-close"
          onClick={onCloseForm}
        >
          <svg className="form__svg">
            <use href={`${sprite}#close-form`}></use>
          </svg>
        </button>
      </div>
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
        <input type="hidden" name="title" value={title} />
        <p className="form__title">{translations[language].form.title}</p>
        <ul className="form__list">
          <li className="form__item">
            <input
              {...register("name", {
                required: true,
                minLength: {
                  value: 3,
                  message: translations[language].form.error_message_name,
                },
              })}
              className={errors.name ? "form__input-error" : "form__input"}
              type="text"
              name="name"
              id="name"
              placeholder={translations[language].form.placeholder_name}
            />
            <p className="form__message">{errors.name?.message}</p>
          </li>
          <li className="form__item">
            <input
              {...register("tel", {
                required: true,
                pattern: {
                  value: /^[\d()+]+$/,
                  message: translations[language].form.error_message_tel,
                },
              })}
              className="form__input"
              type="tel"
              id="tel"
              name="tel"
              placeholder={translations[language].form.placeholder_tel}
            />
            <p className="form__message">{errors.tel?.message}</p>
          </li>
          <li className="form__item">
            <textarea
              {...register("message")}
              className="form__textarea"
              name="message"
              id="message"
              placeholder={translations[language].form.placeholder_message}
            ></textarea>
          </li>
        </ul>
        <div className="form__button-submit-wrapper">
          <button type="submit" className="form__button-submit">
            {translations[language].form.button}
          </button>
        </div>
      </form>
      {children}
    </section>
  );
};

export default Form;
