import React from "react";
import data from "../data/feedback.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const isProduction = process.env.NODE_ENV === "production";

const Feedback = () => {
const getPhotoPath = (photo) => {
  return isProduction ? `assets/${photo.split("/").pop()}` : photo;
};
  
  return (
    <section className="feedback container">
      <h2 className="feedback__title">Відгуки</h2>
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter:true,
        }}
      >
        {data.map((feedback, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <article className="feedback__card">
              <img
                className="feedback__img"
                src={getPhotoPath(feedback.photo)}
                alt={`${feedback.name} photo`}
              ></img>
              <div className="feedback__wrapper">
                <div className="feedback__wrapper-text">
                  <h3 className="feedback__name">{feedback.name}</h3>
                  <p className="feedback__text">{feedback.text} </p>
                </div>
                <div className="feedback__wrapper-date">
                  <p className="feedback__date">{feedback.date}</p>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Feedback;
