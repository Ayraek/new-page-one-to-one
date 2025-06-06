import React from 'react';
import styles from './LeadForm.module.css';

const CTA: React.FC = () => {
  return (
    <section className={styles.cta}>
      <h2 className={styles.title}>
        Стань тем продактом, <br />
        с каким мечтал бы работать сам
      </h2>
      <button className={styles.button}>Записаться на консультацию</button>
    </section>
  );
};

export default CTA;

