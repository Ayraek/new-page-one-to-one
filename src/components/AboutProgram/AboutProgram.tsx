import React from 'react';
import styles from './AboutProgram.module.css';

const programs = [
  {
    title: 'С нуля до Junior/Middle',
    audience: 'Новички, студенты, начинающие менеджеры',
    duration: '3–4 месяца, 1 встреча в неделю',
    format: 'Индивидуальные Zoom-сессии, чат с наставником в Telegram',
    certificate: 'Удостоверение о повышении квалификации (при наличии лицензии)',
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
    <section className={styles.programs}>
      <h2 className={styles.title}>Программы обучения</h2>
      <div className={styles.grid}>
        {programs.map((program, index) => (
          <div key={index} className={styles.card}>
            <h3>{program.title}</h3>
            <div className={styles.item}>
              <span>Для кого:</span>
              <p>{program.audience}</p>
            </div>
            <div className={styles.item}>
              <span>Длительность:</span>
              <p>{program.duration}</p>
            </div>
            <div className={styles.item}>
              <span>Формат:</span>
              <p>{program.format}</p>
            </div>
            <div className={styles.item}>
              <span>Документ:</span>
              <p>{program.certificate}</p>
            </div>
            <button className={styles.cta}>Подробнее</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutProgram;

