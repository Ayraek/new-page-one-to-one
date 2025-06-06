import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          Профессия Продукт-менеджер с нуля <br />
          под руководством наставника
        </h1>
        <p>Индивидуальное обучение с практикующими PM из топовых IT-компаний РФ</p>
        <button>Записаться на бесплатную консультацию</button>
      </div>
    </section>
  );
};

export default Hero;


