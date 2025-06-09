import React, { useEffect, useState } from 'react';
import styles from './Reviews.module.css';

import decorLeft from '../../assets/illustration-left.svg';
import decorRight from '../../assets/illustration-right.svg';

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

const Reviews: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const { name, text, photo } = reviews[current];

  return (
    <section className={styles.reviews}>
      <img src={decorLeft} alt="decor left" className={styles.decorLeft} />
      <img src={decorRight} alt="decor right" className={styles.decorRight} />
      <h2 className={styles.title}>Отзывы студентов</h2>
      <div className={styles.card}>
        <img src={photo} alt={name} className={styles.photo} />
        <p className={styles.text}>"{text}"</p>
        <p className={styles.name}>— {name}</p>
      </div>
    </section>
  );
};

export default Reviews;

