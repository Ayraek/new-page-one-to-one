import React from 'react';
import Slider from 'react-slick';
import styles from './Reviews.module.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  {
    name: 'Анна Петрова',
    text: 'Уже через 3 месяца я прошла собеседование в IT-продукт. Преподаватель всегда помогал и объяснял!',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Игорь Смирнов',
    text: 'Готовился к собеседованию на Junior PM. Получил оффер в финтех-компанию!',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Мария Кузнецова',
    text: 'Обучение построено по-настоящему индивидуально. Разбирали кейсы из моего проекта.',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 6000,
};

const Reviews: React.FC = () => {
  return (
    <section className={styles.reviews}>
      <h2 className={styles.title}>Отзывы студентов</h2>
      <Slider {...sliderSettings}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.card}>
            <img src={review.photo} alt={review.name} className={styles.photo} />
            <p className={styles.text}>"{review.text}"</p>
            <p className={styles.name}>— {review.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Reviews;

