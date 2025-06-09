import React from 'react';
import styles from './CTA.module.css';

const CTA: React.FC = () => {
  return (
    <section className={styles.cta}>
      <h2 className={styles.title}>
        Готов сделать первый шаг<br />к профессии в IT?
      </h2>
      <button className={styles.button}>
        Записаться на бесплатную консультацию
      </button>
    </section>
  );
};

export default CTA;
