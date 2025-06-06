import React from 'react';
import styles from './Courses.module.css';

const courses = [
  {
    title: 'С нуля до Junior/Middle',
    description:
      'Пошаговая программа обучения для начинающих и продолжающих: от базовой грамматики до уверенного общения и собеседований.',
  },
  {
    title: 'Senior программа',
    description:
      'Индивидуальная прокачка для продвинутых: ведение переговоров, специализированная лексика, международные экзамены.',
  },
];

const Courses: React.FC = () => {
  return (
    <section className={styles.courses}>
      <h2 className={styles.title}>Программы обучения</h2>
      <div className={styles.grid}>
        {courses.map((course, index) => (
          <div key={index} className={styles.card}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button>Подробнее</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;

