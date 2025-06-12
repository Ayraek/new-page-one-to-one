import React, { useEffect } from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  useEffect(() => {
    const path = document.getElementById('neonPath');
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
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.subtitle}>Профессия</p>
        <h1 className={styles.title}>Product-manager</h1>
        <p className={styles.description}>
          Обучение один на один с наставником-практиком
        </p>
      </div>

      <div className={styles.cardsWrapper}>
        <svg className={styles.neonLine} viewBox="0 0 1000 10" preserveAspectRatio="none">
          <path
            id="neonPath"
            d="M0 5 Q 250 5 500 5 Q 750 5 1000 5"
            fill="transparent"
            stroke="#00f0ff"
            strokeWidth="2"
          />
        </svg>

        <div className={`${styles.card} ${styles.left}`}>
          <span className={styles.label}>Исследования</span>
        </div>
        <div className={`${styles.card} ${styles.leftMid}`}>
          <span className={styles.label}>Разработка</span>
        </div>
        <div className={`${styles.card} ${styles.center}`}>
          <span className={styles.label}>Аналитика</span>
        </div>
        <div className={`${styles.card} ${styles.rightMid}`}>
          <span className={styles.label}>Экономика</span>
        </div>
        <div className={`${styles.card} ${styles.right}`}>
          <span className={styles.label}>ИИ</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;


