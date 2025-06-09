import React, { useEffect, useRef } from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className={styles.footer} ref={footerRef}>

      <div className={styles.columns}>
        <div className={styles.column}>
          <h4>Контакты</h4>
          <p>+7 (999) 123-45-67</p>
          <p>info@onetoone.ru</p>
        </div>
        <div className={styles.column}>
          <h4>Соц сети</h4>
          <a href="https://t.me/example" target="_blank" rel="noopener noreferrer">Telegram</a><br />
          <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className={styles.column}>
          <h4>Документы</h4>
          <a href="/offer.pdf" target="_blank" rel="noopener noreferrer">Публичная оферта</a><br />
          <a href="/privacy.pdf" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a>
        </div>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} One to One. Все права защищены.
      </p>
    </footer>
  );
};

export default Footer;
