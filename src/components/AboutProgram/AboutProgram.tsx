import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const path = document.getElementById('aboutNeonPath');
    let mouseX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
    };

    const animate = () => {
      if (path) {
        const curve1 = 5 + Math.sin(mouseX * Math.PI * 2) * 10;
        const curve2 = 5 - Math.sin(mouseX * Math.PI * 2) * 10;

        path.setAttribute(
          'd',
          `M0 5 Q 250 ${curve1} 500 5 Q 750 ${curve2} 1000 5`
        );
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="AboutProgram" className={styles.aboutProgram}>
      {showProgram && <ProgramModal onClose={() => setShowProgram(false)} />}
      <h2 className={styles.title}>Программы академии</h2>
      <svg className={styles.neonLine} viewBox="0 0 1000 10" preserveAspectRatio="none">
        <path
          id="aboutNeonPath"
          d="M0 5 Q 250 5 500 5 Q 750 5 1000 5"
          fill="transparent"
          stroke="#00f0ff"
          strokeWidth="2"
        />
      </svg>
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


