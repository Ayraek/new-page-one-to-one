import React from 'react';
import styles from './Benefits.module.css';

const benefits = [
  {
    title: 'Индивидуальный подход',
    description: 'Подбираем программу и преподавателя под ваши цели и уровень.',
  },
  {
    title: 'Удобное расписание',
    description: 'Вы выбираете дни и время занятий под себя.',
  },
  {
    title: 'Опытные преподаватели',
    description: 'В нашей команде — сертифицированные специалисты.',
  },
  {
    title: 'Прозрачные цены',
    description: 'Оплата только за занятия, без скрытых платежей.',
  },
  {
    title: 'Постоянная поддержка',
    description: 'Ваш личный куратор всегда на связи.',
  },
];

const Benefits: React.FC = () => {
  return (
    <section className={styles.benefits}>
      <h2 className={styles.title}>Почему One2One?</h2>
      <div className={styles.list}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.card}>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
