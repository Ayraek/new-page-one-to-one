import React, { useState } from 'react';
import styles from './Hero.module.css';
import HeroImage from '../../assets/Hero.svg';
import ConsultationForm from '../ConsultationForm/ConsultationForm';

const Hero: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className={styles.hero}>
      {showForm && <ConsultationForm onClose={() => setShowForm(false)} />}

      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Профессия “Продакт-менеджер”
            <br />
            <span className={styles.subtitle}>под руководством наставника-практика</span>
          </h1>
          <p className={styles.description}>
            Индивидуальное обучение с наставником из Яндекса, Авито и VK
          </p>
          <button className={styles.button} onClick={() => setShowForm(true)}>
            Записаться на бесплатную консультацию
          </button>
        </div>

        <div className={styles.imageContainer}>
          <img src={HeroImage} alt="Hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;



