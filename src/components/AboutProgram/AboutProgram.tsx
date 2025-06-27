import React from 'react';
import styles from './AboutProgram.module.css';

const programs = [
  {
    title: 'Product-manager с нуля',
    audience: 'Новички, студенты, начинающие менеджеры',
    duration: '2 - 4 месяца, 1-3 встречи в неделю',
    format: 'Индивидуальные Goolge meet-сессии, чат с наставником в Telegram',
    certificate: 'Диплом об окончании обучения',
  },
  {
    title: 'Senior программа',
    audience: 'Опытные PM, CPO, тимлиды, переходящие в продакт-стратегию',
    duration: '1–2 месяца, гибкий график',
    format: 'Стратегические сессии, ревью проектов, персональное сопровождение',
    certificate: 'Сертификат + персональная рекомендация от наставника',
  },
];

const AboutProgram: React.FC = () => {
  return (
    <section id="AboutProgram" className={styles.aboutProgram}>
      <h2 className={styles.title}>Программы академии</h2>
      {programs.map((program, index) => (
        <div key={index} className={styles.program}>
          <h3>{program.title}</h3>
          <p>
            <strong>Для кого:</strong> {program.audience}
          </p>
          <p>
            <strong>Длительность:</strong> {program.duration}
          </p>
          <p>
            <strong>Формат:</strong> {program.format}
          </p>
          <p>
            <strong>Документ:</strong> {program.certificate}
          </p>
        </div>
      ))}
    </section>
  );
};

export default AboutProgram;


