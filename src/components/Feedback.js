import React from "react";
import data from "../data/feedback.json";
import translations from "../data/translations.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const Feedback = ({ language }) => {
  return (
    <section className="feedback container">
      <h2 className="feedback__title">
        {translations[language].feedback.title}
      </h2>
      <div className="feedback__swiper">
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            // disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {data.map((feedback, index) => (
            <SwiperSlide
              className={`feedback__slide ${
                index % 2 === 1 ? "feedback__slide--even" : ""
              }`}
              key={index}
            >
              <article className="feedback__card">
                <img
                  className="feedback__img"
                  src={feedback.photo}
                  alt={`${feedback.name[language]} photo`}
                ></img>
                <div className="feedback__wrapper">
                  <div className="feedback__wrapper-text">
                    <h3 className="feedback__name">
                      {feedback.name[language]}
                    </h3>
                    <p className="feedback__text">{feedback.text[language]} </p>
                  </div>
                  <div className="feedback__wrapper-date">
                    <p className="feedback__date">{feedback.date[language]}</p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Feedback;
