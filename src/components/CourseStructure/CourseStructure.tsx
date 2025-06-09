import React from 'react';
import styles from './CourseStructure.module.css';

const items = [
  {
    title: 'Модули обучения',
    text: 'Вы пройдете путь от основ управления продуктом до продвинутой аналитики, CJM, JTBD и гипотез.',
  },
  {
    title: 'Практика на реальных кейсах',
    text: 'Каждый этап закрепляется кейсами из продуктовой реальности: интервью, фичи, roadmap.',
  },
  {
    title: 'Общение с наставником',
    text: 'Все занятия проходят индивидуально — вы разберете свои кейсы и получите конкретную обратную связь.',
  },
];

const CourseStructure: React.FC = () => {
  return (
    <section className={styles.structure}>
      <h2 className={styles.title}>Структура курса</h2>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseStructure;
