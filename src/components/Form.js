import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Loader from "../components/Loader";
import Notification from "../components/Notification";
import translations from "../data/translations.json";
import sprite from "../images/sprite/sprite.svg";
import emailjs from "@emailjs/browser";

const Form = ({ language, title, onCloseForm, isFooter }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const form = useRef();
  useEffect(() => {
    const checkIsTablet = () => {
      setIsTablet(window.innerWidth > 768);
    };

    checkIsTablet();

    window.addEventListener("resize", checkIsTablet);

    return () => window.removeEventListener("resize", checkIsTablet);
  }, []);

  const sendEmail = async () => {
    setIsLoading(true);
    setIsError(false);
    setNotification(null);

    try {
      const result = await emailjs.sendForm(
        "service_1r9qyyx",
        "template_olucgmg",
        form.current,
        "ygNyvuGy1WrEg5acp"
      );

      if (result.status === 200) {
        setNotification(translations[language].form.notification_success);
        reset();
        onCloseForm();
      }
    } catch (error) {
      if (error.status === 400) {
        setNotification(translations[language].form.notification_error1);
      } else {
        console.log(error);
        setNotification(translations[language].form.notification_error2);
      }
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <>
      <form id="form" ref={form} className="form hidden" onSubmit={handleSubmit(sendEmail)}>
        <div className="form__frame">
          <div className="form__button-wrapper">
            <button
              type="button"
              className="form__button-close"
              aria-label={translations[language].form.button_close}
              onClick={onCloseForm}
            >
              <svg className="form__svg" aria-hidden="true">
                <use href={`${sprite}#close-form`}></use>
              </svg>
            </button>
          </div>
          <div className="form__data">
            <input type="hidden" name="title" value={title} />
            <p className="form__title" >
              {translations[language].form.title}
            </p>
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
                  placeholder={
                    isTablet && isFooter
                      ? translations[language].form.placeholder_name_tablet
                      : translations[language].form.placeholder_name
                  }
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
                  placeholder={
                    isTablet && isFooter
                      ? translations[language].form.placeholder_tel_tablet
                      : translations[language].form.placeholder_tel
                  }
                />
                <p className="form__message">{errors.tel?.message}</p>
              </li>

              <li className="form__item">
                <textarea
                  {...register("message")}
                  className="form__textarea"
                  name="message"
                  id="message"
                  placeholder={
                    isTablet && isFooter
                      ? translations[language].form.placeholder_message_tablet
                      : translations[language].form.placeholder_message
                  }
                ></textarea>
              </li>
            </ul>
          </div>
          <p className="form__required-fields">{translations[language].form.required}</p>
          <div className="form__button-submit-wrapper">
            <button
              type="submit"
              className="form__button-submit"
              aria-label={
                isTablet
                  ? translations[language].form.button_tablet
                  : translations[language].form.button
              }
            >
              {isTablet
                ? translations[language].form.button_tablet
                : translations[language].form.button}
            </button>
          </div>
        </div>
      </form>
      {isLoading && <Loader />}
      {notification && <Notification message={notification} isError={isError} />}
    </>
  );
};

export default Form;
