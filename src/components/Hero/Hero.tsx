import React from 'react';
import styles from './Hero.module.css';
import Illustration from '../../assets/illustration.svg'; // добавь свой SVG сюда

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Профессия “Продакт-менеджер”<br />
            <span className={styles.subtitle}>под руководством наставника</span>
          </h1>
          <p className={styles.description}>
            Индивидуальное обучение с наставником из Яндекса, Авито и VK
          </p>
          <button className={styles.button}>Записаться на бесплатную консультацию</button>
        </div>
        <div className={styles.imageContainer}>
          <img src={Illustration} alt="Hero illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;



