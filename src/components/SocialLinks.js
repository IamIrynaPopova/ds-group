import React from "react";
import sprite from "../images/sprite/sprite.svg";

const SocialLinks = () => {
  return (
    <nav className="social">
      <ul className="social__list">
        <li className="social__item">
          <a
            className="social__link"
            href="https://www.instagram.com/dsgroup.kyiv?igsh=MXAwZ2liZXMwOXZpOA=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
          >
            <svg className="social__svg">
              <use href={`${sprite}#instagram`}></use>
            </svg>
          </a>
        </li>
        <li className="social__item">
          <a
            className="social__link"
            href="https://www.facebook.com/profile.php?id=100061422600837"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="facebook"
          >
            <svg className="social__svg">
              <use href={`${sprite}#facebook`}></use>
            </svg>
          </a>
        </li>
        <li className="social__item">
          <a
            className="social__link"
            href="https://www.tiktok.com/@dsgroup.kyiv?_t=8orQq0D0dq1&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="tik-tok"
          >
            <svg className="social__svg">
              <use href={`${sprite}#tiktok`}></use>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialLinks;
