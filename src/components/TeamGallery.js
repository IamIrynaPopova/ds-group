import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import css from "../styles/components/team-gallery.scss";
import sprite from "../images/sprite/sprite.svg";

const isProduction = process.env.NODE_ENV === "production";

const TeamGallery = ({ photos }) => {
  const getPhotoPath = (photo) => {
    return isProduction ? `assets/${photo.split("/").pop()}` : photo;
  };

  return (
    <section className="gallery container">
      <div className="arrow__prev">
        <svg className="arrow__back-svg">
          <use href={`${sprite}#arrow-left`}></use>
        </svg>
      </div>
      <Swiper
        lazy={true}
        modules={[Navigation, EffectCoverflow]}
        navigation={{
          nextEl: ".arrow__next",
          prevEl: ".arrow__prev",
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        spaceBetween={40}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          scale: 0.9,
          modifier: 2.2,
          slideShadows: true,
        }}
        className="mySwiper"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img
              className="gallery__image"
              src={getPhotoPath(photo)}
              alt={`Slide ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="arrow__next">
        <svg className="arrow__back-svg">
          <use href={`${sprite}#arrow-left`}></use>
        </svg>
      </div>
    </section>
  );
};

export default TeamGallery;
