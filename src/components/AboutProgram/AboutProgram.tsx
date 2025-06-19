import React, { useState } from 'react';
import styles from './AboutProgram.module.css';
import ProgramModal from '../ProgramModal/ProgramModal';

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
  const [showProgram, setShowProgram] = useState(false);

  return (
    <section id="AboutProgram" className={styles.aboutProgram}>
      {showProgram && <ProgramModal onClose={() => setShowProgram(false)} />}
      <h2 className={styles.title}>Программы академии</h2>
      <div className={styles.grid}>
        {programs.map((program, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{program.title}</h3>
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
            <button className={styles.button} onClick={() => setShowProgram(true)}>
              Подробнее
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutProgram;


