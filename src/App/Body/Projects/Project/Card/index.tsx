import React from 'react';
import styles from './index.module.scss';
import Slider from 'react-slick';
import './slick-theme.scss';
import './slick.scss';
import fullscreenCard from '@/assets/images/fullscreen-card.svg';

export type PropsType = {
  screenshots: string[];
};

function Card (props: PropsType) {
  const settings = {
    dots: true,
    Infinit: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.root}>
      <Slider {...settings}>
        {props.screenshots.map((v, i) => (
          <div key={i}>
            <div className={styles.imgWrapper}>
              <img src={v} />
            </div>
          </div>
        ))}
      </Slider>
      <div className={styles.fullscreenButton}>
        <img src={fullscreenCard} />
      </div>
    </div>
  )
}

export default Card;
